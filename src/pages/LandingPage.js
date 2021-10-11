import { useContext } from "react";
import { useHistory } from "react-router";
import Button from "../Components/Ui/Button";
import AuthContext from "../store/auth-context";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  console.log(authCtx.isLoggedIn);
  console.log(authCtx.userName);

  const menuButttonHandler = () => {
    history.push("/menu");
  };
  return (
    <div className={classes.bg}>
      <div className={classes.landing}>
        <p className={classes.p}>
          Welcome, <span>{authCtx.userName}!!</span>
        </p>
        <div className={classes.main}>
          <p>Explore Our Menu</p>
          {/* <div className={classes.menu}>
            <button onClick={menuButttonHandler}>Menu</button>
          </div> */}
          <Button onClick={menuButttonHandler}>Menu</Button>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
