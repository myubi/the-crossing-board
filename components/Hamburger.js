export default function Hamburger({open, ...props}) {
  return (
		<button type="button" className={open ? "hamburger hamburger--elastic is-active" : "hamburger hamburger--elastic"} {...props}>
			<span className="hamburger-box">
				<span className="hamburger-inner" />
			</span>
			
      <style jsx>
        {`
					.hamburger {
					  padding: 15px 15px;
					  display: inline-block;
					  cursor: pointer;
					  transition-property: opacity, filter;
					  transition-duration: 0.15s;
					  transition-timing-function: linear;
					  font: inherit;
					  color: inherit;
					  text-transform: none;
					  background-color: transparent;
					  border: 0;
					  margin: 0;
            z-index: 9999;
            position: absolute;
            top: 5px;
            left: 5px;
					  overflow: visible; }
					  .hamburger:hover {
					    opacity: 0.7; }
					  .hamburger.is-active:hover {
					    opacity: 0.7; }
					  .hamburger.is-active .hamburger-inner,
					  .hamburger.is-active .hamburger-inner::before,
					  .hamburger.is-active .hamburger-inner::after {
					    background-color: #fab416; }

					.hamburger-box {
					  width: 40px;
					  height: 24px;
					  display: inline-block;
					  position: relative; }

					.hamburger-inner {
					  display: block;
					  top: 50%;
					  margin-top: -2px; }
					  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
					    width: 40px;
					    height: 4px;
					    background-color: #fab416;
					    border-radius: 4px;
					    position: absolute;
					    transition-property: transform;
					    transition-duration: 0.15s;
					    transition-timing-function: ease; }
					  .hamburger-inner::before, .hamburger-inner::after {
					    content: "";
					    display: block; }
					  .hamburger-inner::before {
					    top: -10px; }
					  .hamburger-inner::after {
					    bottom: -10px; }
              
              .hamburger--elastic .hamburger-inner {
                top: 2px;
                transition-duration: 0.275s;
                transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
                .hamburger--elastic .hamburger-inner::before {
                  top: 10px;
                  transition: opacity 0.125s 0.275s ease; }
                .hamburger--elastic .hamburger-inner::after {
                  top: 20px;
                  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }

              .hamburger--elastic.is-active .hamburger-inner {
                transform: translate3d(0, 10px, 0) rotate(135deg);
                transition-delay: 0.075s; }
                .hamburger--elastic.is-active .hamburger-inner::before {
                  transition-delay: 0s;
                  opacity: 0; }
                .hamburger--elastic.is-active .hamburger-inner::after {
                  transform: translate3d(0, -20px, 0) rotate(-270deg);
                  transition-delay: 0.075s; }
              
              @media (min-width: 769px) {
                .hamburger {
                  display: none;
                }
              }
        `}
      </style>
    </button>
  );
}