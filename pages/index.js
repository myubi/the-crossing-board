import matter from "gray-matter";
import Head from "next/head";
import Layout from "../components/Layout";
import BlogList from "../components/BlogList";

const Home = ({ allBlogs }) => (
  <div>
    <Head>
      <title>The Crossing Board</title>
      <meta property="og:description" content="A fan-made Animal Crossing news site with a fan-made monthly fanzine!" /> 
      <meta name="description" content="A fan-made Animal Crossing news site with a fan-made monthly fanzine!" />
    </Head>
    <Layout>
      <BlogList allBlogs={allBlogs} />
    </Layout>
  </div>
);

export default Home;

export async function getStaticProps() {
  //get posts & context from folder
  const posts = ((context) => {
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
      const { data, content } = matter(value.default);
      return {
        title: data.title,
        author: data.author,
        date: data.date.toString(),
        draft: data.draft,
        markdownBody: content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      allBlogs: posts,
    },
  };
}
