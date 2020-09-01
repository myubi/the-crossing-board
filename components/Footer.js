import Bubble from "./Bubble";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div>
        <div className="social-icons">
          <a href="https://instagram.com/thecrossingboard" target="_blank"><img className="social-icon" src="/images/instagram.png" /></a>
          <a href="https://twitter.com/crossingboard" target="_blank"><img className="social-icon" src="/images/twitter.png" /></a>
          <a href="https://www.youtube.com/channel/UCOdDruGmf_Sr3f4ol9dG3NQ" target="_blank"><img className="social-icon" src="/images/youtube.png" /></a> 
          <a href="https://pinterest.com/thecrossingboard" target="_blank"><img className="social-icon" src="/images/pinterest.png" /></a>
        </div>
      </div>
      <Bubble title="Tom Nook"> 
<p>The Crossing Board is operated as a non-profit making ‘hobby project’. All members of our team contribute towards its creation and operation on a voluntary, part-time basis, with magazine subscriptions funding the running cost of the project.</p>
<p>Nintendo is a registered trademark of Nintendo of America Inc. The Crossing Board has no trading, commercial or any contractual relationship with Nintendo and we do not claim to own Nintendo or the rights of any of their licensed products. This website, including views expressed, images and material referenced are provided for information purposes only.</p>
<p>The Crossing Board, is a totally independent third party Animal Crossing news and opinion website and is not a contact point of any kind for Nintendo. You should not rely on the material or information on this website as the basis for making any legal, business or other decisions.</p>
      </Bubble>
      <style jsx>
        {`
          footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .social-icons {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 340px;
          
          }
          
          .social-icons a:hover{ 
            animation: pulse 1s infinite;
            animation-timing-function: linear;   
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1);}
            100% { transform: scale(1); }
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
