import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogList = (props) => {

  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd() + "...";
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }

  return (
    <>
      <div className="notice-board">
        {props.allBlogs.map(post => (
          <Link
            key={post.slug}
            href={{ pathname: `/news/${post.slug}` }}
          >
            <a>
              <div className="content-thumb">
                <div className="pin" />
                <h3> {reformatDate(post.document.data.date)} - {post.document.data.title}</h3>
                <p>
                  <ReactMarkdown source={truncateSummary(post.document.content)} />
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <style jsx>
        {`
          
          a {
            text-decoration: none;
            color: #165940;
          }
          
          .notice-board {
            margin-top: 50px;
            display: flex;
            justify-content: space-evenly;
          }
          
          .content-thumb {
            background-color: #fdf8e3;
            border: 10px solid #165940;
            max-width: 500px;
            padding: 20px;
            position: relative;
          }
          
          a:hover > .content-thumb { 
            animation: pulse 1.5s infinite;
            animation-timing-function: linear;   
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1);}
            100% { transform: scale(1); }
          }

          h3 {
            margin-top: 0;
            margin-bottom: 1rem;
            text-align: left;
            border-bottom: 2px dashed #D19740;
            color: #946e49;
          }
          p {
            max-width: 900px;
          }
          
          .pin {
            position: absolute;
            top: -19px;
            left: 50%;
            background: radial-gradient(circle,rgb(255, 224, 158) 0%,#fab416 100%);
            width: 25px;
            height: 25px;
            border-radius: 100%;
            box-shadow: 1px 3px 8px 0px #737373
          }
          
          .notice-board :global(img) {
            max-width: 100%;
            margin: 0 auto;
            border-radius: 40px;
            border: 5px solid;
          }
          
          @media (max-width: 768px) {
            .content-thumb {
              margin: 20px;
            }
            
            .notice-board {
              flex-wrap: wrap;
            }
          }
          @media (min-width: 1280px) {

          }

        `}
      </style>
    </>
  );
};

export default BlogList;