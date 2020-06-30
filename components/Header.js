import Link from "next/link";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Header(props) {
  return (
    <header className="header">
      <nav
        className="nav"
        role="navigation"
        aria-label="main navigation"
      >
          <div className="ribbon-position">
            <div className="ribbon-wrapper">
              <div className="ribbon" />
            </div>
          </div>
          <div className="nav-wrapper">
          <Link href="/">
            <a>News</a>
          </Link>
          <img className="nav-logo" src="../logo2.png" alt="The Crossing Board" />
					<Link href="/about">
						<a>About</a>
					</Link>
          </div>
      </nav>
      <style jsx>
        {`
          nav {
            position: relative;
            z-index: 1;
          }
          
          .ribbon-position {
            position: absolute;
            top: 35px;
            left: 0;
            width: 100%;
            height: 80px;
            z-index: -1;
          }
          
          .ribbon-wrapper {
            position: relative;
            z-index: 1;
            width: 100%;
            height: 100%;
          }
          
          .nav-wrapper {
            z-index: 2;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
          }
          
          .ribbon {
            background-color: #fef0d2;
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
          
          .ribbon:before, .ribbon:after {
            top: 35px;
            z-index: -1;
            content: '';
            position: absolute;
            height: 0;
            width: 0;
            border-style: solid;
            border-width: 0;
          }
          .ribbon:before {
            border-color: #dcd0b6 #dcd0b6 #dcd0b6 transparent;
            left: -40px;
            border-width: 28px;
            transform: rotateZ(-20deg);
          }
          .ribbon:after {
            border-color: #dcd0b6 transparent #dcd0b6 #dcd0b6;
            right: -40px;
            border-width: 28px;
            transform: rotateZ(20deg);
          }
          
          .nav a {
            color: #c88d5e;
            font-size: 20px;
            font-weight: bold;
            text-decoration: none;
            padding: 15px 30px;
            margin: 10px;
          }
          
          .nav a:hover {
            color: #fef0d2;
            background-color: #c88d5e;
            border-radius: 50px 40px 50px 40px;
          }
                    
          .nav-logo {
            max-width: 200px;
          }
        `}
      </style>
    </header>
  );
}
