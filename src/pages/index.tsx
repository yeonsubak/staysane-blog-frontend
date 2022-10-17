import { GetStaticProps } from "next";
import Head from "next/head";
import axios from "axios";

import { IAllPosts } from "../types/blogtypes";
import { editorjsConverter } from "../functions/editorjsConverter";
import BlogPost from "../components/BlogPost";

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/api/posts?populate=coverImg&populate=author.profileImg&populate=hashtags`
  );
  const { data }: IAllPosts = await res.data;
  const rvsData = await data.reverse();

  await rvsData.map(async (data) => {
    const parsedArticle = await editorjsConverter(data.attributes.article);
    data.attributes.article = parsedArticle;
  });

  return await {
    props: {
      data: rvsData,
    },
  };
};

const Home = ({ data }: IAllPosts) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Head>
        <title>Blog | Stay Sane, Think Straight</title>
      </Head>
      {data.map((data) => (
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
