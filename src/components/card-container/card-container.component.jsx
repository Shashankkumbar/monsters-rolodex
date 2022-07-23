//import { Component } from "react";
import "./card-container.styles.css";

//Directly passing the {parameter}to functional component instead of using this.props
const CardContainer = ({ monster }) => {
  //render() {
  //const { id, name, email } = this.props.monster;
  const { id, name, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2$size=100×100`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
  // }
};
export default CardContainer;
