import { GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import BlogPost from "../../components/post/BlogPost";
import HashtagList from "../../components/post/HashtagList";
import {
  getHashtagList,
  getPostsByHashtag,
} from "../../graphql/graphqlQueries";
import { IHashtagList, IHashtagSingle } from "../../types/hashtag.type";

export async function getStaticPaths() {
  const hashtagList: IHashtagList[] = await getHashtagList();

  const paths = hashtagList.map((hashtag) => ({
    params: { id: hashtag.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = (context.params as ParsedUrlQuery).id;
  const postsByHashtag = await getPostsByHashtag(id);
  const hashtagList = await getHashtagList();

  return await {
    props: {
      id: id,
      data: postsByHashtag,
      hashtagList: hashtagList,
    },
  };
};

const HashtagResult = (props: IHashtagSingle) => {
  const data = props.data;
  const hashtagList = props.hashtagList;

  return (
    <div className="flex flex-col items-center gap-4">
      <Head>
        <title>{`Hashtag Result: #${data.attributes.hashtag} | Stay Sane, Think Straight`}</title>
      </Head>
      <HashtagList hashtagList={hashtagList} />
      {data.attributes.posts.data.map((data) => (
        <BlogPost
          key={data.id}
          id={data.id}
          attributes={data.attributes}
          isFull={false}
          article={data.attributes.article}
        />
      ))}
    </div>
  );
};

export default HashtagResult;
