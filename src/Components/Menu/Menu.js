import { useEffect, useState } from "react";
import classes from "./Menu.module.css";
import MenuItem from "./MenuItem";
const Menu = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://foodyproject-baf67-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      console.log(loadedMeals);
      setMeals(loadedMeals);
    };

    fetchMeals().catch((err) => alert(err.message));
  }, []);

  const mealList = meals.map((meal) => (
    <MenuItem
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <div className={classes.bg}>
      <div className={classes.menu}>
        <div className={classes.menuheader}>
          <p>Find</p>
          <h1>Our Menu</h1>
        </div>
        <ul>{mealList}</ul>
      </div>
    </div>
  );
};
export default Menu;
