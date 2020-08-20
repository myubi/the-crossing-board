import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from 'next/head';
import { useState } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from "../components/Layout";

export default function Info({frontmatter, markdownBody, profiles}) {
  const aboutFrontmatter = frontmatter;
  const aboutBody = markdownBody;
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = e => {
    e.persist(); // async access to event https://reactjs.org/docs/events.html
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    fetch('https://formspree.io/xyynazag', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: inputs }),
    })
      .then(_response => {
        handleServerResponse(
          true,
          'Thanks, your message has been sent.',
        );
      })
      .catch(_error => {
        handleServerResponse(
          false,
          "Sorry, we weren't able to send your message!",
        );
      });
  };
    
  return (
    <div>
    <Head>
      <title>The Crossing Board - Contact Us</title>
    </Head>
    <Layout>
    <div className="contact-wrapper">
      <div className="contact-info">
        <ReactMarkdown source={aboutBody} />
      </div>
      <form onSubmit={handleOnSubmit} className="form">
      <div>
        <label htmlFor="email">Name *</label>
        <input
          id="name"
          name="name"
          onChange={handleOnChange}
          required
          value={inputs.name}
        />
      </div>
       <div>
         <label htmlFor="email">Email *</label>
         <input
           id="email"
           type="email"
           name="_replyto"
           onChange={handleOnChange}
           required
           value={inputs.email}
         />
       </div>
       <div>
         <label htmlFor="message">Message *</label>
         <textarea
           id="message"
           name="message"
           onChange={handleOnChange}
           required
           rows="5"
           value={inputs.message}
         />
       </div>
       <div>
         <button
           type="submit"
           disabled={status.submitting}
           className="btn btn--primary"
         >
           {!status.submitting
             ? !status.submitted
               ? 'Send'
               : 'Sent'
             : 'Sending...'}
         </button>
       </div>
       {status.info.error && (
         <div className="error">Error: {status.info.msg}</div>
       )}
       {!status.info.error && status.info.msg && (
         <div className="msg">{status.info.msg}</div>
       )}
     </form>
    </div>
    <style jsx>{`
      .contact-wrapper {
        background-color: #fdf8e3;
        margin: 20px auto;
        border-radius: 10px;
        padding: 20px;
        color: #667756;
        max-width: 80vw;
      }
      .contact-info { 
        max-width: 500px;
        margin: 0 auto;
      }
      
      .form {
        max-width: 500px;
        margin: 0 auto;
        text-align: left;
      }
      
      .form label {
        display: block;
        font-weight: bold;
        margin: 10px 0;
      }
      .form input {
        padding: 15px 10px;
        border: 2px solid #657754;
        border-radius: 10px;
        width: 100%;
        background-color: #fef0d2;
      }
      .form textarea {
        padding: 10px;
        border: 2px solid #657754;
        border-radius: 10px;
        width: 100%;
        background-color: #fef0d2;
      }
      .form button {
        margin: 15px 0;
        width: 100%;
        padding: 10px 0;
        border: none;
        background-color: #fab416;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: bold;
        color: #657755;
        border-radius: 20px;
      }
      .form button:focus, .form input:focus, .form textarea:focus {
        outline:0;
      }
      .msg, .error {
        text-align: center;
      }
      .error { 
        color: #e63333;
      }
    `}</style>
  </Layout>
  </div>
  );
}

export async function getStaticProps() {
  const content = await import(`../data/contact.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content
    },
  }
}