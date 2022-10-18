import { GetStaticProps } from "next";
import Head from "next/head";
import axios from "axios";

import { editorjsConverter } from "../functions/editorjsConverter";
import { IAllPosts, IPostIndex } from "../types/query.type";
import BlogPost from "../components/post/BlogPost";
import { getHashtagList } from "../graphql/graphqlQueries";
import HashtagList from "../components/post/HashtagList";

export const getStaticProps: GetStaticProps = async () => {
  // Post props
  const postList = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/api/posts?populate=coverImg&populate=author.profileImg&populate=hashtags`
  );
  const { data }: IAllPosts = await postList.data;
  const rvsData = await data.reverse();

  await rvsData.map(async (data) => {
    const parsedArticle = await editorjsConverter(data.attributes.article);
    data.attributes.article = parsedArticle;
  });

    // Hashtag props
    const hashtagList = await getHashtagList();

  return await {
    props: {
      postList: rvsData,
      hashtagList: hashtagList,
    },
  };
};

const Home = ({ postList, hashtagList }: IPostIndex) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Head>
        <title>Blog | Stay Sane, Think Straight</title>
      </Head>
      <HashtagList hashtagList={hashtagList} />
      {postList?.map((data) => (
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

export default Home;
