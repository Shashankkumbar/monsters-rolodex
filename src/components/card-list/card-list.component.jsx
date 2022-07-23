//import { Component } from "react";
import CardContainer from "../card-container/card-container.component";
import "./card-list.style.css";

const CardList = ({ monsters }) => {
  //render() {
  //console.log(this.props.monsters);
  //const { monsters } = this.props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        //const { name, id, email } = monster;
        return (
          // <div className="card-container" key={id}>
          //   <img
          //     alt={`monster ${name}`}
          //     src={`https://robohash.org/${id}?set=set2$size=180×180`}
          //   />
          //   <h2>{name}</h2>
          //   <p>{email}</p>
          // </div>
          <CardContainer monster={monster} />
        );
      })}
    </div>
  );
  // }
};

export default CardList;
