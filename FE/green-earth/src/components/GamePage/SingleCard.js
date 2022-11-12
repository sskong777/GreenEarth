import "./../../style/style.css";
import "animate.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  // 맞춰진 카드가 아닐 경우 실행
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="SingleCard animate__animated animate__tada">
      <div className={flipped ? "flipped" : ""}>
        <img className="SingleCardFront" src={card.src} alt="card front" />
        <img
          className="SingleCardBack"
          src="./assets/games/cards/cover.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}
