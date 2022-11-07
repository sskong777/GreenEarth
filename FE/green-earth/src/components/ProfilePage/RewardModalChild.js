import { useState, useEffect } from "react";

import { useRecoilState } from "recoil";
import { rewardListState } from "../../store/atoms";

import { useRewardCallback } from "./../../functions/useRewardCallback";

import "animate.css";

const RewardModal = ({ setModalChildOpen, childInfo }) => {
  const [rewardList, setRewardList] = useRecoilState(rewardListState);

  const { rewardListCallback } = useRewardCallback();

  // 보상 목표와 보상 혜택, 보상정보, 해결한 미션 갯수 저장
  const [rewardInfo, setRewardInfo] = useState();
  const [rewardGoal, setRewardGoal] = useState("");
  const [rewardGift, setRewardGift] = useState("");
  const [mission, setMission] = useState(
    childInfo.clearedMission ? childInfo.clearedMission : 0
  );

  // 보상 정보 Axios 요청 후 useState에 저장
  useEffect(() => {
    rewardListCallback(childInfo.childId);

    if (rewardList[0]) {
      setRewardInfo(rewardList[0]);
      setRewardGoal(parseInt(rewardList[0].rewardCondition));
      setRewardGift(rewardList[0].rewardName);
    }
  }, rewardList);

  return (
    <>
      <div className="ReawardModal">
        <div className="ReawardModalBody">
          <div className="ReawardModalContent">
            <div>
              <div className="ReawardModalTitle">보상 확인</div>
              <div className="ReawardModalHeader">
                {/* 아이 프로필 정보 */}
                <div className="flex flex-col">
                  <div className="ChildImage">
                    <img src="./../assets/images/girl1.svg" />
                  </div>
                  <div className="text-center text-xl text-blackBrown">
                    Lv.{childInfo.earthLevel} {childInfo.realName}
                  </div>
                </div>

                {/* 보상 정보 안내 */}
                <div className="ReawardModalInfo">
                  <div className="text-3xl text-darkBrown">
                    지금까지 {mission}개의 미션을 수행했습니다.
                  </div>
                  {/* 보상정보가 있다면 보상 관련 안내 */}
                  {rewardInfo ? (
                    <div className="text-2xl text-darkBrown mt-6">
                      <div>총 {rewardGoal}개의 미션을 달성하면,</div>
                      <div className="text-center mt-2">
                        보상으로 {rewardGift}이(가) 제공 됩니다.
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
              {/* 보상 정보가 있다면 보상 잔여 갯수 안내 */}
              {rewardInfo ? (
                <div className="ReawardModalChildInfo animate__animated animate__tada">
                  <div className="text-4xl text-[#e8c722] mr-3">
                    😆 '{rewardGift}'
                  </div>
                  <div>보상까지</div>
                  <div className="text-4xl text-[#e8c722] mx-3">
                    '{rewardGoal - mission}개'
                  </div>
                  <div>남았습니다!</div>
                </div>
              ) : (
                <div className="ReawardModalChildInfo">
                  <div>보상이 설정되어 있지 않습니다.</div>
                </div>
              )}

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
