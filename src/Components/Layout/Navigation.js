import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
const Navigation = () => {
  const authCtx = useContext(AuthContext);
  // console.log(authCtx.isLoggedIn);
  // console.log(authCtx.userName);
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
            {!authCtx.isLoggedIn && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {authCtx.isLoggedIn && (
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            )}
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navigation;
