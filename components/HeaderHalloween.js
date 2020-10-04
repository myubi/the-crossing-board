import Link from "next/link";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Popup from "reactjs-popup";
import { useRouter } from "next/router";

import MobileMenu from './MobileMenu';
import Hamburger from './Hamburger';

export default function HeaderHalloween(props) {
  const contentStyle = {
    background: "none",
    width: "80%",
    height: "60%",
    border: "none"
  };
  
  const overlayStyle = {
    background: "rgba(252, 248, 227, 0.95)"
  };
  
  const router = useRouter();
  
  return (
    <header className="header">
      <nav
        className="nav-desktop"
        role="navigation"
        aria-label="main navigation"
      >
          <div className="ribbon-position">
            <div className="ribbon-wrapper">
              <div className="ribbon" />
            </div>
          </div>
          <div className="nav-wrapper">
          <img className="nav-logo" src="../halloween/logo.png" alt="The Crossing Board" />
          <Link href="/" prefetch={false}>
            <a className={router.pathname == "/" ? "active" : ""}>News</a>
          </Link>
          <Link href="/magazine" prefetch={false}>
            <a className={router.pathname == "/magazine" ? "active" : ""}>Magazine</a>
          </Link>
					<Link href="/about" prefetch={false}>
						<a className={router.pathname == "/about" ? "active" : ""}>About</a>
					</Link>
          <Link href="/contact" prefetch={false}>
            <a className={router.pathname == "/contact" ? "active" : ""}>Contact</a>
          </Link>
          </div>
      </nav>
      
      <div className="mobile-logo">
        <img className="nav-logo" src="../halloween/logo.png" alt="The Crossing Board" />
      </div>
      
      <Popup
        modal
        overlayStyle={overlayStyle}
        closeOnDocumentClick={false}
        contentStyle={contentStyle}
        trigger={open => <Hamburger open={open} />}
        >
          {close => <MobileMenu close={close} />}
      </Popup>
      <style jsx>
        {`
          header {
            position: relative;
            min-height: 20px;
          }
          .nav-desktop {
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
            background-color: #5f7851;
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
            border-color: #3e4e35 #3e4e35 #3e4e35 transparent;
            left: -40px;
            border-width: 28px;
            transform: rotateZ(-20deg);
          }
          .ribbon:after {
            border-color: #3e4e35 transparent #3e4e35 #3e4e35;
            right: -40px;
            border-width: 28px;
            transform: rotateZ(20deg);
          }
          
          .nav-desktop a {
            color: #f68c1f;
            font-size: 20px;
            font-weight: bold;
            text-decoration: none;
            padding: 15px 30px;
            margin: 10px;
            background-color: rgba(200, 141, 94, 0);
            transition: all .2s ease-in-out;
            border-radius: 50px 40px 50px 40px;
            border-bottom: none;
          } 
          
          .nav-desktop a:hover, .nav-desktop a.active {
            color: #5f7851;
            background-color: #f68c1f;
            transform: scale(1.1);

          }
                    
          .nav-logo {
            max-width: 150px;
          }
          
          .mobile-logo {
            display: none;
          }
          
          @media (max-width: 768px) {
            .nav-desktop {
              display: none;
            }
            .mobile-logo {
              display: block;
            }
            header {
              width: 100%;
            }
          }
        `}
      </style>
    </header>
  );
}
