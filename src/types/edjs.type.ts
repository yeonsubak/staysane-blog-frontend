export interface IEditorJSArticle {
  blocks: IEditorJSBlocks[];
  time: Date;
}

export interface IEditorJSBlocks {
  data: IEditorJSData;
  id: string;
  type: string;
}

export interface IEditorJSData {
  html: string;
  level: number;
  text: string;
  caption: string;
  file: IEditorJSImg;
  stretched: boolean;
  withBackground: boolean;
  withBorder: boolean;
  message: string;
  title: string;
  style: string;
  items: string[];
  withHeadings: boolean;
  content: Array<string[]>;
  code: string;
}

export interface IEditorJSImg {
  url: string;
  alt: string;
  width: number;
  height: number;
  mime: string;
}
