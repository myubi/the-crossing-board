import * as React from 'react';
import matter from "gray-matter";
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";

export default function Magazine (props) {
  const frontmatter = props.data;
  const body = props.content;
  
  return(
      <div>
      <Head>
        <title>The Crossing Board - Magazine</title>
        <script src="https://gumroad.com/js/gumroad-embed.js"></script>
      </Head>
      <Layout>
      <div className="wrapper">
      <div className="magazine-faq">
        <ReactMarkdown source={body} />
      </div>
      <div className="gumroad"class="gumroad-product-embed" data-gumroad-product-id="cwDdq"><a className="gumroad-link" href="https://gumroad.com/l/cwDdq"><img src="/images/loading.svg" alt="Loading" /></a></div>
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
          .gumroad {
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

Magazine.getInitialProps = async function() {
  const content = await import(`../data/magazine.md`)
  const data = matter(content.default)

  return {
    ...data
  }
}
    