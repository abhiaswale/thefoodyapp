import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <div className={classes.main}>
      <div>
        <div>{props.name}</div>
        <h3>{props.description}</h3>
      </div>
      <h3>{props.price}</h3>
    </div>
  );
};
export default MenuItem;
