import { useContext } from "react";
import AuthContext from "../store/auth-context";

const LandingPage = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn);
  console.log(authCtx.userName);

  return (
    <div>
      <h1>Welcome, {authCtx.userName}</h1>
    </div>
  );
};
export default LandingPage;
