import { useContext } from "react";
import AuthContext from "../store/auth-context";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn);
  console.log(authCtx.userName);

  return (
    <div className={classes.p}>
      <p>
        Welcome, <span>{authCtx.userName}</span>
      </p>
    </div>
  );
};
export default LandingPage;
