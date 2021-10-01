import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Layout from "./Components/Layout/Layout";
import LandingPage from "./pages/LandingPage";

function App() {
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
            <LandingPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
