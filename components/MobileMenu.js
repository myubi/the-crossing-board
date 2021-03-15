import Link from "next/link";

export default ({ close }) => (
  <div className="nav-wrapper-mobile">
    <Link href="/" onClick={close} prefetch={false}>
      <a>News</a>
    </Link>
    <a href="https://shop.thecrossingboard.com">Shop</a>
    <Link href="/quiz" onClick={close} prefetch={false}>
      <a>Quizzes</a>
    </Link>
    <Link href="/about" onClick={close} prefetch={false}>
      <a>About</a>
    </Link>
    <Link href="/jobs" onClick={close} prefetch={false}>
      <a>Jobs</a>
    </Link>
    <Link href="/contact" onClick={close} prefetch={false}>
      <a>Contact</a>
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
