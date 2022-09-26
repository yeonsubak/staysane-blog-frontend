import { IEditorJSArticle, IPostAttr } from "../types/blogtypes";

export default async function editorjsConverter(article: string) {
  let htmlArr: Array<any> = [];
  const parsed: IEditorJSArticle = await JSON.parse(article);

  parsed.blocks.map((block) => {
    const expr = block.type;

    switch (expr) {
      case "header":
        htmlArr.push(
          `<h${block.data.level.toString()} class="edjs-h2">${
            block.data.text
          }</h${block.data.level.toString()}>`
        );
        break;
      case "paragraph":
        htmlArr.push(`<p>${block.data.text}</p>`);
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
      case "list":
        htmlArr.push(`<ul class="edjs-list-ul">`);
        if (Array.isArray(block.data.items)) {
          block.data.items.map((item) => {
            htmlArr.push(`<li>${item}</li>`)
          })
        }
        htmlArr.push(`</ul>`);
      }
  });

  return htmlArr.join("");
}
