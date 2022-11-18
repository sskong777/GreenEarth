import { useEffect, useState } from "react";

import CardsPairingModal from "./CardsPairingModal";

import "./../../style/style.css";
import SingleCard from "./SingleCard";

const cardImages = [
  { src: "./assets/games/cards/card_bus.png", matched: false },
  { src: "./assets/games/cards/card_ecobag.png", matched: false },
  { src: "./assets/games/cards/card_family.png", matched: false },
  { src: "./assets/games/cards/card_plug.png", matched: false },
  { src: "./assets/games/cards/card_recycle.png", matched: false },
  { src: "./assets/games/cards/card_tree.png", matched: false },
];

function CardsPairing() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [modalCardOpen, setModalCardOpen] = useState(false);

  // 카드 섞기
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // 카드 선택할 때 실행
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // 두 카드가 맞는지 비교
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

  // 모든 카드 맞췄을 경우 실행
  useEffect(() => {
    // console.log(cards);
    if (
      cards.length > 0 &&
      cards.every((card) => {
        return card.matched;
      })
    ) {
      setModalCardOpen(true);
    }
  }, [cards]);

  // 1회 도전 완료 후 실행
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // 시작 시 자동으로 카드 섞기
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="CardsPairing">
      {modalCardOpen && (
        <CardsPairingModal
          setModalCardOpen={setModalCardOpen}
          shuffleCards={shuffleCards}
          turns={turns}
        />
      )}
      <div className="CardsPairingGrid">
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
      <div className="ml-10 text-center">
        <button className="CardsPairingButton" onClick={shuffleCards}>
          새 게임
        </button>
        <div className="CardsPairingInfo">도전 횟수 : {turns}</div>
      </div>
    </div>
  );
}

export default CardsPairing;
