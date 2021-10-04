import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
const Navigation = () => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logut();
  };

  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <h1>The Food Project </h1>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Book a Table </Link>
            </li>
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
    </header>
  );
};
export default Navigation;
