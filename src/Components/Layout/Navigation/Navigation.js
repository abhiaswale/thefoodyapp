import classes from "./Navigation.module.css";
import { useEffect, useRef, useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import Navlinks from "./Navlinks";
import { motion } from "framer-motion";

const Navigation = () => {
  const [sideBar, setsideBar] = useState(false);

  const toggleHandler = () => {
    setsideBar(!sideBar);
  };
  const openIcon = (
    <RiMenuFill className={classes.open} onClick={toggleHandler} />
  );
  const closeIcon = (
    <RiCloseFill className={classes.open} onClick={toggleHandler} />
  );

  const closeMobileMenu = () => {
    setsideBar(false);
  };
  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!menuRef.current.contains(e.target)) {
        setsideBar(false);
      }
    });
  });

  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <motion.a whileHover={{ x: 10 }} href="/">
          The Food Project
        </motion.a>
      </div>
      <div className={classes.bigNav}>
        <Navlinks />
      </div>

      <div ref={menuRef} className={classes.mobileNav}>
        {sideBar ? closeIcon : openIcon}
        {sideBar && <Navlinks isMobile={true} close={closeMobileMenu} />}
      </div>
    </header>
  );
};
export default Navigation;
