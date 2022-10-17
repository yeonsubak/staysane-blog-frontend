import { IPost, IMeta } from "./blog.type";
import { IHashtagList } from "./hashtag.type";

/**
 * Type interface for props in '../pages/post/index.tsx'
 * @param {IPost} postList
 * @param {IHashtagList[]} hashtagList
 */
export interface IPostIndex {
  postList?: IPost[];
  hashtagList: IHashtagList[];
}

/**
 * Type interface for getStaticProps in '../pages/post/index.tsx' and '../pages/post/[id].tsx'
 * @param {IPost[]} data
 * @param {Imeta} meta
 */
export interface IAllPosts {
  data: IPost[];
  meta: IMeta;
}

/**
 * Type interface for props in '../pages/post/[id].tsx'
 * @param {IPost} data
 * @param {IMeta} meta
 * @param {string} article
 */
export interface ISinglePost {
  data: IPost;
  meta: IMeta;
  article: string;
}
