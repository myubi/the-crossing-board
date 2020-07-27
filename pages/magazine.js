import React from 'react';
import matter from "gray-matter";
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";

export default class Magazine extends React.Component {

  render() {
    const { frontmatter, markdownBody } = this.props;
    return(
        <div>
        <Head>
          <title>The Crossing Board - Magazine</title>
        </Head>
        <Layout>
        <div className="wrapper">
        <div className="magazine-faq">
          <ReactMarkdown source={markdownBody} />
        </div>
        <div className="closed-wrapper">
        <span className="closed-text">
        Hi there! Thanks for stopping by. If you’re looking to subscribe for the next issue of The Crossing Board, please come back on the 1st of August when subscriptions reopen! See you very soon :)
        </span>
        </div>
        <style jsx>
          {`
            .wrapper {
              background-color: #fdf8e3;
              margin: 20px 10%;
              border-radius: 10px;
              padding: 20px;
              color: #667756;
              text-align: center;
            }
            .closed-wrapper {
              max-width: 80%;
              margin: 0 auto;
            }
            .closed-text {
              background-color: #667756;
              color: #fcf8e3;
              padding: 10px;
              line-height: 2;
              box-shadow: 8px 0px 1px #657755, -8px 0px 1px #657755;
              
            }
            .gumroad-product-embed {
              text-align: center;
            }
            .gumroad-link {
              border-bottom: none;
            }
            .magazine-faq {
              text-align: left;
            }
            .magazine-faq :global(ul) {
              list-style-type: '${'\\1F31F'}';
            }
            .magazine-faq :global(li) {
              padding-left: 10px;
            }
            .magazine-faq :global(a) {
              color: #946e49;
              border-bottom: 2px dashed #D19740;
              text-decoration: none;
            }
          `}
          
        </style>
        </div>
        </Layout>
        </div>
    );
  }
}

export async function getStaticProps() {
  const content = await import(`../data/magazine.md`)
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content
    },
  }
}
    