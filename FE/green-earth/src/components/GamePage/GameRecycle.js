import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import RecycleFailModal from "./RecycleFailModal";
import RecycleSuccessModal from "./RecycleSuccessModal";

import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  mygame: {
    border: "4px solid #E9FBD2",
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
    "/assets/games/gameRecycle/heart_full.png"
  );

  //캔버스 관련 변수

  //가로 세로
  const canvasWidth = 936;
  const canvasHeight = 560;

  //현재 페이지
  const [nowPage, setnowPage] = useState("main");

  //타이틀 버튼 구현
  const [buttonSrc, setButtonSrc] = useState(
    "/assets/games/gameRecycle/main/startButton.png"
  );

  //아이템들 정보
  const [items, setitems] = useState([
    {
      name: "can",
      current: [0, 0], //현재좌표
      loc1: [40, 105], //좌측 상단 모서리 좌표
      loc2: [170, 200], //우측 하단 모서리 좌표
      answer: 0,
      success: false,
    },
    {
      name: "label_bottle",
      current: [0, 0], //현재좌표
      loc1: [245, 40], //좌측 상단 모서리 좌표
      loc2: [300, 205], //우측 하단 모서리 좌표
      answer: 1,
      success: false,
    },
    {
      name: "pill",
      current: [0, 0], //현재좌표
      loc1: [760, 170], //좌측 상단 모서리 좌표
      loc2: [900, 245], //우측 하단 모서리 좌표
      answer: 1,
      success: false,
    },
    {
      name: "plastic",
      current: [0, 0], //현재좌표
      loc1: [380, 100], //좌측 상단 모서리 좌표
      loc2: [585, 165], //우측 하단 모서리 좌표
      answer: 0,
      success: false,
    },
    {
      name: "vinyl",
      current: [0, 0], //현재좌표
      loc1: [605, 100], //좌측 상단 모서리 좌표
      loc2: [735, 220], //우측 하단 모서리 좌표
      answer: 0,
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
    let recycleMainLogo = new Image();
    recycleMainLogo.src = "/assets/games/gameRecycle/main/recycleMainLogo.png";
    ctx.drawImage(recycleMainLogo, 0, 0, canvasWidth, canvasHeight);

    //게임 설명
    let recycleDisc = new Image();
    recycleDisc.src = "/assets/games/gameRecycle/main/recycleDisc.png";
    ctx.drawImage(recycleDisc, 0, 0, canvasWidth, canvasHeight);

    //시작 버튼
    let startButton = new Image();

    const canvas = canvasRef.current;
    canvas.onpointerdown = (e) => {
      console.log(e.offsetX, e.offsetY);
      if (
        e.offsetX > 330 &&
        e.offsetX < 590 &&
        e.offsetY > 420 &&
        e.offsetY < 515
      ) {
        setButtonSrc("/assets/games/gameRecycle/main/clickedButton.png");
      }
    };
    canvas.onpointerup = (e) => {
      if (buttonSrc == "/assets/games/gameRecycle/main/clickedButton.png") {
        setButtonSrc("/assets/games/gameRecycle/main/startButton.png");
        setnowPage("game");
      }
    };

    startButton.src = buttonSrc;
    ctx.drawImage(startButton, 0, 0, canvasWidth, canvasHeight);
  };

  const gamePage = (ctx) => {
    let isEnd = true;
    for (let i = 0; i < 5; i++) {
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
    waste.src = "/assets/games/gameRecycle/waste.png";
    ctx.drawImage(waste, 0, 0, canvasWidth, canvasHeight);

    // can
    if (!items_tmp[0].success) {
      let can = new Image();
      can.src = "/assets/games/gameRecycle/things/can.png";
      ctx.drawImage(
        can,
        items_tmp[0].current[0],
        items_tmp[0].current[1],
        canvasWidth,
        canvasHeight
      );
    }

    // label bottle
    if (!items_tmp[1].success) {
      let label_bottle = new Image();
      label_bottle.src = "/assets/games/gameRecycle/things/label_bottle.png";
      ctx.drawImage(
        label_bottle,
        items_tmp[1].current[0],
        items_tmp[1].current[1],
        canvasWidth,
        canvasHeight
      );
    }

    // pill
    if (!items_tmp[2].success) {
      let pill = new Image();
      pill.src = "/assets/games/gameRecycle/things/pill.png";
      ctx.drawImage(
        pill,
        items_tmp[2].current[0],
        items_tmp[2].current[1],
        canvasWidth,
        canvasHeight
      );
    }

    // plastic
    if (!items_tmp[3].success) {
      let plastic = new Image();
      plastic.src = "/assets/games/gameRecycle/things/plastic.png";
      ctx.drawImage(
        plastic,
        items_tmp[3].current[0],
        items_tmp[3].current[1],
        canvasWidth,
        canvasHeight
      );
    }

    // vinyl
    if (!items_tmp[4].success) {
      let vinyl = new Image();
      vinyl.src = "/assets/games/gameRecycle/things/vinyl.png";
      ctx.drawImage(
        vinyl,
        items_tmp[4].current[0],
        items_tmp[4].current[1],
        canvasWidth,
        canvasHeight
      );
    }

    const canvas = canvasRef.current;
    canvas.onpointerdown = (e) => {
      console.log(e.offsetX, e.offsetY);
      let items_tmp = items;
      let _selected = -1;
      for (let i = 0; i < 5; i++) {
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
    canvas.onpointerup = (e) => {
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
          }
        }
      }
    };
    canvas.onpointermove = (e) => {
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
      "canDesc.png",
      "label_bottleDesc.png",
      "pillDesc.png",
      "plasticDesc.png",
      "vinylDesc.png",
    ];
    let descBackg = new Image();
    descBackg.src =
      "/assets/games/gameRecycle/description/" + descItems[descNum];
    ctx.drawImage(descBackg, 0, 0, canvasWidth, canvasHeight);

    const canvas = canvasRef.current;
    canvas.onpointerdown = (e) => {
      //나가기버튼
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
    successBackg.src = "/assets/games/gameRecycle/success/success.png";
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
      setLifeCount(`/assets/games/gameRecycle/heart_${life}.png`);
      swal({
        title: "라이프가 감소하였습니다!",
        text: "다시 생각해 보세요!",
        icon: "warning",
        button: "돌아가기",
      });
    }
  }, [life]);

  return (
    <div>
      <canvas
        style={{ touchAction: "none" }}
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

      {nowPage == "success" && <RecycleSuccessModal />}
    </div>
  );
};

export default React.memo(GameRecycle);
