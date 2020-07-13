import matter from 'gray-matter'
import Head from 'next/head'
import Layout from "../components/Layout";
import BlogList from "../components/BlogList";

const Home = (props) => (
  <div>
    <Head>
      <title>The Crossing Board</title>
    </Head>
    <Layout>
        <BlogList allBlogs={props.allBlogs}/>
    </Layout>
  </div>
)

export default Home;

Home.getInitialProps = async function() {
   //get posts & context from folder
   const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        document,
        slug
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    allBlogs: posts
  }
}