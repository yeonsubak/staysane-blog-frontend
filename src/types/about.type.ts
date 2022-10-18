import { IMediaAttr } from "./blog.type";

export interface GetAbout {
  data: IAbout;
  article: string;
}

export interface IAbout {
  id: number;
  attributes: IAboutAttr;
}

export interface IAboutAttr {
  Body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  profileImg: ProfileImgData;
}

export interface ProfileImgData {
  data: ProfileImgAttr;
}

export interface ProfileImgAttr {
  id: number;
  attributes: IMediaAttr;
}
