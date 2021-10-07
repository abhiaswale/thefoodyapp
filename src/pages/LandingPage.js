import { useContext } from "react";
import AuthContext from "../store/auth-context";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn);
  console.log(authCtx.userName);

  return (
    <div className={classes.bg}>
      <div className={classes.landing}>
        <p className={classes.p}>
          Welcome, <span>{authCtx.userName}!!</span>
        </p>
        <div className={classes.main}>
          <p>Explore Our Menu</p>
          <div className={classes.menu}>
            <button>Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
