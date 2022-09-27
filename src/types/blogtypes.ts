// Posts-related interfaces
export interface IAllPosts {
  data: IPost[];
  meta: IMeta;
}

export interface ISinglePost {
  data: IPost;
  meta: IMeta;
  article: string;
}

export interface IPropsBlogPost {
  id: number;
  attributes: IPostAttr;
  isFull: boolean;
  article: string;
}

export interface IPost {
  key: number;
  id: number;
  attributes: IPostAttr;
}

export interface IPostAttr {
  title: string;
  article: string;
  publishedDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  coverImg: ICoverImg;
  localizations: string;
  author: IAuthor;
  hashtags: IHashtag;
}

export interface ICoverImg {
  data: ICoverImgDatum[] | null;
}

export interface ICoverImgDatum {
  id: number;
  attributes: IMediaAttr;
}

export interface IMediaAttr {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: IFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFormats {
  large: ILarge;
  small: ILarge;
  medium: ILarge;
  thumbnail: ILarge;
}

export interface ILarge {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export interface IMeta {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// Author-related interfaces
export interface IAuthor {
  data: IAuthorData;
}

export interface IAuthorData {
  id: number;
  attributes: IAuthorAttr;
}

export interface IAuthorAttr {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  profileImg: IProfileImg;
}

export interface IProfileImg {
  data: IProfileImgData;
}

export interface IProfileImgData {
  id: number;
  attributes: IMediaAttr;
}

// Hashtag-related interfaces
export interface IHashtag {
  data: IHashtagDatum[];
}

export interface IHashtagDatum {
  id: number;
  attributes: IHashtagAttr;
}

export interface IHashtagAttr {
  hashtag: string;
  createdAt: Date;
  updatedAt: Date;
}

// EditorJS Block Converter
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
  level: number;
  text: string;
  caption: string;
  file: IEditorJSImg;
  stretched: boolean;
  withBackground: boolean;
  withBorder: boolean;
  message: string;
  title: string;
  items: string[];
}

export interface IEditorJSImg {
  url: string;
  alt: string;
  width: number;
  height: number;
  mime: string;
}
