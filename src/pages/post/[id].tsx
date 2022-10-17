import axios from "axios";
import { setCookie, hasCookie } from "cookies-next";
import { GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";
import BlogPost from "../../components/BlogPost";
import { editorjsConverter } from "../../functions/editorjsConverter";
import { IAllPosts, ISinglePost } from "../../types/blogtypes";

export async function getStaticPaths() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/api/posts`);
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
    `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/api/posts/${id}?populate=coverImg&populate=author.profileImg&populate=hashtags`
  );
  const data = await res.data;
  const article = await editorjsConverter(data.data.attributes.article);

  return await {
    props: {
      data: data.data,
      article: article,
    },
  };
};

const PostDetail = ({ data, article }: ISinglePost) => {

  useEffect(() => {
    if (!hasCookie(`readPost-${data.id}`)) {
      //Increase number of views
      axios.put(`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/api/posts/${data.id}`, {
        data: {
          view: data.attributes.view + 1,
        },
      });
      // Set a cookie to prevent view increase while refreshing.
      setCookie(`readPost-${data.id}`, true);
    }
  })

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
      />
    </div>
  );
};

export default PostDetail;
