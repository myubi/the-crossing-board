import * as React from 'react'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import HyvorTalk from 'hyvor-talk-react';
import Head from 'next/head';
import glob from 'glob';

import Layout from '../../components/Layout'

export default function BlogTemplate({frontmatter, markdownBody}) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }

  return (
    <div>
    <Head>
      <title>The Crossing Board - {frontmatter.title}</title>
    </Head>
    <Layout pathname='info'>
    <div className="article-wrapper">
    <article className="blog">
     
        <h3 className="date">{reformatDate(frontmatter.date)}</h3>
        <div>
        <h1 className="title">{frontmatter.title}</h1>
        <ReactMarkdown source={markdownBody} escapeHtml={false} />
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
          margin: 20px 10%;
          border-radius: 10px;
          text-align: left;
          padding: 20px;
          color: #667756;
        }
        .date {
          margin-top: 0;
          margin-bottom: 1rem;
          text-align: left;
          border-bottom: 2px dashed #D19740;
          color: #946e49;
        }
        .title {
          font-size: 1.7em;
        }
        .article-author {
          text-align: right;
          color: #946e49;
        }
        
        .blog  :global(img) {
          max-width: 50%;
          margin: 0 auto;
          border-radius: 40px;
          border: 5px solid;
        }
        
        .blog  :global(.no-border) {
          border: none;
          border-radius: none;
        }
        
        .blog :global(.image-center) {
          text-align: center;
        }
        
        .blog :global(.image-credit) {
          text-align: center;
          margin: 0;
          paddding: 0;
        }
        
        .blog :global(a) {
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

export async function getStaticPaths() {

  const blogs = glob.sync('posts/**/*.md')

  const blogSlugs = blogs.map(file =>
    file
      .split('/')[1]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  const paths = blogSlugs.map(slug => `/news/${slug}`);
  
  return { paths, fallback: false }
}


export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../posts/${slug}.md`)
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content
    },
  }
}