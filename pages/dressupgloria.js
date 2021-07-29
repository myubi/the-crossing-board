import Layout from "../components/Layout";
import Head from "next/head";

export default function DressUpGloria() {
  return (
    <div>
      <Head>
        <title>The Crossing Board - Dress Up Gloria</title>
      </Head>
      <Layout>
        <div className="section">
          <div className="wrapper">
            <div class="image-center">
              <a
                href="/images/dressup/gloria-dress-up.jpeg"
                target="_blank"
                download
              >
                <img
                  class="no-border"
                  src="/images/dressup/gloria-dress-up.jpeg"
                  alt=""
                />
              </a>
            </div>
          </div>
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
          .wrapper :global(img) {
            max-width: 50%;
            margin: 0 auto;
          }
        `}</style>
      </Layout>
    </div>
  );
}
