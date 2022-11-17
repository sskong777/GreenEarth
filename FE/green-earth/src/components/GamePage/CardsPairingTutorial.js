import { useState } from "react";
import CardsPairing from "./CardsPairing";

import "animate.css";

const CardsPairingTutorial = () => {
  const [isStart, setIsStart] = useState(false);

  return (
    <div className="CardsPairingTutorial">
      {!isStart && (
        <div className="flex flex-col justify-center items-center">
          <div className="text-6xl text-light font-dunggeunmo leading-relaxed break-keep animate__animated animate__swing">
            환상의 짝꿍😍
          </div>
          <div className="flex justify-center items-start py-8">
            <img src="./assets/games/lovebear.png" className="w-100" />
            <div className="text-light font-dunggeunmo">
              <div className="text-4xl mb-3">🎠게임설명</div>
              <div className="text-3xl">
                <div>저탄소 생활 습관이 담긴 카드가</div>
                <div className="my-1"> 무작위로 섞여 있습니다.</div>
                <div>카드의 위치를 잘 기억해 같은</div>
                <div className="my-1">그림의 카드를 모두 뒤집으면 성공!</div>
                <div>모든 카드를 뒤집어 위험에 처한</div>
                <div className="mt-1">북극곰을 구해주세요.</div>
              </div>
            </div>
          </div>
          <button
            className="CardsPairingStartButton"
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
