import React from "react";
import "../components/Cards.css";

function Cards() {
  const CardData = [
    { cardno: 1, title: "Total Customer", value: 50 },
    { cardno: 2, title: "Birthday Tomorrow", value: 21 },
    { cardno: 3, title: "Birthday Week", value: 40 },
    { cardno: 4, title: "Birthday Month", value: 32 },
    { cardno: 5, title: "Anniversary Tomorrow", value: 10 },
    { cardno: 6, title: "Anniversary Week", value: 12 },
  ];
  //   const names = ["bruce", "clark", "diana"];
  const cardList = CardData.map((person) => (
    <div className="cards">
      <div className="cards-title">
        <p>{person.title}</p>
      </div>
      <div className="cards-value">
        <p>{person.value}</p>
      </div>
    </div>
  ));
  return <div className="allcards">{cardList}</div>;
}

export default Cards;
