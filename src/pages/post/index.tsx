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
  const rvsData = data.reverse()
  const newData = []

  rvsData.map(async (data) => {
    const parsedArticle = await editorjsConverter(data.attributes.article)
    data.attributes.article = parsedArticle
  })

  return {
    props: {
      data: rvsData,
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
          article={data.attributes.article}
        />
      ))}
    </div>
  );
};

export default Posts;
