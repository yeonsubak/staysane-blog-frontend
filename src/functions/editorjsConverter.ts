import { IEditorJSArticle } from "../types/blogtypes";

export async function editorjsConverter(article: string) {
  let htmlArr: Array<string> = [];
  const parsed: IEditorJSArticle = await JSON.parse(article);

  await parsed.blocks.map((block) => {
    const expr = block.type;

    switch (expr) {
      case "header":
        htmlArr.push(
          `<h${block.data.level.toString()} class="edjs-header">${
            block.data.text
          }</h${block.data.level.toString()}>`
        );
        break;

      case "paragraph":
        htmlArr.push(`<p class="edjs-p">${block.data.text}</p>`);
        break;

      case "image":
        htmlArr.push(`<div class="py-4 flex flex-col items-center">`);
        htmlArr.push(
          `<Image src=${block.data.file.url} alt=${block.data.file.alt} width=${block.data.file.width} height=${block.data.file.height} />`
        );
        if (block.data.caption != "") {
          htmlArr.push(`<p class="edjs-caption">${block.data.caption}</p>`);
        }
        htmlArr.push(`</div>`);
        break;

      case "warning":
        htmlArr.push(`<div class="edjs-warning-box">`);
        htmlArr.push(`<p class="edjs-warning-title">${block.data.title}</p>`);
        htmlArr.push(
          `<p class="edjs-warning-message">${block.data.message}</p>`
        );
        htmlArr.push(`</div>`);
        break;

      case "list":
        if (block.data.style === 'ordered') {
          htmlArr.push(`<ol class="edjs-list">`);
        } else {
          htmlArr.push(`<ul class="edjs-list">`);
        }
        block.data.items.map((item) => {
          htmlArr.push(`<li>${item}</li>`);
        });
        if (block.data.style === 'ordered') {
          htmlArr.push(`</ol>`);
        } else {
          htmlArr.push(`</ul">`);
        }
        break;

      case "table":
        htmlArr.push(`<table class="edjs-table">`);
        if (block.data.withHeadings) {
          block.data.content.map((content, idx) => {
            if (idx === 0) {
              htmlArr.push(`<thead><tr>`);
              content.map((th) => {
                htmlArr.push(`<th class="edjs-table-th">${th}</th>`);
              });
              htmlArr.push(`</tr></thead>`);
            } else if (idx === 1) {
              htmlArr.push(`<tbody><tr>`);
              content.map((td) => {
                htmlArr.push(`<td class="edjs-table-td">${td}</td>`);
              });
              htmlArr.push(`</tr>`);
            } else {
              htmlArr.push(`<tr>`);
              content.map((td) => {
                htmlArr.push(`<td class="edjs-table-td">${td}</td>`);
              });
              htmlArr.push(`</tr>`);
            }
          });
        }
        htmlArr.push(`</tbody></table>`);
        break;

      case "code":
        htmlArr.push(`<div class="edjs-code">`);
        htmlArr.push(`<p>${block.data.code}</p>`);
        htmlArr.push(`</div>`);
        break;

      default:
        htmlArr.push(`<div>Undefined block type: ${block.type}</div>`);
    }
  });
  return htmlArr.join("");
}
