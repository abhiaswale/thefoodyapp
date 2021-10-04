import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Layout from "./Components/Layout/Layout";
import LandingPage from "./pages/LandingPage";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/landingpage">
            {authCtx.isLoggedIn && <LandingPage />}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>

          <Route path="*">
            <Redirect to="/landingpage"></Redirect>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
