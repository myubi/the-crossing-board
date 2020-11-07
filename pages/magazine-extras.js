import React, { useState } from 'react';
import matter from "gray-matter";
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import { FaCaretLeft } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';

export default function Magazine ({frontmatter, markdownBody}) {

  return(
        <div>
        <Head>
          <title>The Crossing Board - Extra Physical Magazines</title>
        </Head>
        <Layout>
        <div className="wrapper">
          <h1 className="title">Extra Magazines</h1>
          <p>Did you miss out on our November magazine?</p>
          <p>Well, it seems like Redd knows that these are genuine pieces and he ended up collecting too many... Thankfully, he agreed to give some back so that you can enjoy our latest issue.</p> 
          <p>But hurry before another shady salesman grabs all the <u>limited copies!</u></p>
          
          <div className="extras-wrapper">
            <div className="cover-wrapper">
              <img src="../images/magazine/november-cover.png" alt="" />
            </div>
            <div className="content-wrapper">
              <div className="form-wrapper">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="LD7652CAMEHSS" />
                  <input type="hidden" name="on0" value="Shipping Options" />
                  <div className="price-wrapper">Full price</div>
                  <div className="select-wrapper">
                    <select name="os0">
                    <option value="UK Standard">UK Standard £3.99 GBP</option>
                    <option value="UK Tracked">UK Tracked £7.99 GBP</option>
                    <option value="Europe Standard">Europe Standard £4.99 GBP</option>
                    <option value="Europe Tracked">Europe Tracked £9.99 GBP</option>
                    <option value="Rest of the World Standard">Rest of the World Standard £5.99 GBP</option>            
                    <option value="Rest of the World Tracked">Rest of the World Tracked £10.99 GBP</option>
                    </select> 
                  </div>
                  <input type="hidden" name="currency_code" value="GBP" />
                  <div>
                  <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                  </div>
                </form>
              </div>
              <div className="form-wrapper">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="MESTS2YJBCNAL" />
                  <input type="hidden" name="on0" value="Shipping Options" />
                  <div className="price-wrapper">Discounted</div>
                  <div className="price-minor">(minor imperfections)</div>
                  <div className="select-wrapper">
                  <select name="os0">
                    <option value="UK Standard">UK Standard £3.49 GBP</option>
                    <option value="UK Tracked">UK Tracked £7.49 GBP</option>
                    <option value="Europe Standard">Europe Standard £4.49 GBP</option>
                    <option value="Europe Tracked">Europe Tracked £9.49 GBP</option>
                    <option value="Rest of the World Standard">Rest of the World Standard £5.49 GBP</option>                
                    <option value="Rest of the World Tracked">Rest of the World Tracked £10.49 GBP</option>
                  </select>
                  </div>
                  <input type="hidden" name="currency_code" value="GBP" />
                  <div>
                    <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                  </div>
                </form>
              </div>
            </div>
          </div>
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
            .wrapper img {
              max-width: 100%;
            }
            .extras-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
            }
            .cover-wrapper {
                max-width: 300px;
                margin-right: 20px;
            }
            .title {
              font-size: 2.1em;
            }
            .price-wrapper {
              font-size: 2em;
              color: #7c3e30;
            }
            .price-minor {
              font-size: 0.9em;
              color: #7c3e30;
            }
            
            .form-wrapper {
              margin: 20px 0;
            }
            .select-wrapper {
              margin: 10px 0;
            }
            
            select {
              border-radius: 10px;
              padding: 10px;
              background-color: #677855;
              color: #FFFFFF;
              font-weight: bold;
            }

            @media (max-width: 768px) {
              .calendar-info {
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
            }
          `}
          
        </style>
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
    