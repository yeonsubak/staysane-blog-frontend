import axios from "axios";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(`https://strapi.staysane.me/api/posts?populate=%2A`)
  const data = await res.data

  return {
    props: {
      api: data
    }
  }
}

const Posts = ({ api }: any) => {
  const posts = api.data

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post: any) => (
        <div key={post.id}>
          <a>
            <h3>{post.attributes.title}</h3>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Posts;