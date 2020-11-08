import Head from 'next/head';
import React from 'react';
import Layout from "../components/Layout";
import Link from "next/link";

export default class QuizContainer extends React.Component {
  
  render() {
    
    return (
      <div>
      <Head>
        <title>The Crossing Board - Quizzes</title>
      </Head>
      <Layout>
      <div className="quiz-wrapper">
      <div className="quiz-header">Quizzes</div>
      {this.props.allquizzes.map(quiz => (
        <Link
          key={quiz.name}
          href={{ pathname: `/quizzes/${quiz.slug}` }}
        >
          <a>
            <div className="quiz-title">
               {quiz.name}
            </div>
          </a>
        </Link>
      ))}
      </div>
      <style jsx>{`
        .quiz-wrapper {
          background-color: #fdf8e3;
          max-width: 80%;
          margin: 20px auto;
          padding: 20px;
          border-radius: 10px;
          color: #667756;
        }
        .quiz-header {
          font-size: 2em;
          font-size: bold;
          margin-bottom: 20px;
        }
        .quiz-title {
          font-size: 2em;
          font-weight: bold;
          background: #c88d5e;
          width: fit-content;
          margin: 0 auto;
          padding: 10px 50px;
          border: 2px dashed #fef0d1;
          border-radius: 20px;
          margin-bottom: 20px;
          color: #fef0d1;
          transition: all 0.5s ease-in-out;
        }
        .quiz-title:hover {
          color: #c88d5e;
          background-color: #fef0d1;
          border: 2px dashed #c88d5e;  
        }
        a {
          text-decoration: none;
        }
        
        .quiz-name {
          font-size: 1.2em;
          color: #c88c5d;
          font-weight: bold;
        }
        
        :global(.quiz-reset-button) {
          border-radius: 20px;
          cursor: pointer;
          width: fit-content;
          padding: 10px 50px;
          margin: 0 auto;
          background-color: #c88d5e;
          color: #fef0d1;
          transition: all 0.5s ease-out;
        }
        
        :global(.quiz-reset-button:hover) {
          background-color: #667756;
        }
      `}</style>
    </Layout>
    </div>
    );    
  }
}

export async function getStaticProps() {
  //get posts & context from folder
  const quizzes = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      return {
        slug,
        ...value
      }
    })
    return data
  })(require.context('../quizzes', true, /\.json$/))

  return {
    props: {
      allquizzes: quizzes
    },
  }
}