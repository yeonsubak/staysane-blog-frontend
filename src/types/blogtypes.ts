// Posts-related interfaces
export interface GetAllPosts {
  data: BlogPosts[];
  meta: Meta;
}

export interface BlogPosts {
  key: number;
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  article: string;
  publishedDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  coverImg: CoverImg;
  hashtags: Hashtag[];
  localizations: string;
  author: Author
}

export interface Hashtag {
  id: number;
  hashtag: string;
}

export interface CoverImg {
  data: CoverImgDatum[] | null;
}

export interface CoverImgDatum {
  id: number;
  attributes: MediaAttributes;
}

export interface MediaAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
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

export interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
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

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// Author-related interfaces
export interface Author {
  data: AuthorData;
}

export interface AuthorData {
  id: number;
  attributes: AuthorAttributes;
}

export interface AuthorAttributes {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  profileImg: ProfileImg;
}

export interface ProfileImg {
  data: ProfileImgData;
}

export interface ProfileImgData {
  id: number;
  attributes: MediaAttributes;
}
