import React from "react";
import "./Card.css";

type CardArgs = {
  icon?: any | null | undefined;
  title: string;
  description: string;
};

const Card = (args: CardArgs) => {
  return (
    <div className="card">
      {args.icon && <img src={args.icon}></img>}
      <div className="container">
        <h3>{args.title}</h3>
        <p>{args.description}</p>
      </div>
    </div>
  );
};

export default Card;
