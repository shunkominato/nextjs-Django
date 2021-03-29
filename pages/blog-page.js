import Layout from "../components/Layout"
import { getAllPostsData } from "../lib/posts";
import Post from "../components/Posts";

const Blog = ( { posts } ) => {
  console.log(posts)
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
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
