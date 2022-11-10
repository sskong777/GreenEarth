import "../../style/MissionInfo.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { memberInfoState, childInfoState, todayMissionListState , missionInfoState} from "../../store/atoms";

import { useMissionCallback } from "./../../functions/useMissionCallback";

const MissionInfo = () => {
  
  const { missionId } = useParams();
  const navigate = useNavigate();
  // 미션정보
  const [missionInfo, setMissionInfo] = useRecoilState(missionInfoState);
  const { missionInfoCallback } = useMissionCallback();
  
  useEffect(() => {
    missionInfoCallback(missionId);
    console.log(missionId)
}, []);

const goBack = () => {
  navigate("/child");
};
  const script = [
    {
      index: 1,
      data: {
        title: "음식 남기지 않기",
        image1: "assets/images/trash.png",
        image2: "assets/images/polarbear.jpg",
        contents:
          "매년 전 세계에서 나오는 음식 쓰레기는 25억톤입니다. 이 음식물 쓰레기에서는 온실가스가 배출되고, 온실가스는 기후변화의 주범이 되고 있습니다. 이러한 기후 변화로 북극곰이 살 곳을 잃고 있습니다. 북극곰에게 지구온난화는 바로 삶의 터전의 문제입니다. 북금곰들은 삶의 터전을 잃고 먹이를 찾을 수 없는 치명적인 위기를 맞게 됩니다. 지구온난화로 바다얼음이 사라지면서 북극곰(Polar Bear) 개체수는 지난 10년 새 절반 가까이 급감했습니다. 우리 집에서 나오는 음식물 쓰레기를 줄여서 온실가스 배출 줄이기에 동참해주세요. ",
        select1: "미션 달성하고 북극곰 구하기",
      },
    },
    {
      index: 2,
      data: {
        title: "종이타월 대신 개인 손수건 사용하기",
        image1: "assets/images/papers.png",
        image2: "assets/images/penguin.png",
        contents:
          "손을 씻은 후에 물을 몇 번 털어낸 다음 종이 타월이나 핸드 드라이어 대신 개인 손수건을 사용하면 연간 1인당 26㎏의 이산화탄소를 줄일 수 있습니다. 탄소 배출량이 현재 수준으로 유지된다면 2050년에는 황제펭귄 서식지의 70%가 사라지고, 2100년에는 황제펭귄의 98%가 서식지를 잃어 멸종에 이를 수 있어요. 종이타월, 핸드드라이어 대신 개인 손수건 사용하며 온실가스 배출 줄이기에 동참해주세요. ",
        select1: "미션 달성하고 펭귄 구하기",
      },
    },
    {
      index: 3,
      data: {
        title: "양치컵 사용하기",
        image1: "assets/images/water.jpg",
        image2: "assets/images/tiger.jpg",
        contents:
          "방글라데시와 인도의 습지에는 현재 약 5,000 마리의 벵갈 호랑이가 살고 있습니다. 그러나 기후변화로 인한 해수면 상승으로 인해 벵갈호랑이의 서식처가 물에 잠길 위험에 처했습니다. 4인 가족이 하루 3회 양치컵을 사용하면 물을 틀어 놓을 때보다 연간 온실가스 약 12.6kg을 줄일 수 있으며 이는 30년생 소나무 1.3그루를 심는 효과와 같습니다. 우리나라 전체 2089만 1,000가구의 10%만 동참해도 연간 온실가스 약 2만 6000톤을 감축하게 돼 30년생 소나무 289만 그루를 심는 효과가 됩니다. 양치컵 사용하기를 통해 물낭비를 줄이고 벵갈호랑이의 삶의 터전을 지켜주세요",
        select1: "미션 달성하고 벵갈호랑이 구하기",
      },
    },
    {
      index: 4,
      data: {
        title: "물통(텀블러)사용하기",
        image1: "assets/images/bottle.jpg",
        image2: "assets/images/panda.jpg",
        contents:
          "대구시에 따르면, 시에서 소비되는 1회용 컵은 연간 8억개 정도로, 연간 참나무 30년생 340그루의 소중한 산림이 사라지고 있으며, 시민들의 자발적 참여로 1회용품을 30% 절감하면 100여 그루의 참나무를 식재하는 효과가 나타납니다. 또 온실가스 배출량 6천720톤의 감축 효과가 있습니다.영화 <쿵푸팬더>의 주인공, 자이언트 판다도 기후변화의 위협에서 자유롭지 못합니다. 생존에 필요한 영양 뿐 아니라 서식처를 제공하는 대나무 숲이 기후변화로 인해 빠른 속도로 없어지고 있기 때문입니다.  물통 사용을 통해 일회용 컵 사용을 줄이고 판다의 삶의 터전인 대나무 숲을 지켜주세요",
        select1: "미션 달성하고 판다 구하기",
      },
    },
    {
      index: 5,
      data: {
        title: "사용하지 않는 방 전등 소등",
        image1: "assets/images/light.jpg",
        image2: "assets/images/turtle.jpg",
        contents:
          "지구온난화는 기후변화를 만듭니다. 지구 기온이 1°C정도 올랐는데 자연재해, 해수면 상승, 생태계 파괴 등 이미 많은 피해가 나타났어요. 전 세계는 기후변화의 피해를 줄이기 위해 기온 상승을 1.5°C 이내로 막자고 약속했어요! 기후변화를 막는 우리의 실천, 바로 기후행동입니다. 바닷속 플라스틱으로 괴로운 바다거북은 지구온난화의 피해자이기도 합니다. 바다거북은 해변가 모래 속에 알을 낳습니다. 모래에 수분기가 많고 시원할수록 수컷이 많이 부화하고, 모래가 따뜻하고 건조할수록 암컷이 많이 부화합니다. 지구 온도 상승으로 인해 이제 수컷 바다거북은 거의 태어나지 않습니다. 지난 20년 동안 태어난 바다거북의 99%가 암컷이었습니다. 사용하지 않는 방 전등 소등을 실천하며 바다거북의 삶을 지켜주세요",
        select1: "미션 달성하고 바다거북 구하기",
      },
    },
  ];

  let num = 4;

  

  return (
    <div className="MissionForm">
      <div className="MissionTitle">
        {<h1>{script[num - 1].data.title}</h1>}
        <h1>{missionInfo.name}</h1>
      </div>
      <div className="Info">
        <div className="MissionImage">
          <img src={script[num - 1].data.image1} className="MissionImage1" />
          <img src={script[num - 1].data.image2} className="MissionImage2" />
        </div>
        <div className="MissionContents">
          <h1>{script[num - 1].data.contents}</h1>
          <h1>{missionId.description}</h1>
        </div>
      </div>
      <div className="Select">
        <div>
          <button className="Select1">{script[num - 1].data.select1}</button>
        </div>
        <div>
          <button className="Select2" onClick={goBack}>돌아가기</button>
        </div>
      </div>
    </div>
  );
};

export default MissionInfo;
