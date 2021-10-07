import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footericon}>
        <a href="/">
          <AiFillFacebook />
        </a>
        <a href="/">
          <AiFillTwitterCircle />
        </a>
        <a href="/">
          <AiFillInstagram />
        </a>
      </div>
      <div className={classes.copyrightwrapper}>&copy;All Rights Reserved</div>
    </footer>
  );
};
export default Footer;
