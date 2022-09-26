import axios from "axios";
import { GetStaticProps } from "next";
import BlogPost from "../../components/BlogPost";
import { IAllPosts} from "../../types/blogtypes";

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    `https://strapi.staysane.me/api/posts?populate=coverImg&populate=author.profileImg&populate=hashtags`
  );
  const { data }: IAllPosts = await res.data;

  return {
    props: {
      data: data,
    },
  };
};

const Posts = ({ data }: IAllPosts) => {
  return (
    <div>
      {data.map((data) => (
        <BlogPost id={data.id} attributes={data.attributes} dispType='preview' />
      ))}
    </div>
  );
};

export default Posts;
