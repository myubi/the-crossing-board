import Head from 'next/head'
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div className="container">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Solway:wght@400;700&display=swap" rel="stylesheet" />
    </Head>

      <Header />
      <section>
        <div className="content">{props.children}</div>
      </section>
      <Footer />
    <style jsx>
      {`
        .container {
          padding-top: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Solway', serif;
          background-image: url('/background.jpg');
          color: #DFD0CA;
          text-align: center;
          position: relative;
        }
      `}
    </style>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
      }
      
      /* Background pattern from Toptal Subtle Patterns */

      * {
        box-sizing: border-box;
      }
    
    `}</style>
  </div>
  );
}