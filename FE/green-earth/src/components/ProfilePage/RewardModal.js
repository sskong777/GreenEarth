import { useState, useEffect } from "react";

import { useRecoilState } from "recoil";
import { rewardListState } from "../../store/atoms";

import { useRewardCallback } from "./../../functions/useRewardCallback";

const RewardModal = ({ setModalOpen, childInfo }) => {
  const [rewardList, setRewardList] = useRecoilState(rewardListState);

  const { rewardListCallback, rewardSubmitCallback, rewardPayCallback } =
    useRewardCallback();

  const [rewardInfo, setRewardInfo] = useState();
  const [rewardGoal, setRewardGoal] = useState("");
  const [rewardGift, setRewardGift] = useState("");
  const [mission, setMission] = useState(
    childInfo.clearedMission ? childInfo.clearedMission : 0
  );

  useEffect(() => {
    rewardListCallback(childInfo.childId);

    if (rewardList[0]) {
      setRewardInfo(rewardList[0]);
      setRewardGoal(parseInt(rewardList[0].rewardCondition));
      setRewardGift(rewardList[0].rewardName);
    }
  }, rewardList);

  const handleClickRewardGoal = (e) => {
    setRewardGoal(e.target.value);
  };

  const handleClickRewardGift = (e) => {
    setRewardGift(e.target.value);
  };

  const handleClickRewardSubmit = () => {
    if (window.confirm("보상을 설정하시겠습니까?")) {
      rewardSubmitCallback(
        rewardGift,
        rewardGoal,
        childInfo.childId,
        childInfo.parent
      );
      setModalOpen(false);
    }
  };

  const handleClickRewardPay = () => {
    if (window.confirm("보상을 지급하시겠습니까?")) {
      rewardPayCallback(rewardList[0].rewardId);
      setModalOpen(false);
    }
  };

  return (
    <>
      <div className="ReawardModal">
        <div className="ReawardModalBody">
          <div className="ReawardModalContent">
            <div>
              <div className="ReawardModalTitle">보상 설정</div>
              <div className="ReawardModalHeader">
                <div className="flex flex-col">
                  <div className="ChildImage">
                    <img src="./../assets/images/girl1.svg" />
                  </div>
                  <div className="text-center text-xl text-blackBrown">
                    Lv.{childInfo.earthLevel} {childInfo.realName}
                  </div>
                </div>

                <div className="ReawardModalInfo">
                  <div className="text-3xl text-darkBrown">
                    지금까지 {mission}개의 미션을 수행했습니다.
                  </div>
                  {rewardInfo ? (
                    <div className="text-2xl text-darkBrown mt-6">
                      <div>총 {rewardGoal}개의 미션을 달성하면,</div>
                      <div className="text-center mt-2">
                        보상으로 {rewardGift}이 제공 됩니다.
                      </div>
                    </div>
                  ) : (
                    <div className="text-3xl text-darkBrown pt-10">
                      <div>보상이 설정되어 있지 않습니다.</div>
                    </div>
                  )}
                </div>
              </div>
              <hr />
              <div className="ReawardModalSetting">
                <div className="ReawardModalSettingSection">
                  <div className="text-2xl text-blackBrown">
                    보상 기준 설정 :{" "}
                  </div>
                  <input
                    type="number"
                    value={rewardGoal}
                    step="10"
                    min={parseInt(mission) + 10}
                    onChange={handleClickRewardGoal}
                    className="ReawardModalInput"
                  />
                  <div className="text-lg text-blackBrown">
                    ( 최소 {parseInt(mission) + 10}개부터 10개 단위로 설정
                    가능합니다. )
                  </div>
                </div>
                <div className="ReawardModalSettingSection">
                  <div className="text-2xl text-blackBrown">
                    보상 내용 설정 :{" "}
                  </div>
                  <input
                    type="text"
                    value={rewardGift}
                    onChange={handleClickRewardGift}
                    className="ReawardModalInputGift"
                  />
                  <div className="text-lg text-blackBrown">
                    ( 우리 아이에게 따뜻한 마음을 전해보세요. )
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className="mt-16">
              <button
                className="ReawardModalButtonClose"
                onClick={() => setModalOpen(false)}
              >
                닫기
              </button>
              {!rewardList[0] && (
                <button
                  className="ReawardModalButton"
                  onClick={handleClickRewardSubmit}
                >
                  설정
                </button>
              )}
              {rewardList[0] &&
                childInfo.clearedMission >= rewardList[0].rewardCondition && (
                  <button
                    className="ReawardModalButtonPay"
                    onClick={handleClickRewardPay}
                  >
                    보상 지급
                  </button>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardModal;
