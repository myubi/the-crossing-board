import Layout from "../components/Layout";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

export default function Info({ frontmatter, markdownBody }) {
  const aboutFrontmatter = frontmatter;
  const aboutBody = markdownBody;

  return (
    <div>
      <Head>
        <title>The Crossing Board - DIY Bottle Recipe</title>
      </Head>
      <Layout>
        <div className="section">
          <div className="wrapper">
            <ReactMarkdown>{aboutBody}</ReactMarkdown>
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            background-color: #fdf8e3;
            margin: 20px auto;
            border-radius: 10px;
            padding: 20px;
            color: #667756;
            max-width: 60vw;
          }
          .wrapper :global(img) {
            max-width: 50%;
            margin: 0 auto;
          }
        `}</style>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const content = await import(`../data/DIYBottleRecipe.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}
