import React, { useState } from 'react';
import matter from "gray-matter";
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import { FaCaretLeft } from "react-icons/fa";

export default function Magazine ({frontmatter, markdownBody}) {

  return(
        <div>
        <Head>
          <title>The Crossing Board - Calendar</title>
        </Head>
        <Layout>
        <div className="wrapper">
        <div>The Crossing Board 2021 Calendar</div>
        <div>
          <ReactMarkdown source={markdownBody} escapeHtml={false} />
        </div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="HHWJVFKFN92SL" />
        <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
        <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <style jsx>
          {`
            :global(#paypal-button-container.hide) {
              display:none;
            }
            .wrapper {
              background-color: #fdf8e3;
              margin: 20px 10%;
              border-radius: 10px;
              padding: 20px;
              color: #667756;
              text-align: center;
            }
            .wrapper img {
              max-width: 100%;
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
            .label-wrapper {
              background-color: #6f8161;
              color: #FFFFFF;
              border-radius: 25px;
              margin: 20px 0;
              text-align: left;
              padding: 20px;
            }
            .back-button {
              position: absolute;
              left: 0;
              top: 10px;
                  cursor: pointer;
                  font-size: 60px;
                  display: flex;
                  align-items: center;
            }
            .next-button {
              width: 100%;
              background-color: #FFFFFF;
              padding: 10px;
              border: 1px solid;
              border-radius: 28px;
              text-transform: uppercase;
              font-size: 1.5em;
              color: #6e8160;
            }
            .extra-info {
              margin-left: 20px;
              margin-top: 5px;
            }
            a {
              color: #fab416;
              text-decoration: none;
              border-bottom: 1px dashed;
            }
            .selection-info {
              background: white;
              border: 2px dashed;
              border-radius: 30px;
              width: fit-content;
              margin: 10px auto;
              padding: 20px;
            }
            .selection-title {
              font-size: 2em;
            }
            .label-info {
              display: flex;
            }
            .form-options {
              display: flex;
              width: 100%;
              justify-content: space-between;
            }
            .magazine-faq {
              text-align: left;
              margin-top: 10px;
            }
            .magazine-faq :global(.image-left) {
              display: flex;
              align-items: center;
            }
            .magazine-faq :global(img) {
              max-width: 250px;
              margin-right: 20px;
              border: 5px solid;
            }
            ul {
              list-style-type: '${'\\1F31F'}';
              text-align: left;
            }
            li {
              padding-left: 10px;
            }
            .magazine-faq :global(a) {
              color: #946e49;
              border-bottom: 2px dashed #D19740;
              text-decoration: none;
            }
            .purchase-option {
              background: #FFFFFF;
              padding: 10px;
              border: 2px dashed;
              width: fit-content;
              margin: 0 auto;
              border-radius: 28px;
            }
            .magazine-faq :global(.magazine-text-bubble) {
              background-color: #FFFFFF;
              border: 2px dashed;
              padding: 20px;
              border-radius: 30px;
            }
            
            .magazine-faq  :global(.no-border) {
              border: none;
              border-radius: none;
            }
            .magazine-options {
              display: flex;
              justify-content: space-around;
              margin-bottom: 20px;
              margin-top: 20px;
            }
            .magazine-option-selection {
              background-color: #FFFFFF;
              padding: 20px 100px;
              border: 1px solid;
              border-radius: 30px;
              text-transform: uppercase;
              font-weight: bold;
              cursor: pointer;
              transition: all 0.5s ease-out;
            }
            .magazine-option-selection.active, .magazine-option-selection:hover {
              background-color: #667756;
              border: 1px solid #FFFFFF;
              color: #FFFFFF;
            }
            .digital-magazines-wrapper {
              display: flex;
              justify-content: space-evenly;
              margin: 20px;
            }
            .digital-price {
              background: #FFFFFF;
              padding: 10px;
              border-radius: 20px;
              border: 1px solid;
            }
            .digital-cover-wrapper {
              max-width: 200px;
              cursor: pointer;
            }
            .digital-cover-wrapper img {
              border: 2px solid;
              box-shadow: 3px 3px 3px 1px rgb(82 82 82 / 25%);
            }
            .digital-cover-wrapper.active img {
              border: 5px solid #f9b412;
              box-shadow: 3px 3px 3px 1px rgb(82 82 82 / 25%);
            }
            .digital-edition-name {
              text-transform: uppercase;
              font-weight: bold;
            }
            .digital-form {
              margin-bottom: 20px;
            }
            .digital-form .field {
              margin: 20px 0;
            }
            .digital-form label {
              font-weight: bold;
              margin-right: 10px;
              text-transform: capitalize;
            }
            .digital-form input {
              padding: 5px 10px;
              border: 2px solid #657754;
              border-radius: 10px;
              background-color: #fef0d2;
            }
            .digital-form-description {
              max-width: 80%;
              margin: 0 auto;
            }
            .magazine-promo img {
              max-width: 50%;
              border: 5px solid;
            }
            @media (max-width: 768px) {
              .form-options {
                flex-wrap: wrap;
              }
              .magazine-options {
                flex-wrap: wrap;
              }
              .magazine-option-selection {
                margin: 10px 0;
              }
              .magazine-faq :global(.image-left) {
                flex-direction: column;
              }
              .magazine-faq :global(img) {
                margin: 0 auto;
              }
              .magazine-faq :global(.magazine-text-bubble) {
                margin-top: 15px;
              }
              .digital-magazines-wrapper {
                flex-wrap: wrap;
              }
              .digital-cover-wrapper {
                margin-top: 20px;
              }
            }
          `}
          
        </style>
        </div>
        </Layout>
        </div>
    );

}

export async function getStaticProps() {
  const content = await import(`../data/calendar.md`)
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content
    },
  }
}
    