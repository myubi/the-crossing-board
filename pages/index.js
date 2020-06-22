import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Crossing Board</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Solway:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div>
          <img className="logo" src="/logo.png" />
        </div>
        <h1 className="title">
          Coming soon!
        </h1>
        <div>
          <p>Follow us at:</p>
          <div className="social-icons">
            <a href="https://instagram.com/thecrossingboard" target="_blank"><img className="social-icon" src="/instagram.png" /></a>
            <a href="https://twitter.com/crossingboard" target="_blank"><img className="social-icon" src="/twitter.png" /></a>
            <a href="https://youtube.com/thecrossingboard" target="_blank"><img className="social-icon" src="/youtube.png" /></a> 
            <a href="https://pinterest.com/thecrossingboard" target="_blank"><img className="social-icon" src="/pinterest.png" /></a>
          </div>
        </div>
      </main>


      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Solway', serif;
          background-image: url('/background.jpg');
          color: #DFD0CA;
          text-align: center;
        }

        main {
          padding: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
          font-size: 2em;
          text-transform: uppercase;
          font-weight: bold;
        }
        a {
          color: #DEB88D;
          text-decoration: none;
        }
        
        a:hover {
          opacity: 0.8;
        }

        .logo {
          max-width: 300px;
        }
        
        .social-icons {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 340px;
        
        }
        
        p {
          text-transform: uppercase;
        }
        
        @media (max-width: 340px) { 
          .social-icons {
            width: 80vw;
            justify-content: center;
          }
          .social-icon {
            margin: 5px;
          }    
        }
        
        .social-icon {
          max-width: 70px;
        }

      `}</style>

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
  )
}
