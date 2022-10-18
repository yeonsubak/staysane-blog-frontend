import { GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import BlogPost from "../../components/post/BlogPost";
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
  const queryResult = await getPostsByHashtag(id);

  return await {
    props: {
      data: queryResult,
      id: id
    },
  };
};

const HashtagResult = (props: IHashtagSingle) => {
  const data = props.data;
  // console.log(data.attributes.posts.data[0].attributes.coverImg.data.)
  return (
    <div className="flex flex-col items-center gap-4">
      <Head>
        <title>{`Hashtag Result: #${data.attributes.hashtag} | Stay Sane, Think Straight`}</title>
      </Head>
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
