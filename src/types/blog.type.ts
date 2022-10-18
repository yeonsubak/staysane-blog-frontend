import { IHashtagMultiple } from './hashtag.type';
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
  coverImgBGColor: string;
  coverImg: ICoverImg;
  localizations: string;
  author: IAuthor;
  hashtags: IHashtagMultiple;
  readTime: number;
  view: number;
}

export interface ICoverImg {
  data: ICoverImgData;
}

export interface ICoverImgData {
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
  createdAt: string;
  updatedAt: string;
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
  createdAt: string;
  updatedAt: string;
  profileImg: IProfileImg;
}

export interface IProfileImg {
  data: IProfileImgData;
}

export interface IProfileImgData {
  id: number;
  attributes: IMediaAttr;
}

