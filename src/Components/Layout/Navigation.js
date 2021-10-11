import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";
import { useContext, useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logut();
  };
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

  const mobileNav = (
    <ul>
      <h1 className={classes.h1}>Hii</h1>
    </ul>
  );

  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <a href="/">The Food Project </a>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            {authCtx.isLoggedIn && (
              <li>
                <Link to="/tablebooking">Book a Table </Link>
              </li>
            )}
            {!authCtx.isLoggedIn && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {authCtx.isLoggedIn && (
              <li>
                <button className={classes.b1} onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            )}
            {!authCtx.isLoggedIn && (
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>

      <div className={classes.mobileNav}>
        {sideBar ? closeIcon : openIcon}
        {sideBar && mobileNav}
      </div>
    </header>
  );
};
export default Navigation;
