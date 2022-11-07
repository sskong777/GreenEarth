import { useEffect, useState } from "react";

import "./../../style/style.css";
import SingleCard from "./SingleCard";

const cardImages = [
  { src: "/assets/cards/card_bus.png", matched: false },
  { src: "/assets/cards/card_ecobag.png", matched: false },
  { src: "/assets/cards/card_family.png", matched: false },
  { src: "/assets/cards/card_plug.png", matched: false },
  { src: "/assets/cards/card_recycle.png", matched: false },
  { src: "/assets/cards/card_tree.png", matched: false },
];

function CardsPairing() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // start a new game automagically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>같은 그림 찾기</h1>
      <button onClick={shuffleCards}>새 게임</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>도전 횟수 : {turns}</p>
    </div>
  );
}

export default CardsPairing;
