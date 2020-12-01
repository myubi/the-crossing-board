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
          <title>The Crossing Board - Calendar</title>
        </Head>
        <Layout>
        <div className="wrapper">
        <div className="calendar-info">
            <div className="calendar-images">
            <Carousel
              showThumbs={false}
              showStatus={false}
            >
            <img src="../images/calendar/calendar01.jpeg" alt="Next Issue" />
            <img src="../images/calendar/calendar02.jpeg" alt="Next Issue" />
          </Carousel>
          </div>
          <div>
            <ReactMarkdown source={markdownBody} escapeHtml={false} />
            <div className="price-wrapper">£14.99</div>
            <div>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="HHWJVFKFN92SL" />
              <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div>
          </div>
        </div>
        <div className="features-info">
        <strong>Features</strong>
        <ul><li>A4 wall calendar (21x30cm or 8.27x11.69 inches)</li><li>Wire-o-bound with hanger for durable display</li><li>12 full color illustrations made by popular community illustrators</li><li>Suitable for both the southern and northern hemispheres</li><li>Plan your real life AND your island life in one convenient place</li><li>Villager birthdays</li><li>Fishing tourneys and bug offs</li><li>Dates for each special season eg. cherry blossom, wedding, and maple leaf seasons</li><li>Each month’s bugs, fish, and sea critters</li><li>Special events eg. Bunny Day, Toy Day, Harvest Festival, and Halloween</li><li>Room to write your own notes and plan your island</li><li>Days divided into boxes for easy planning</li><li>Preorder your fan-made calendar before the 10th of December to get it in time for the next bulk shipment!</li></ul>
        </div>
        <div className="disclaimer-wrapper">
          Disclaimer: The Crossing Board is a fan-made, third party, community project. We do not claim to have any trading, commercial, or any contractual relationship with Nintendo and we do not claim to own the rights to any of their licensed products. This calendar, including the views expressed and materials used, are provided for information and entertainment purposes only.
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
            .calendar-info {
              display: flex;
              margin-top: 20px;
            }
            .calendar-images {
              max-width: 250px;
              margin-right: 10px;
            }
            .wrapper img {
              max-width: 100%;
            }
            .price-wrapper {
              font-size: 2em;
              color: #7c3e30;
            }
            .features-info {
              background: white;
              border: 2px dashed;
              border-radius: 30px;
              width: fit-content;
              margin: 0 auto;
              padding: 20px;
              margin-top: 20px;
            }
            .features-info ul {
              text-align: left;
            }
            .disclaimer-wrapper {
              font-size: 0.8em;
              margin-top: 20px;
            }
            :global(.carousel .control-dots .dot) {
              background: #40ba81;
            }
            :global(.carousel .control-arrow, .carousel.carousel-slider .control-arrow) {
              opacity: 1;
            }
            :global(.carousel .control-next.control-arrow:before) {
              border-left: 15px solid #40ba81;
              border-top: 15px solid transparent;
              border-bottom: 15px solid transparent;
            }
            :global(.carousel .control-prev.control-arrow:before) {
              border-right: 15px solid #40ba81;
              border-top: 15px solid transparent;
              border-bottom: 15px solid transparent;
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