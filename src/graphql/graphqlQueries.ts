import { IHashtagAttr } from './../types/hashtag.type';
import { gql } from "@apollo/client";
import { IHashtagList } from "../types/hashtag.type";
import client from "./apolloClient";

export async function getHashtagList() {
  const hashtagList: IHashtagList[] = [];
  const { data } = await client.query({
    query: gql`
      {
        hashtags {
          data {
            id
            attributes {
              hashtag
              posts {
                data {
                  attributes {
                    title
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  await data.hashtags.data.map((result: any) => {
    const hashtagName = result.attributes.hashtag;
    const postCnt = result.attributes.posts.data.length;
    const hashtagId = result.id;

    hashtagList.push({
      hashtag: hashtagName,
      count: postCnt,
      id: hashtagId,
    });
  });

  return hashtagList;
}

export async function getPostsByHashtag(id: string | string[] | undefined) {
  const { data } = await client.query({
    query: gql`
    {
      hashtag(id: ${id}) {
        data {
          id
          attributes {
            hashtag
            posts (sort: "id:desc") {
              data {
                id
                attributes {
                  title
                  article
                  coverImgBGColor
                  readTime
                  publishedAt
                  coverImg {
                    data {
                      id
                      attributes {
                        alternativeText
                        url
                        width
                        height
                        formats
                      }
                    }
                  }
                  author {
                    data {
                      attributes {
                        name
                        profileImg {
                          data {
                            attributes {
                              alternativeText
                              formats
                            }
                          }
                        }
                      }
                    }
                  }
                  hashtags {
                    data {
                      id
                      attributes {
                        hashtag
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
  });

  const queryResult: IHashtagAttr[] = await data.hashtag.data

  return queryResult
}
