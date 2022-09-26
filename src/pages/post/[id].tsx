import axios from "axios";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from 'querystring';
import BlogPost from "../../components/BlogPost";
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

  return {
    props: {
      data: data.data,
    },
  };
};

const PostDetail = ({ data }: ISinglePost) => {
  return (
    <div className="flex justify-center">
      <BlogPost id={data.id} attributes={data.attributes} isFull={true} />
    </div>
  );
};

export default PostDetail;
