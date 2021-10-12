import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <div className={classes.main}>
      <section>
        <div>{props.name}</div>
        <h3>{props.description}</h3>
      </section>
      <h3 className={classes.price}>₹ {props.price}</h3>
    </div>
  );
};
export default MenuItem;
