import "./../../style/style.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  // 맞춰진 카드가 아닐 경우 실행
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="SingleCard">
      <div className={flipped ? "flipped" : ""}>
        <img className="SingleCardFront" src={card.src} alt="card front" />
        <img
          className="SingleCardBack"
          src="./assets/cards/cover.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}
