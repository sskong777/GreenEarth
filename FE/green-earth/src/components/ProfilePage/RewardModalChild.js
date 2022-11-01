import { useState } from "react";

import { ChildInfoState } from "../../store/atoms";

const RewardModal = ({ setModalChildOpen, childInfo }) => {
  const [rewardGoal, setRewardGoal] = useState(
    parseInt(childInfo.clearedMission) + 10
  );
  const [rewardGift, setRewardGift] = useState("에어팟");
  const [mission, setMission] = useState(childInfo.clearedMission);

  return (
    <>
      <div className="ReawardModal">
        <div className="ReawardModalBody">
          <div className="ReawardModalContent">
            <div>
              <div className="ReawardModalTitle">보상 확인</div>
              <div className="ReawardModalHeader">
                <div className="flex flex-col">
                  <div className="ChildImage">
                    <img src="./../assets/images/girl1.svg" />
                  </div>
                  <div className="text-center text-xl text-blackBrown">
                    Lv.{childInfo.earthLevel} {childInfo.nickName}
                  </div>
                </div>

                <div className="ReawardModalInfo">
                  <div className="text-3xl text-darkBrown">
                    지금까지 {mission}개의 미션을 수행했습니다.
                  </div>
                  {true ? (
                    <div className="text-2xl text-darkBrown mt-6">
                      <div>총 22개의 미션을 달성하면,</div>
                      <div className="text-center mt-2">
                        보상으로 에어팟이 제공 됩니다.
                      </div>
                    </div>
                  ) : (
                    <div className="text-2xl text-darkBrown mt-5">
                      <div>보상이 설정되어 있지 않습니다.</div>
                    </div>
                  )}
                </div>
              </div>
              <hr />
              <div className="ReawardModalChildInfo">
                <div className="text-4xl text-[#e8c722] mr-3">
                  😆 '{rewardGift}'
                </div>
                <div>보상까지</div>
                <div className="text-4xl text-[#e8c722] mx-3">
                  '{rewardGoal - mission}개'
                </div>
                <div>남았습니다!</div>
              </div>
              <hr />
            </div>
            <div className="mt-16">
              <button
                className="ReawardModalButtonClose"
                onClick={() => setModalChildOpen(false)}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardModal;
