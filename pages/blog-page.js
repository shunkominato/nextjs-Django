import Layout from "./components/Layout"
import { getAllPostsData } from "../lib/posts";
import Post from "./components/posts";

const Blog = ( { posts } ) => {
  return (
    <Layout title='blog'>
      <ui className="m-10">
        {posts && posts.map((post) => {
          // <Post key={post.id} post={post} />
          <p>post</p>
        })}
      </ui>
    </Layout>
  )
}

// export const getStaticProps = async () => {
//   const posts = await getAllPostsData();
//   return {
//     props: { posts }
//   }
// }

export async function getStaticProps() {
  const posts = await getAllPostsData();
  console.log(posts)
  return {
    props: { posts },
  };
}

export default Blog
