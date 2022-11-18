import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGameCallback } from "./../../functions/useGameCallback";

import "animate.css";

const CardsPairingModal = ({ setModalCardOpen, shuffleCards, turns }) => {
  const navigate = useNavigate();
  const { gameSuccessCallback } = useGameCallback();

  // 게임 다시하기 버튼
  const handleClickCardsPairingButton = (e) => {
    setModalCardOpen(false);
    shuffleCards();
  };

  // 게임 홈화면 이동 버튼
  const handleClickGameLandButton = (e) => {
    setModalCardOpen(false);
    navigate(0);
  };

  useEffect(() => {
    gameSuccessCallback(10);
  }, []);

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
                    😄 도전 횟수 {turns}번으로 성공하셨습니다.
                  </div>
                  <div className="text-3xl text-[#070803] mt-5">
                    😆 마일리지 10점이 적립되었습니다.
                  </div>
                </div>
              </div>
              <hr />
              {/* 맞춘 이미지 안내 */}
              <div className="CardsPairingModalInfo">
                <div className="flex">
                  <img
                    className="CardsPairingModalImage"
                    src="/assets/games/cards/card_bus.png"
                  />
                  <img
                    className="CardsPairingModalImage"
                    src="/assets/games/cards/card_ecobag.png"
                  />
                  <img
                    className="CardsPairingModalImage"
                    src="/assets/games/cards/card_recycle.png"
                  />
                  <img
                    className="CardsPairingModalImage"
                    src="/assets/games/cards/card_tree.png"
                  />
                  <img
                    className="CardsPairingModalImage"
                    src="/assets/games/cards/card_family.png"
                  />
                  <img
                    className="CardsPairingModalImage"
                    src="/assets/games/cards/card_plug.png"
                  />
                </div>
                <div className="text-3xl text-light mt-10">
                  게임을 통해 발견한 그림을 다시 한번 확인해 보세요!
                </div>
              </div>
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

export default CardsPairingModal;
