import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import classes from "./Navlinks.module.css";
function Navlinks(props) {
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
          <li onClick={mobileClick}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={mobileClick}>
            <Link to="/menu">Menu</Link>
          </li>
          <li onClick={mobileClick}>
            <Link to="/aboutus">About Us</Link>
          </li>
          {authCtx.isLoggedIn && (
            <li onClick={mobileClick}>
              <Link to="/tablebooking">Book a Table </Link>
            </li>
          )}
          {!authCtx.isLoggedIn && (
            <li onClick={mobileClick}>
              <Link to="/login">Login</Link>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li onClick={mobileClick}>
              <button className={classes.b1} onClick={logoutHandler}>
                Logout
              </button>
            </li>
          )}
          {!authCtx.isLoggedIn && (
            <li onClick={mobileClick}>
              <Link to="/signup">Signup</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navlinks;
