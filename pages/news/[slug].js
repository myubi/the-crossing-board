import * as React from 'react'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import HyvorTalk from 'hyvor-talk-react';
import Head from 'next/head';

import Layout from '../../components/Layout'

export default function BlogTemplate(props) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }
  const markdownBody = props.content
  const frontmatter = props.data

  return (
    <div>
    <Head>
      <title>The Crossing Board - {frontmatter.title}</title>
    </Head>
    <Layout pathname='info' bgColor={frontmatter.background_color} siteTitle={props.title}>
    <div className="article-wrapper">
    <article className="blog">
     
        <h3>{reformatDate(frontmatter.date)}</h3>
        <div>
        <h1>{frontmatter.title}</h1>
        <ReactMarkdown source={markdownBody} />
        </div>
        <h1 className="article-author">
        {frontmatter.author}
        </h1>
    </article>
    <div>
      <HyvorTalk.Embed websiteId={1011} />
    </div>
    <style jsx>
      {`
        .article-wrapper {
          background-color: #fdf8e3;
          margin: 20px 30px;
          border-radius: 10px;
          text-align: left;
          padding: 20px;
          color: #667756;
        }
        h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          text-align: left;
          border-bottom: 2px dashed #D19740;
          color: #946e49;
        }
        .article-author {
          text-align: right;
          color: #946e49;
        }
      `}
      
    </style>
    </div>
    </Layout>
    </div>
    );

}

BlogTemplate.getInitialProps = async function(ctx) {
  const { slug } = ctx.query
  const content = await import(`../../posts/${slug}.md`)
  const data = matter(content.default);
  return {
    ...data
  }
}