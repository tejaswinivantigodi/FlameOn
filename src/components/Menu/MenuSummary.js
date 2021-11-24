import classes from "./MenuSummary.module.css";

const MenuSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food, Delivered to You!</h2>
      <p>
        Choose your favourite meal from our exquisite collection of meals and
        enjoy a delicious brunch or dinner!{" "}
      </p>
      <p>
        {" "}
        All our recipes include high quality ingredients and cooked by
        experienced chefs!{" "}
      </p>
    </section>
  );
};
export default MenuSummary;
