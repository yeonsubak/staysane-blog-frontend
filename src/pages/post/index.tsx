import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import BlogPost from "../../components/BlogPost";
import { editorjsConverter } from "../../functions/editorjsConverter";
import { IAllPosts } from "../../types/blogtypes";

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    `https://strapi.staysane.me/api/posts?populate=coverImg&populate=author.profileImg&populate=hashtags`
  );
  const { data }: IAllPosts = await res.data;
  const rvsData = await data.reverse();

  await rvsData.map(async (data) => {
    const parsedArticle = await editorjsConverter(data.attributes.article);
    data.attributes.article = parsedArticle;
  });

  // console.log(rvsData[0].attributes.coverImg.data.attributes.url)

  return await {
    props: {
      data: rvsData,
      coverImg: rvsData
    },
  };
};

const Posts = ({ data }: IAllPosts) => {
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
          coverImg={""}
        />
      ))}
    </div>
  );
};

export default Posts;
