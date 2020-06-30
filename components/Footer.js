import Bubble from "./Bubble";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div>
        <div className="social-icons">
          <a href="https://instagram.com/thecrossingboard" target="_blank"><img className="social-icon" src="/instagram.png" /></a>
          <a href="https://twitter.com/crossingboard" target="_blank"><img className="social-icon" src="/twitter.png" /></a>
          <a href="https://www.youtube.com/channel/UCOdDruGmf_Sr3f4ol9dG3NQ" target="_blank"><img className="social-icon" src="/youtube.png" /></a> 
          <a href="https://pinterest.com/thecrossingboard" target="_blank"><img className="social-icon" src="/pinterest.png" /></a>
        </div>
      </div>
      <Bubble title="Tom Nook"> 
<p>Animal Crossing and Nintendo are registered trademarks of Nintendo of America, we do not claim to own them or the rights of any licenced products. This website, including views expressed, images used and material referenced, are provided for information purposes only.</p>
<p>The Crossing Board is a third-party Animal Crossing news and opinion website and is not an official contact point for Nintendo. You should not rely upon the material or information on the website as basis for making any legal, business or other decisions.</p>
      </Bubble>
      <style jsx>
        {`
          footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
          }
          .social-icons {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 340px;
          
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
