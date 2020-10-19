import Layout from "../components/Layout";
import Head from 'next/head';

export default function Info() {
  
  return (
    <div>
    <Head>
      <title>The Crossing Board - Sold out</title>
    </Head>
    <Layout>
    <div className="wrapper">
      <div className="sold-out-title">Sorry, we're sold out!</div>
      <div><img src="../images/calendar/sold-out.png" alt="Sold Out" /></div>
      <div>Keep up to date with our socials so you don't miss a restock</div>
    </div>
    <style jsx>{`
      .wrapper {
        background-color: #fdf8e3;
        margin: 20px auto;
        border-radius: 10px;
        padding: 20px;
        color: #667756;
        max-width: 60vw;
      }
      .sold-out-title {
        font-size: 2em;
      }
      .wrapper img {
        max-width: 40%;
      }
      @media (max-width: 768px) {
        .wrapper img {
          max-width: 100%;
        }
      }
    `}</style>
  </Layout>
  </div>
  );
}