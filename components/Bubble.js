export default function Bubble(props) {
    return (
      <div>

          <div className="dialogue">
            <div className="dialogue-blobs">
              <div className="dialogue-blob-top"></div>
              <div className="dialogue-blob-bottom"></div>
              <div className="dialogue-text">{props.children}</div>
            </div>
            <div className="dialogue-character-wrap">
              <div className="dialogue-character">
                <slot className="character">{props.title}</slot>
              </div>
            </div>
          
          </div>
        <style jsx>
          {`
            .dialogue {
              position: relative;
              display: flex;
              min-width: 70vw;
              min-height: 180px;
              width: 60%;
              margin-top: 20px;
              margin-bottom: 20px;
            }

            .dialogue-blobs {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: stretch;
              animation: scale-up 0.6s $easeOutBack 1s 1 normal forwards;
            }

            .dialogue-blob-top {
              position: absolute;
              top: 0;
              width: 100%;
              height: 75%;
              background-color: #fdf8e3;
              border-radius: 40% 40% 30% 30% / 150% 150% 150% 150%;
              animation: blob 1.5s cubic-bezier(0.37, 0, 0.63, 1) 0.3s infinite alternate;
              transform-origin: center;
            }

            .dialogue-blob-bottom {
              position: absolute;
              bottom: 0;
              width: 94%;
              height: 40%;
              background-color: #fdf8e3;
              border-radius: 5% 5% 20% 20% / 100% 100% 100% 100%;
              animation: blob 1s infinite alternate cubic-bezier(0.37, 0, 0.63, 1);
              transform-origin: center;
            }

            .dialogue-character-wrap {
              position: absolute;
              animation: character 0.6s infinite alternate cubic-bezier(0.37, 0, 0.63, 1);
            }

            .dialogue-character {
              display: inline-block;
              margin-right: auto;
              padding: 0.5rem 2rem;
              font-family: $round;
              font-size: 2rem;
              color: #482016;
              background-color: #dd8530;
              border-radius: 30% / 100% 100% 120% 120%;
              transform: perspective(2rem) rotateX(1deg) rotateZ(-9deg) translateX(20%)
                translateY(-45%) scale(0);
              animation: fade-character 0.3s $easeOutBack 1s 1 normal forwards;
            }

            .dialogue-text {
              position: absolute;
              width: 100%;
              padding: 1.5em 3em;
              line-height: 1.5em;
              color: #807256;
              font-size: 0.9em;
            }

            @keyframes blob {
              from {
                transform: rotate(0.3deg) scale(1);
              }
              to {
                transform: rotate(-0.3deg) scale(0.99);
              }
            }

            @keyframes character {
              from {
                transform: translateY(0);
              }
              to {
                transform: translateY(3px);
              }
            }

            @keyframes scale-up {
              0% {
                transform: scale(0.8);
                opacity: 0;
              }
              49% {
              }
              50% {
              }
              to {
                transform: scale(1);
                opacity: 1;
              }
            }

            @keyframes fade-character {
              from {
                transform: perspective(2rem) rotateX(1deg) rotateZ(0deg) translateX(20%)
                  translateY(-45%) scale(0.8);
                opacity: 0;
              }
              to {
                transform: perspective(2rem) rotateX(1deg) rotateZ(-6deg) translateX(20%)
                  translateY(-45%) scale(1);
                opacity: 1;
              }
            }
            
            @media (max-width: 768px) {
              .dialogue {
                min-width: 80vw;
                min-height: 60vh;
              }
              
              .dialogue-text {
                padding: 1.5em 3em;
              }
            }

          `}
        </style>
      </div>
    );
}
