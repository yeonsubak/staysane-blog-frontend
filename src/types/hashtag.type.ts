import { IPost } from "./blog.type";
export interface IHashtagList {
  hashtag: string;
  count: number;
  id: number;
}

export interface IHashtagMultiple {
  data: IHashtagDatum[];
}

export interface IHashtagSingle {
  data: IHashtagDatum;
}

export interface IHashtagDatum {
  id: number;
  attributes: IHashtagAttr;
}

export interface IHashtagAttr {
  hashtag: string;
  createdAt: string;
  updatedAt: string;
  posts: {
    data: IPost[];
  };
}
