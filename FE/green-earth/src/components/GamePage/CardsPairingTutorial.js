import { useState } from "react";
import CardsPairing from "./CardsPairing";

const CardsPairingTutorial = () => {
  const [isStart, setIsStart] = useState(false);

  return (
    <div className="CardsPairingTutorial flex justify-center items-center w-full h-full">
      {!isStart && (
        <div className="flex flex-col justify-center items-center">
          <div className="text-6xl text-light font-dunggeunmo">
            환상의 짝꿍!
          </div>
          <div>🎠 게임설명</div>
          <div>저탄소 생활 습관이 담긴 카드가 무작위로 섞여 있습니다.</div>
          <div>
            카드의 위치를 잘 기억해 같은 그림의 카드를 모두 뒤집으면 성공!
          </div>
          <div>모든 카드를 뒤집어 위험에 처한 북극곰을 구해주세요.</div>
          <button
            className="CardsPairingButton"
            onClick={() => setIsStart(true)}
          >
            시작하기
          </button>
        </div>
      )}
      {isStart && <CardsPairing />}
    </div>
  );
};

export default CardsPairingTutorial;
