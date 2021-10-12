import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import BookATable from "./Components/Booking/BookATable";
import Menu from "./Components/Menu/Menu";
import AboutUs from "./Components/AboutUs/AboutUs";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/landingpage">
            {authCtx.isLoggedIn && <Landing />}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>

          <Route path="/tablebooking">
            {authCtx.isLoggedIn && <BookATable />}
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
