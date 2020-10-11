import LayoutHalloween from "../../components/LayoutHalloween";
import Head from 'next/head';

export default function Info({halloweenSets}) {
  
  return (
    <div>
    <Head>
      <title>The Crossing Board - Halloween</title>
    </Head>
    <LayoutHalloween>
    <div className="halloween-gate-wrapper">
    <div className="halloween-content-wrapper">
      {halloweenSets.map((set, index) => 
        {
          if(!set['coming-soon']) {
            return (
              <a href={`/halloween/gate${index + 1}`}>
              <div className="gate">
              Challenge {index + 1}
              </div>
              </a>
            )
          }
          else {
            return (
              <div className="gate">
              Coming soon
              </div>
            )
          }
        }
      )}
    </div>
    <div>Disclaimer: <a href='https://www.freepik.com/vectors/party'>Background created by freepik - www.freepik.com</a></div>
		</div>
    
    <style jsx>{`
      .halloween-gate-wrapper {
        background-color: #2c2c2c;
        max-width: 80%;
        margin: 0 auto;
        padding: 20px;
        border-radius: 10px;
      }
      .halloween-content-wrapper {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
      a {
        text-decoration: none;
        color: #f68c1f;
      }
      .gate {
        padding: 100px;
        border: 2px dashed #f68c1f;
        background-color: #5f7851;
        font-size: 2em;
        border-radius: 10px;
        color: #f68c1f;
        margin: 10px;
        flex: 1;
      }
    `}</style>
  </LayoutHalloween>
  </div>
  );
}

export async function getStaticProps() {
    const halloweenSets = await import(`../../data/halloweenSets.json`);

  return {
    props: {
      ...halloweenSets
    },
  }
}