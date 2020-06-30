import Link from "next/link";

export default ({ close }) => (
  <div className="nav-wrapper-mobile">
    <Link href="/" onClick={close}>
      <a>News</a>
    </Link>
    <Link href="/about" onClick={close}>
      <a>About</a>
    </Link>
    <style jsx>
      {`
        .nav-wrapper-mobile {
          display: flex;
          flex-direction: column;
          height: 100%;
          font-size: 2em;
          align-items: center;
          justify-content: space-evenly;
        }
        
        .nav-wrapper-mobile a {
          color: #c88d5e;
          font-weight: bold;
          text-decoration: none;
        }
      `}
    </style>
  </div>
);
