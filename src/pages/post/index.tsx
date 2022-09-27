import axios from "axios";
import { GetStaticProps } from "next";
import BlogPost from "../../components/BlogPost";
import { editorjsConverter } from "../../functions/editorjsConverter";
import { IAllPosts } from "../../types/blogtypes";

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    `https://strapi.staysane.me/api/posts?populate=coverImg&populate=author.profileImg&populate=hashtags`
  );
  const { data }: IAllPosts = await res.data;
  //Map으로 돌리자
  let htmlArr: Array<string> = [];
  const artile: any = await data.map(post => {
    htmlArr.push()
  })

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
        <BlogPost
          key={data.id}
          id={data.id}
          attributes={data.attributes}
          isFull={false}
          article={article}
        />
      ))}
    </div>
  );
};

export default Posts;
