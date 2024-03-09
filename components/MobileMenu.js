import Link from "next/link";

export default ({ close }) => (
  <div className="nav-wrapper-mobile">
    <Link href="/" onClick={close} prefetch={false}>
      News
    </Link>
    <a href="https://shop.thecrossingboard.com">Shop</a>
    <Link href="/quiz" onClick={close} prefetch={false}>
      Quizzes
    </Link>
    <Link href="/about" onClick={close} prefetch={false}>
      About
    </Link>
    <Link href="/jointheteam" onClick={close} prefetch={false}>
      Join the team
    </Link>
    <Link href="/faq" onClick={close} prefetch={false}>
      FAQ
    </Link>
    <a href="https://shop.thecrossingboard.com/pages/contact">Contact</a>
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
