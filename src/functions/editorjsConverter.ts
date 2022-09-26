import { IEditorJSArticle, IPostAttr } from "../types/blogtypes";

export default function editorjsConverter(article: string) {
  let htmlArr: Array<any> = [];
  const parsed: IEditorJSArticle = JSON.parse(article);

  parsed.blocks.map((block) => {
    const expr = block.type;

    switch (expr) {
      case "header":
        htmlArr.push(
          `<h${block.data.level.toString()} class="text-lg">${
            block.data.text
          }</h${block.data.level.toString()}>`
        );
        break;
      case "paragraph":
        htmlArr.push(`<p>${block.data.text}</p>`);
        break;
      case "image":
        htmlArr.push(
          `<Image src=${block.data.file.url} alt=${block.data.file.alt} width=${block.data.file.width} height=${block.data.file.height} />`
        );
        if (block.data.caption != "") {
          htmlArr.push(`<p>${block.data.caption}</p>`);
        }
        break;
      case "warning":
        htmlArr.push(`<p>${block.data.message}</p>`);
        htmlArr.push(`<p>${block.data.title}</p>`);
    }
  });

  return htmlArr.join('');
}
