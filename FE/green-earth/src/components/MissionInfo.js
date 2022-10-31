import "../style/MissionInfo.css"

import { useNavigate } from "react-router-dom";

const MissionInfo = () => {
    const navigate = useNavigate();
    const script = [
        {
          title: "음식 남기지 않기",
          image1: "assets/images/WelcomeDescription1.jpg",
          image2: "assets/images/WelcomeDescription1.jpg",
          contents:
            "매년 전 세계에서 나오는 음식 쓰레기는 25억톤이에요. 이 음식물 쓰레기에서는 온실가스가 배출되고, 온실가스는 기후변화의 주범이 되고 있어요. 이러한 기후 변화로 북극곰이 살 곳을 잃고 있어요. 우리 집에서 나오는 음식물 쓰레기를 줄여서 온실가스 배출 줄이기에 동참해주세요.",
        },
        {
          title: "종이타월, 핸드드라이어 대신 개인 손수건 사용하기",
          image1: "assets/images/WelcomeDescription2.jpg",
          image2: "assets/images/WelcomeDescription1.jpg",
          contents:
            "손을 씻은 후에 물을 몇 번 털어낸 다음 종이 타월이나 핸드 드라이어 대신 개인 손수건을 사용하면 연간 1인당 26㎏의 이산화탄소를 줄일 수 있어요.",
        },
        {
          title: "양치컵 사용하기",
          image1: "assets/images/WelcomeDescription3.jpg",
          image2: "assets/images/WelcomeDescription1.jpg",
          contents:
            "4인 가족이 하루 3회 양치컵을 사용하면 물을 틀어 놓을 때보다 연간 온실가스 약 12.6kg을 줄일 수 있으며 이는 30년생 소나무 1.3그루를 심는 효과이다. 우리나라 전체 2089만 1,000가구의 10%만 동참해도 연간 온실가스 약 2만 6000톤을 감축하게 돼 30년생 소나무 289만 그루를 심는 효과가 된다. ",
        },
        {
          title: "물통(텀블러)사용하기",
          image1: "assets/images/WelcomeDescription3.jpg",
          image2: "assets/images/WelcomeDescription1.jpg",
          contents:
            "대구시에 따르면, 시에서 소비되는 1회용 컵은 연간 8억개 정도로, 연간 참나무 30년생 340그루의 소중한 산림이 사라지고 있으며, 시민들의 자발적 참여로 1회용품을 30% 절감하면 100여 그루의 참나무를 식재하는 효과가 나타난다. 또 온실가스 배출량 6천720톤의 감축 효과가 있다. ",
        },
        {
          title: "사용하지 않는 방 전등 소등",
          image1: "assets/images/WelcomeDescription3.jpg",
          image2: "assets/images/WelcomeDescription1.jpg",
          description:
            "지구온난화는 기후변화를 만듭니다. 지구 기온이 1°C정도 올랐는데 자연재해, 해수면 상승, 생태계 파괴 등 이미 많은 피해가 나타났어요. 전 세계는 기후변화의 피해를 줄이기 위해 기온 상승을 1.5°C 이내로 막자고 약속했어요! 기후변화를 막는 우리의 실천, 바로 기후행동입니다.",
        },
    
    
      ];

    const onClick = () => {
          navigate("/child");
        }

    return (
        <div>
            <div className="MissionTitle">
                <h1>{}</h1>
            </div>
            <div className="Contents">
                <h1>Contents</h1>
            </div>
            <div className="Select">
                <button>1</button>
                <button>2</button>
            </div>
        </div>
  );
};

export default MissionInfo;




