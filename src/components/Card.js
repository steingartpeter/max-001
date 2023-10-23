import { Children } from "react";
import "./Card.css";
const Card = (props) => {
  //<nn>
  // To use custome component as root elelent, we need to use PROPS.CHILDREN
  // And if we want to add class to these root custom components: we need to use PROPS.CLASSNAME
  //</nn>
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
