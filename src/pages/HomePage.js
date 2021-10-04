import React from "react";
// import foodBg from "../images/foodbg31.jpg";
import classes from "./HomePage.module.css";
import { GiFoodTruck } from "react-icons/gi";
import { ReactComponent as Mug } from "../images/icon/coffee-pot.png";
const HomePage = () => {
  return (
    <React.Fragment>
      <div className={classes.bg}>
        {/* <img src={foodBg} alt="meals.jpg" /> */}
        <div className={classes.text}>
          <p> ENJOY YOUR FOOD AT FOODY!</p>
        </div>
      </div>
      <section className={classes.features}>
        <div className={classes.columnwrapper}>
          <div className={classes.column}>
            <GiFoodTruck style={{ fontSize: "2rem" }} />
            <p>Turn Deep greens</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={classes.column}>
            <Mug />
            <p>BeetRoot Water</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={classes.column}>
            <p>Get Social</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default HomePage;
