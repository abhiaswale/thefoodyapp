import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
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
              <Link to="/login">Login</Link>
            </li>
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
