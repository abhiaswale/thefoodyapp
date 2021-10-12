import { motion } from "framer-motion";
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
        <motion.a
          whileHover={{ scale: 1.2, color: "rgb(230, 111, 111)", delay: 1 }}
          href="/"
        >
          <AiFillFacebook />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, color: "rgb(230, 111, 111)", delay: 1 }}
          href="/"
        >
          <AiFillTwitterCircle />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, color: "rgb(230, 111, 111)", delay: 1 }}
          href="/"
        >
          <AiFillInstagram />
        </motion.a>
      </div>
      <div className={classes.copyrightwrapper}>&copy;All Rights Reserved</div>
    </footer>
  );
};
export default Footer;
