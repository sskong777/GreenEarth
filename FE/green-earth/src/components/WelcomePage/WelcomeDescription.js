import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "animate.css";
import "../../style/WelcomeDescription.css";

const WelcomeDescription = () => {
  const navigate = useNavigate();

  // 설명 및 이미지
  const script = [
    {
      title: "지구 온난화란 무엇일까요?",
      image: "assets/images/WelcomeDescription1.jpg",
      description:
        "지구 온난화란 지구의 평균 기온이 점점 높아지는 현상을 뜻합니다. 지구의 평균기온이 상승하게 되면 남극의 빙하가 녹으면서 해수면이 상승하게 됩니다. 실제로 지구 기온이 3℃ 오르면 전 세계 50여 개 도시가 물에 잠길 것이라는 연구 결과도 있으며, 북극과 남극에 사는 북극곰과 펭귄들뿐만 아니라 해안 근처에 사는 동식물들이 살아갈 곳을 잃게 됩니다.",
    },
    {
      title: "탄소중립이란 무엇일까요?",
      image: "assets/images/WelcomeDescription2.jpg",
      description:
        "탄소중립이란 인류의 생존을 위협하는 기후위기 대응을 위해 인간이 배출하는 탄소량을 최대한으로 줄이고 남아있는 탄소를 흡수하여 순배출량이 ‘0’이 되는 개념을 말합니다.",
    },
    {
      title: "기후행동이란 무엇일까요?",
      image: "assets/images/WelcomeDescription3.jpg",
      description:
        "지구온난화는 기후변화를 만듭니다. 지구 기온이 1°C정도 올랐는데 자연재해, 해수면 상승, 생태계 파괴 등 이미 많은 피해가 나타났어요. 전 세계는 기후변화의 피해를 줄이기 위해 기온 상승을 1.5°C 이내로 막자고 약속했어요! 기후변화를 막는 우리의 실천, 바로 기후행동입니다.",
    },
  ];

  // 페이지 번호
  const [page, setPage] = useState(0);

  // 마지막 페이지 일 경우(page == 2) 지구 살리러 가기 버튼 보여줌
  let btn = page < 2 ? "다음으로" : "지구 살리러 가기";

  // 클릭마다 page += 1, 마지막 페이지에서는 navigate로 로그인으로 보내줌
  const onClick = () => {
    if (page < 2) {
      setPage(page + 1);
    } else {
      navigate("/login");
    }
  };

  // page에 따라 설명/이미지 변경
  let nowScript = script[page];
  useEffect(() => {
    nowScript = script[page];
  }, [page]);

  return (
    <div className="WelcomeDescription">
      {/* 스크립트 제목 */}
      <div className="DescriptionHead">
        <div className="animate__animated animate__backInDown">
          {nowScript.title}
        </div>
      </div>
      <div className="DescriptionBody">
        {/* 스크립트 이미지 */}
        <div className="DescriptionImage">
          <img className="rounded-lg" src={nowScript.image} />
        </div>
        {/* 스크립트 설명 */}
        <div className="DescriptionText">
          <h1>{nowScript.description}</h1>
        </div>
      </div>
      {/* 다음으로/로그인으로 이동 버튼 */}
      <div className="DescriptionButton">
        <button onClick={onClick} className="DescriptionBtn">
          {btn}
        </button>
      </div>
    </div>
  );
};
export default WelcomeDescription;
