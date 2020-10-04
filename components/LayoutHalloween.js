import Head from 'next/head';
import HeaderHalloween from "./HeaderHalloween";
import Footer from "./Footer";

export default function Layout(props) {

  return (
    <div className="container">
    <Head>
      <link rel="icon" href="/images/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Solway:wght@400;700&display=swap" rel="stylesheet" />
      <meta property="og:description" content="A fan made Animal Crossing site with a monthly magazine!" /> 
      <meta name="description" content="A fan made Animal Crossing site with a monthly magazine!" />
    </Head>

      <HeaderHalloween />
      <section>
        <div className="content">{props.children}</div>
      </section>
      <Footer />
    <style jsx>
      {`
        section {
          width: 100%;
        }
        .container {
          padding-top: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Solway', serif;
          background-image: url('/halloween/bg.jpg');
          color: #DFD0CA;
          text-align: center;
          position: relative;
          min-height: 100vh;
          justify-content: space-around;
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