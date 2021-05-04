import Bubble from "./Bubble";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div>
        <div className="social-icons">
          <a href="https://instagram.com/thecrossingboard" target="_blank">
            <img className="social-icon" src="/images/instagram.png" />
          </a>
          <a href="https://twitter.com/crossingboard" target="_blank">
            <img className="social-icon" src="/images/twitter.png" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCOdDruGmf_Sr3f4ol9dG3NQ"
            target="_blank"
          >
            <img className="social-icon" src="/images/youtube.png" />
          </a>
          <a href="https://pinterest.com/thecrossingboard" target="_blank">
            <img className="social-icon" src="/images/pinterest.png" />
          </a>
        </div>
      </div>
      <div className="wrapper">
        <p>
          Animal Crossing is a registered trademark of Nintendo. The Crossing
          Board has no trading, commercial or any contractual relationship with
          Nintendo and we do not claim to own Nintendo or the rights to any of
          their licensed products. This website, including views expressed,
          images used, and material referenced is provided for information and
          entertainment purposes only.
        </p>
      </div>
      <div>
        The Crossing Board, 30 Ferris Town, Truro, TR13JJ, United Kingdom
      </div>
      <style jsx>
        {`
          footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .wrapper {
            background-color: #fdf8e3;
            margin: 20px 10%;
            border-radius: 60px;
            padding: 20px;
            color: #667756;
            text-align: center;
          }
          .social-icons {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 340px;
          }

          .social-icons a:hover {
            animation: pulse 1s infinite;
            animation-timing-function: linear;
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
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
        `}
      </style>
    </footer>
  );
}
