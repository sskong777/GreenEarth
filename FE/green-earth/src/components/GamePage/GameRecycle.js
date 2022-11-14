import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import RecycleFailModal from "./RecycleFailModal";
import RecycleSuccessModal from "./RecycleSuccessModal";

const useStyles = makeStyles((theme) => ({
  mygame: {
    border: "10px solid #E9FBD2",
    margin: "10px",
    borderRadius: "10px",
  },
}));

export const GameRecycle = () => {
  const classes = useStyles();

  const canvasRef = useRef(null);

  // 생명
  const [life, setLife] = useState(3);
  // 생명 이미지
  const [lifeCount, setLifeCount] = useState(
    "/assets/games/game/heart_full.png"
  );

  //캔버스 관련 변수

  //가로 세로
  const canvasWidth = 936;
  const canvasHeight = 560;

  //현재 페이지
  const [nowPage, setnowPage] = useState("main");

  //타이틀 버튼 구현
  const [buttonSrc, setButtonSrc] = useState(
    "/assets/games/main/startButton.png"
  );

  //아이템들 정보
  const [items, setitems] = useState([
    {
      name: "파스퇴르",
      current: [0, 0], //현재좌표
      loc1: [50, 40], //좌측 상단 모서리 좌표
      loc2: [125, 250], //우측 하단 모서리 좌표
      answer: 0,
      success: false,
    },
    {
      name: "아이시스",
      current: [0, 0], //현재좌표
      loc1: [165, 80], //좌측 상단 모서리 좌표
      loc2: [220, 270], //우측 하단 모서리 좌표
      answer: 0,
      success: false,
    },
    {
      name: "떡볶이",
      current: [0, 0], //현재좌표
      loc1: [270, 120], //좌측 상단 모서리 좌표
      loc2: [425, 255], //우측 하단 모서리 좌표
      answer: 1,
      success: false,
    },
    {
      name: "자일리톨",
      current: [0, 0], //현재좌표
      loc1: [485, 20], //좌측 상단 모서리 좌표
      loc2: [560, 145], //우측 하단 모서리 좌표
      answer: 0,
      success: false,
    },
    {
      name: "자껍",
      current: [0, 0], //현재좌표
      loc1: [610, 40], //좌측 상단 모서리 좌표
      loc2: [715, 125], //우측 하단 모서리 좌표
      answer: 0,
      success: false,
    },
    {
      name: "알약",
      current: [0, 0], //현재좌표
      loc1: [560, 210], //좌측 상단 모서리 좌표
      loc2: [690, 270], //우측 하단 모서리 좌표
      answer: 1,
      success: false,
    },
    {
      name: "좋은 물",
      current: [0, 0], //현재좌표
      loc1: [785, 70], //좌측 상단 모서리 좌표
      loc2: [850, 255], //우측 하단 모서리 좌표
      answer: 1,
      success: false,
    },
  ]);

  //지금 잡고있는 아이템 정보
  const [selected, setSelected] = useState(-1);
  //잡을 당시 마우스 좌표
  const [selectedloc, setSelectedLoc] = useState([-1, -1]);
  //잡을 당시 아이템 위치
  const [selectedIloc, setSelectedILoc] = useState([
    [-1, -1],
    [-1, -1],
    [-1, -1],
  ]);

  //몇번 아이템의 설명을 보여줄까요 -> description 페이지 전용
  const [descNum, setdescNum] = useState(-1);

  const draw = (ctx) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    if (nowPage == "main") {
      mainPage(ctx);
    } else if (nowPage == "game") {
      gamePage(ctx);
    } else if (nowPage == "description") {
      descriptionPage(ctx);
    } else if (nowPage == "success") {
      successPage(ctx);
    } else if (nowPage == "fail") {
    }
  };

  const mainPage = (ctx) => {
    //로고 그리기
    let mainlogo = new Image();
    mainlogo.src = "/assets/games/main/recycleMainLogo.png";
    ctx.drawImage(mainlogo, 0, 0, canvasWidth, canvasHeight);

    //게임 설명
    let subtitle = new Image();
    subtitle.src = "/assets/games/main/recycleDisc.png";
    ctx.drawImage(subtitle, 0, 0, canvasWidth, canvasHeight);

    //시작 버튼
    let startButton = new Image();

    const canvas = canvasRef.current;
    canvas.onmousedown = (e) => {
      console.log(e.offsetX, e.offsetY);
      if (
        e.offsetX > 330 &&
        e.offsetX < 590 &&
        e.offsetY > 420 &&
        e.offsetY < 515
      ) {
        setButtonSrc("/assets/games/main/clickedButton.png");
      }
    };
    canvas.onmouseup = (e) => {
      if (buttonSrc == "/assets/games/main/clickedButton.png") {
        setButtonSrc("/assets/games/main/startButton.png");
        setnowPage("game");
      }
    };

    startButton.src = buttonSrc;
    ctx.drawImage(startButton, 0, 0, canvasWidth, canvasHeight);
  };

  const gamePage = (ctx) => {
    let isEnd = true;
    for (let i = 0; i < 7; i++) {
      if (!items[i].success) {
        isEnd = false;
        break;
      }
    }
    if (isEnd) {
      setnowPage("success");
    }

    let items_tmp = items;

    // 라이프 그리기
    let lifeImage = new Image();
    lifeImage.src = `${lifeCount}`;
    ctx.drawImage(lifeImage, 0, 0, canvasWidth, canvasHeight);

    //분류 창
    let waste = new Image();
    waste.src = "/assets/games/game/waste.png";
    ctx.drawImage(waste, 0, 0, canvasWidth, canvasHeight);

    //파스퇴르
    //51 ,42
    //118,228
    if (!items_tmp[0].success) {
      let past = new Image();
      past.src = "/assets/games/game/things/파스퇴르.png";
      ctx.drawImage(
        past,
        items_tmp[0].current[0],
        items_tmp[0].current[1],
        canvasWidth,
        canvasHeight
      );
    }

    //아이시스
    //155 , 85
    //203 , 234
    if (!items_tmp[1].success) {
      let icis = new Image();
      icis.src = "/assets/games/game/things/아이시스.png";
      ctx.drawImage(
        icis,
        items_tmp[1].current[0],
        items_tmp[1].current[1],
        canvasWidth,
        canvasHeight
      );
    }

    //떡볶이
    //240 , 113
    //391 , 228

    if (!items_tmp[2].success) {
      let dduck = new Image();
      dduck.src = "/assets/games/game/things/떡볶이.png";
      ctx.drawImage(
        dduck,
        items_tmp[2].current[0],
        items_tmp[2].current[1],
        canvasWidth,
        canvasHeight
      );
    }

    //자일리톨
    //424 , 25
    //502 , 133

    if (!items_tmp[3].success) {
      let xi = new Image();
      xi.src = "/assets/games/game/things/자일리톨.png";
      ctx.drawImage(
        xi,
        items_tmp[3].current[0],
        items_tmp[3].current[1],
        canvasWidth,
        canvasHeight
      );
    }
    //자껍
    //526 , 47
    //634 , 128

    if (!items_tmp[4].success) {
      let xi_g = new Image();
      xi_g.src = "/assets/games/game/things/자껍.png";
      ctx.drawImage(
        xi_g,
        items_tmp[4].current[0],
        items_tmp[4].current[1],
        canvasWidth,
        canvasHeight
      );
    }

    //알약
    //484 , 167
    //621 , 254

    if (!items_tmp[5].success) {
      let drug = new Image();
      drug.src = "/assets/games/game/things/알약.png";
      ctx.drawImage(
        drug,
        items_tmp[5].current[0],
        items_tmp[5].current[1],
        canvasWidth,
        canvasHeight
      );
    }

    //좋은물
    //671 , 65
    //751 , 233

    if (!items_tmp[6].success) {
      let water = new Image();
      water.src = "/assets/games/game/things/좋은물.png";
      ctx.drawImage(
        water,
        items_tmp[6].current[0],
        items_tmp[6].current[1],
        canvasWidth,
        canvasHeight
      );
    }

    const canvas = canvasRef.current;
    canvas.onmousedown = (e) => {
      console.log(e.offsetX, e.offsetY);
      let items_tmp = items;
      let _selected = -1;
      for (let i = 0; i < 7; i++) {
        if (!items_tmp[i].success) {
          //성공된건 생략
          if (
            e.offsetX > items_tmp[i].loc1[0] &&
            e.offsetX < items_tmp[i].loc2[0] &&
            e.offsetY > items_tmp[i].loc1[1] &&
            e.offsetY < items_tmp[i].loc2[1]
          ) {
            _selected = i;
          }
        }
      }
      if (_selected != -1) {
        setSelected(_selected);
        setSelectedLoc([e.offsetX, e.offsetY]);
        setSelectedILoc([
          [items_tmp[_selected].current[0], items_tmp[_selected].current[1]],
          [items_tmp[_selected].loc1[0], items_tmp[_selected].loc1[1]],
          [items_tmp[_selected].loc2[0], items_tmp[_selected].loc2[1]],
        ]);
      }
    };
    canvas.onmouseup = (e) => {
      //분리수거 하기
      //197 , 292
      //409 , 431
      //다시 가져가기
      //417 , 293
      //618 , 430
      if (selected != -1) {
        const _selected = selected;
        let items_tmp = items;

        setSelected(-1);
        setSelectedLoc([-1, -1]);
        setSelectedILoc([
          [-1, -1],
          [-1, -1],
          [-1, -1],
        ]);

        if (
          e.offsetX > 0 &&
          e.offsetX < 380 &&
          e.offsetY > 300 &&
          e.offsetY < 550
        ) {
          //분리수거 하기에다가 놓은 경우
          if (items_tmp[_selected].answer == 0) {
            let items_tmp = items;
            items_tmp[_selected].success = true;
            setitems(items_tmp);
            setdescNum(_selected);
            setnowPage("description");
          } else {
            setLife(life - 1);
            alert("다시 생각해 보세요!");
          }
        } else if (
          e.offsetX > 550 &&
          e.offsetX < 935 &&
          e.offsetY > 300 &&
          e.offsetY < 550
        ) {
          //다시 가져가기에다가 놓은 경우

          if (items_tmp[_selected].answer == 1) {
            let items_tmp = items;
            items_tmp[_selected].success = true;
            setitems(items_tmp);
            setdescNum(_selected);
            setnowPage("description");
          } else {
            setLife(life - 1);
            alert("다시 생각해 보세요!");
          }
        }
      }
    };
    canvas.onmousemove = (e) => {
      let items_tmp = items;
      let _selected = selected;
      let _selectedloc = selectedloc;
      let _selectedIloc = selectedIloc;
      if (selected != -1) {
        items_tmp[_selected].current[0] =
          _selectedIloc[0][0] + (e.offsetX - _selectedloc[0]);
        items_tmp[_selected].current[1] =
          _selectedIloc[0][1] + (e.offsetY - _selectedloc[1]);

        items_tmp[_selected].loc1[0] =
          _selectedIloc[1][0] + (e.offsetX - _selectedloc[0]);
        items_tmp[_selected].loc1[1] =
          _selectedIloc[1][1] + (e.offsetY - _selectedloc[1]);

        items_tmp[_selected].loc2[0] =
          _selectedIloc[2][0] + (e.offsetX - _selectedloc[0]);
        items_tmp[_selected].loc2[1] =
          _selectedIloc[2][1] + (e.offsetY - _selectedloc[1]);
      }
      setitems(items_tmp);
    };
  };

  const descriptionPage = (ctx) => {
    let descItems = [
      "description.png",
      "description.png",
      "description.png",
      "description.png",
      "description.png",
      "description.png",
      "description.png",
    ];
    let descBackg = new Image();
    descBackg.src = "/assets/games/description/" + descItems[descNum];
    ctx.drawImage(descBackg, 0, 0, canvasWidth, canvasHeight);

    const canvas = canvasRef.current;
    canvas.onmousedown = (e) => {
      //나가기버튼
      //738 , 387
      //801 , 448
      if (
        e.offsetX > 760 &&
        e.offsetX < 880 &&
        e.offsetY > 40 &&
        e.offsetY < 130
      ) {
        setnowPage("game");
      }
    };
  };
  const successPage = (ctx) => {
    let successBackg = new Image();
    successBackg.src = "/assets/games/success/success.png";
    ctx.drawImage(successBackg, 0, 0, canvasWidth, canvasHeight);
  };

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;

    //draw 로 시작
    const render = () => {
      draw(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  useEffect(() => {
    if (life == 0) {
      setnowPage("fail");
    } else if (life == 2 || life == 1) {
      setLifeCount(`/assets/games/game/heart_${life}.png`);
      alert("라이프가 감소하였습니다!");
    }
  }, [life]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        className={classes.mygame}
        width={936}
        height={560}
      />

      {!life && (
        <RecycleFailModal
          setnowPage={setnowPage}
          setLife={setLife}
          setLifeCount={setLifeCount}
        />
      )}

      {nowPage == "success" && (
        <RecycleSuccessModal
          setnowPage={setnowPage}
          setLife={setLife}
          setLifeCount={setLifeCount}
        />
      )}
    </div>
  );
};

export default React.memo(GameRecycle);
