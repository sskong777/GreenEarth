import "animate.css";

const GameTutorial = () => {
  return (
    <div className="GameTutorial">
      <div className="flex justify-center items-center my-10 animate__animated animate__rubberBand">
        <img src="/assets/games/gameland.png" className="w-[5rem]" />
        <div className="text-5xl text-light pl-3">
          게임랜드에 오신 것을 환영합니다!
        </div>
      </div>
      <div className="flex w-full h-full justify-start items-center">
        <div className="w-80 mt-26 text-light text-4xl animate-bounce">
          <div>← 원하시는</div>
          <div className="mt-10">← 게임을</div>
          <div className="my-10">← 클릭하세요!</div>
          <div>← GAME START</div>
        </div>
        <div className="flex flex-col w-full h-full justify-between items-center">
          <div className="text-light text-3xl mt-10 animate-pulse">
            <div>게임을 통해 탄소중립 실천 방법을 배우고,</div>
            <div className="mt-4">게임을 완료하면 마일리지가 적립됩니다!</div>
          </div>
          <div className="flex items-end">
            <img src="/assets/games/boy.svg" className="w-48" />
            <img src="/assets/games/girl.svg" className="w-48 mx-5" />
            <img src="/assets/games/boy2.svg" className="w-48" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameTutorial;
