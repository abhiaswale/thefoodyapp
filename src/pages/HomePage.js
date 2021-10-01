import React from "react";
// import foodBg from "../Components/images/foodbg2.jpg";
import classes from "./HomePage.module.css";
const HomePage = () => {
  return (
    <React.Fragment>
      <div
        style={{ backgroundImage: `url(../images/foodbg2.jpg)` }}
        className={classes.imgtag}
      >
        {/* <img src={foodBg} alt="meals.jpg" /> */}
        <div className={classes.text}>
          <p> ENJOY YOUR FOOD AT FOODY!</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default HomePage;
