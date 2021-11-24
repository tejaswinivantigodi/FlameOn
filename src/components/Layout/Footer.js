import { Fragment } from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <Fragment>
      <footer className={classes.contact}>
        <h2> Get in Touch </h2>
        <h4>
          {" "}
          While we're good with smoke signals,there are simpler ways for us to
          get in touch with.
        </h4>

        <div className={classes.bottom}>
          <a className="footer-link" href="https://twitter.com/">
            Twitter
          </a>
          <a className="footer-link" href="https://instagram.com/">
            Instagram
          </a>
          <a className=" btn" href="mailto:flameon@gmail.com">
            CONTACT US
          </a>
          <p className="copyright">© 2021 Tejaswini Vantigodi</p>
        </div>
      </footer>
    </Fragment>
  );
};
export default Footer;
