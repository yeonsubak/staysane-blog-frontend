import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import BlogPost from "../../components/BlogPost";
import { editorjsConverter } from "../../functions/editorjsConverter";
import { IAllPosts, ISinglePost } from "../../types/blogtypes";

export async function getStaticPaths() {
  const res = await axios.get(`https://strapi.staysane.me/api/posts`);
  const { data }: IAllPosts = await res.data;

  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = (context.params as ParsedUrlQuery).id;
  const res = await axios.get(
    `https://strapi.staysane.me/api/posts/${id}?populate=coverImg&populate=author.profileImg&populate=hashtags`
  );
  const data = await res.data;
  const article = await editorjsConverter(data.data.attributes.article);

  return await {
    props: {
      data: data.data,
      article: article,
      coverImg: data.data.attributes.coverImg,
    },
  };
};

const PostDetail = ({ data, article, coverImg }: ISinglePost) => {
  return (
    <div className="mb-8 flex justify-center">
      <Head>
        <title>{`${data.attributes.title} | Stay Sane, Think Straight`}</title>
      </Head>
      <BlogPost
        id={data.id}
        attributes={data.attributes}
        isFull={true}
        article={article}
        coverImg={coverImg}
      />
    </div>
  );
};

export default PostDetail;
