import Layout from "../components/Layout";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

export default function Jobs({ frontmatter, markdownBody }) {
  return (
    <div>
      <Head>
        <title>The Crossing Board - Jobs</title>
      </Head>
      <Layout>
        <div className="jobs-wrapper">
          <h2>{frontmatter.title}</h2>
          <ReactMarkdown source={markdownBody} />
        </div>
        <style jsx>{`
          .jobs-wrapper {
            background-color: #fdf8e3;
            margin: 20px auto;
            border-radius: 10px;
            padding: 20px;
            color: #667756;
            max-width: 60vw;
          }
          .jobs-wrapper :global(a) {
            color: #165940;
            transition: all 0.2s ease-in-out;
          }

          .jobs-wrapper :global(a:hover) {
            color: #82b75a;
          }
        `}</style>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const content = await import(`../data/jobs.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}
