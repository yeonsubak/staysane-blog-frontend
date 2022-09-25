import axios from "axios";
import { GetStaticProps } from "next";
import BlogPostShort from "../../components/BlogPostShort";
import { BlogPosts, GetAllPosts, Attributes } from "../../types/blogtypes";

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    `http://strapi.staysane.me/api/posts?populate=hashtags&populate=coverImg&populate=author.profileImg`
  );
  const { data }: GetAllPosts = await res.data;

  return {
    props: {
      data: data,
    },
  };
};

const Posts = ({ data }: GetAllPosts) => {
  return (
    <div>
      {data.map((data) => (
        <BlogPostShort key={data.id} id={data.id} attributes={data.attributes} />
      ))}
    </div>
  );
};

export default Posts;
