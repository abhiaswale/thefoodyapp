import classes from "./Navigation.module.css";
import { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import Navlinks from "./Navlinks";
const Navigation = () => {
  const [sideBar, setsideBar] = useState(false);

  const toggleHandler = () => {
    setsideBar(!sideBar);
    console.log(sideBar);
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
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <a href="/">The Food Project </a>
      </div>
      <div className={classes.bigNav}>
        <Navlinks />
      </div>

      <div className={classes.mobileNav}>
        {sideBar ? closeIcon : openIcon}
        {sideBar && <Navlinks isMobile={true} close={closeMobileMenu} />}
      </div>
    </header>
  );
};
export default Navigation;
