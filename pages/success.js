import Layout from "../components/Layout";
import Head from 'next/head';

export default function Info() {
  
  return (
    <div>
    <Head>
      <title>The Crossing Board - Thank you</title>
    </Head>
    <Layout>
    <div className="wrapper">
      <div className="thank-you-title">Thank you for your purchase!</div>
      <div>The calendars will be shipped on the 20th of November. Shipping time varies depending on your country.</div>
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
      .thank-you-title {
        font-size: 2em;
        margin-bottom: 20px;
      }
    `}</style>
  </Layout>
  </div>
  );
}