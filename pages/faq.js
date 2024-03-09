import Layout from "../components/Layout";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

export default function FAQ({ frontmatter, markdownBody }) {
  return (
    <div>
      <Head>
        <title>The Crossing Board - Frequently Asked Questions</title>
      </Head>
      <Layout>
        <div className="faq-wrapper">
          <h2>{frontmatter.title}</h2>
          <ReactMarkdown>{markdownBody}</ReactMarkdown>
        </div>
        <style jsx>{`
          .faq-wrapper {
            background-color: #fdf8e3;
            margin: 20px auto;
            border-radius: 10px;
            padding: 20px;
            color: #667756;
            max-width: 60vw;
          }
          .faq-wrapper :global(a) {
            color: #165940;
            transition: all 0.2s ease-in-out;
          }

          .faq-wrapper :global(a:hover) {
            color: #82b75a;
          }

          .faq-wrapper :global(img) {
            max-width: 100%;
          }

          @media (max-width: 768px) {
            .faq-wrapper {
              max-width: 90vw;
            }
          }
        `}</style>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const content = await import(`../data/faq.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}
