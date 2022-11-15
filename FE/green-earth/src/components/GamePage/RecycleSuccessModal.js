import { useNavigate } from "react-router-dom";

import "animate.css";

const RecycleSuccessModal = ({ setnowPage, setLife, setLifeCount }) => {
  const navigate = useNavigate();

  // 게임 다시하기 버튼
  const handleClickCardsPairingButton = (e) => {
    setnowPage("main");
    setLife(3);
    setLifeCount("/assets/games/gameRecycle/heart_full.png");
  };

  // 게임 홈화면 이동 버튼
  const handleClickGameLandButton = (e) => {
    navigate(0);
  };

  return (
    <>
      <div className="CardsPairingModal">
        <div className="CardsPairingModalBody">
          <div className="CardsPairingModalContent py-3 my-5">
            <div className="CardsPairingModalContent">
              <div className="CardsPairingModalTitle">축하합니다!</div>
              <div className="CardsPairingModalHeader">
                {/* 도전 횟수 안내 */}
                <div className="CardsPairingModalInfo">
                  <div className="text-3xl text-[#070803]">
                    😄 모든 분리수거를 완료하였습니다!
                  </div>
                  <div className="text-3xl text-[#070803] mt-5">
                    😆 마일리지 10점이 적립되었습니다.
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <hr />
            <div className="mt-12">
              <button
                className="CardsPairingModalButtonClose"
                onClick={handleClickCardsPairingButton}
              >
                다시하기
              </button>
              <button
                className="CardsPairingModalButton"
                onClick={handleClickGameLandButton}
              >
                게임랜드
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecycleSuccessModal;
