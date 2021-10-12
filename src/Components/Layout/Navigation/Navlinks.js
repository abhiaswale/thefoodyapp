import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import classes from "./Navlinks.module.css";
import { motion } from "framer-motion";

function Navlinks(props) {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logut();
  };
  const mobileClick = () => {
    props.isMobile && props.close();
  };
  return (
    <div>
      <nav>
        <ul>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.05 }}
            onClick={mobileClick}
          >
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.1 }}
            onClick={mobileClick}
          >
            <Link to="/menu">Menu</Link>
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
            onClick={mobileClick}
          >
            <Link to="/aboutus">About Us</Link>
          </motion.li>
          {authCtx.isLoggedIn && (
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.3 }}
              onClick={mobileClick}
            >
              <Link to="/tablebooking">Book a Table </Link>
            </motion.li>
          )}
          {!authCtx.isLoggedIn && (
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.4 }}
              onClick={mobileClick}
            >
              <Link to="/login">Login</Link>
            </motion.li>
          )}
          {authCtx.isLoggedIn && (
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.5 }}
              onClick={mobileClick}
            >
              <button className={classes.b1} onClick={logoutHandler}>
                Logout
              </button>
            </motion.li>
          )}
          {!authCtx.isLoggedIn && (
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{ delay: 0.6 }}
              onClick={mobileClick}
            >
              <Link to="/signup">Signup</Link>
            </motion.li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navlinks;
