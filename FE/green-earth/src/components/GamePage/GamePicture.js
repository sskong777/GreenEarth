import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import PictureFailModal from "./PictureFailModal";
import PictureSuccessModal from "./PictureSuccessModal";

import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
  mygame: {
    border: "10px solid #90C5DE",
    margin: "10px",
    borderRadius: "10px",
  },
}));

export const GamePicture = () => {
  const classes = useStyles();

  const canvasRef = useRef(null);

  //   성공 카운트
  const [passCount, setPassCount] = useState(0);

  // 남은 정답 개수
  const [answerCount, setAnswerCount] = useState(
    "/assets/games/gamePictures/answerCount_2.png"
  );

  // 생명
  const [life, setLife] = useState(3);
  // 생명 이미지
  const [lifeCount, setLifeCount] = useState(
    "/assets/games/gamePictures/pictureHeart_full.png"
  );

  // 부엌 정답 1
  const [kicthen_ans_1, setKicthen_ans_1] = useState("");
  // 부엌 정답 2
  const [kicthen_ans_2, setKicthen_ans_2] = useState("");

  // 화장실 정답 1
  const [bathroom_ans_1, setBathroom_ans_1] = useState("");
  // 화장실 정답 2
  const [bathroom_ans_2, setBathroom_ans_2] = useState("");

  // 침실 정답 1
  const [bedroom_ans_1, setBedroom_ans_1] = useState("");
  // 침실 정답 2
  const [bedroom_ans_2, setBedroom_ans_2] = useState("");

  //캔버스 관련 변수

  //가로 세로
  const canvasWidth = 936;
  const canvasHeight = 560;

  //현재 페이지
  const [nowPage, setnowPage] = useState("main");

  //   게임 1 - 부엌 버튼
  const [kicthenButtonSrc, setKicthenButtonSrc] = useState(
    "/assets/games/gamePictures/kicthenButton.png"
  );

  //   게임 2 - 화장실 버튼
  const [bathroomButtonSrc, setBathroomButtonSrc] = useState(
    "/assets/games/gamePictures/bathroomButton.png"
  );

  //   게임 3 - 침실 버튼
  const [bedroomButtonSrc, setBedroomButtonSrc] = useState(
    "/assets/games/gamePictures/bedroomButton.png"
  );

  const draw = (ctx) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    if (nowPage == "main") {
      mainPage(ctx);
    } else if (nowPage == "kicthen") {
      kicthenPage(ctx);
    } else if (nowPage == "bathroom") {
      bathroomPage(ctx);
    } else if (nowPage == "bedroom") {
      bedroomPage(ctx);
    } else if (nowPage == "success") {
      successPage(ctx);
    } else if (nowPage == "fail") {
    }
  };

  const mainPage = (ctx) => {
    //로고 그리기
    let mainlogo = new Image();
    mainlogo.src = "/assets/games/gamePictures/pictureLogo.png";
    ctx.drawImage(mainlogo, 0, 0, canvasWidth, canvasHeight);

    //게임 설명
    let subtitle = new Image();
    subtitle.src = "/assets/games/gamePictures/pictureDisc.png";
    ctx.drawImage(subtitle, 0, 0, canvasWidth, canvasHeight);

    // 시작 버튼 - 부엌
    let kicthenButton = new Image();
    // 부엌 버튼 그리기
    kicthenButton.src = kicthenButtonSrc;
    ctx.drawImage(
      kicthenButton,
      -150,
      100,
      canvasWidth - 300,
      canvasHeight - 100
    );

    // 시작 버튼 - 화장실
    let bathroomButton = new Image();
    // 화장실 버튼 그리기
    bathroomButton.src = bathroomButtonSrc;
    ctx.drawImage(
      bathroomButton,
      150,
      100,
      canvasWidth - 300,
      canvasHeight - 100
    );

    // 시작 버튼 - 침실
    let bedroomButton = new Image();
    // 침실 버튼 그리기
    bedroomButton.src = bedroomButtonSrc;
    ctx.drawImage(
      bedroomButton,
      450,
      100,
      canvasWidth - 300,
      canvasHeight - 100
    );

    const canvas = canvasRef.current;

    canvas.onmousedown = (e) => {
      console.log(e.offsetX, e.offsetY);
      // 게임 1 - 부엌
      if (
        e.offsetX > 80 &&
        e.offsetX < 310 &&
        e.offsetY > 220 &&
        e.offsetY < 450
      ) {
        setKicthenButtonSrc(
          "/assets/games/gamePictures/kicthenClickedButton.png"
        );
      }

      // 게임 2 - 화장실
      if (
        e.offsetX > 380 &&
        e.offsetX < 610 &&
        e.offsetY > 220 &&
        e.offsetY < 450
      ) {
        setBathroomButtonSrc(
          "/assets/games/gamePictures/bathroomClickedButton.png"
        );
      }

      // 게임 3 - 침실
      if (
        e.offsetX > 680 &&
        e.offsetX < 910 &&
        e.offsetY > 220 &&
        e.offsetY < 450
      ) {
        setBedroomButtonSrc(
          "/assets/games/gamePictures/bedroomClickedButton.png"
        );
      }
    };

    canvas.onmouseup = (e) => {
      // 게임 1 - 부엌
      if (
        kicthenButtonSrc ==
        "/assets/games/gamePictures/kicthenClickedButton.png"
      ) {
        setKicthenButtonSrc("/assets/games/gamePictures/kicthenButton.png");
        setnowPage("kicthen");
      }

      //   게임 2 - 화장실
      if (
        bathroomButtonSrc ==
        "/assets/games/gamePictures/bathroomClickedButton.png"
      ) {
        setBathroomButtonSrc("/assets/games/gamePictures/bathroomButton.png");
        setnowPage("bathroom");
      }

      //   게임 3 - 침실
      if (
        bedroomButtonSrc ==
        "/assets/games/gamePictures/bedroomClickedButton.png"
      ) {
        setBedroomButtonSrc("/assets/games/gamePictures/bedroomButton.png");
        setnowPage("bedroom");
      }
    };
  };

  // 부엌 페이지
  const kicthenPage = (ctx) => {
    // 메인 이미지 - 부엌
    let kicthen = new Image();
    kicthen.src = "/assets/games/gamePictures/kicthen.png";
    ctx.drawImage(kicthen, 0, 0, canvasWidth, canvasHeight);

    const canvas = canvasRef.current;
    canvas.onmousedown = (e) => {
      console.log(e.offsetX, e.offsetY);
      if (
        e.offsetX > 355 &&
        e.offsetX < 590 &&
        e.offsetY > 240 &&
        e.offsetY < 430 &&
        !kicthen_ans_1
      ) {
        swal({
          title: "정답입니다!",
          text: "물을 계속 틀어놓지 않아요",
          icon: "success",
          button: "계속",
        }).then(() => {
          setPassCount(passCount + 1);
          setKicthen_ans_1("/assets/games/gamePictures/answerCircle.png");
        });
      } else if (
        e.offsetX > 15 &&
        e.offsetX < 260 &&
        e.offsetY > 310 &&
        e.offsetY < 460 &&
        !kicthen_ans_2
      ) {
        swal({
          title: "정답입니다!",
          text: "음식은 먹을만큼만 적당히!",
          icon: "success",
          button: "계속",
        }).then(() => {
          setPassCount(passCount + 1);
          setKicthen_ans_2("/assets/games/gamePictures/answerCircle.png");
        });
      } else {
        setLife(life - 1);
      }
    };

    // 정답 그리기
    let answer_1 = new Image();
    answer_1.src = kicthen_ans_1;
    ctx.drawImage(answer_1, 0, 0, canvasWidth, canvasHeight);

    let answer_2 = new Image();
    answer_2.src = kicthen_ans_2;
    ctx.drawImage(answer_2, -350, 50, canvasWidth, canvasHeight);

    // 남은 정답 수 그리기
    let answerCnt = new Image();
    answerCnt.src = answerCount;
    ctx.drawImage(answerCnt, 0, 0, canvasWidth, canvasHeight);

    // 라이프 그리기
    let lifeImage = new Image();
    lifeImage.src = `${lifeCount}`;
    ctx.drawImage(lifeImage, 0, 0, canvasWidth, canvasHeight);
  };

  // 화장실 페이지
  const bathroomPage = (ctx) => {
    // 메인 이미지 - 화장실
    let bathroom = new Image();
    bathroom.src = "/assets/games/gamePictures/bathroom.png";
    ctx.drawImage(bathroom, 0, 0, canvasWidth, canvasHeight);

    const canvas = canvasRef.current;
    canvas.onmousedown = (e) => {
      console.log(e.offsetX, e.offsetY);
      if (
        e.offsetX > 355 &&
        e.offsetX < 590 &&
        e.offsetY > 240 &&
        e.offsetY < 430 &&
        !bathroom_ans_1
      ) {
        alert("정답입니다!!");
        setPassCount(passCount + 1);
        setBathroom_ans_1("/assets/games/gamePictures/answerCircle.png");
      } else if (
        e.offsetX > 15 &&
        e.offsetX < 260 &&
        e.offsetY > 310 &&
        e.offsetY < 460 &&
        !bathroom_ans_2
      ) {
        alert("정답입니다!!");
        setPassCount(passCount + 1);
        setBathroom_ans_2("/assets/games/gamePictures/answerCircle.png");
      } else {
        setLife(life - 1);
      }
    };

    // 정답 그리기
    let answer_1 = new Image();
    answer_1.src = bathroom_ans_1;
    ctx.drawImage(answer_1, 0, 0, canvasWidth, canvasHeight);

    let answer_2 = new Image();
    answer_2.src = bathroom_ans_2;
    ctx.drawImage(answer_2, -350, 50, canvasWidth, canvasHeight);

    // 남은 정답 수 그리기
    let answerCnt = new Image();
    answerCnt.src = answerCount;
    ctx.drawImage(answerCnt, 0, 0, canvasWidth, canvasHeight);

    // 라이프 그리기
    let lifeImage = new Image();
    lifeImage.src = `${lifeCount}`;
    ctx.drawImage(lifeImage, 0, 0, canvasWidth, canvasHeight);
  };

  // 침실 페이지
  const bedroomPage = (ctx) => {
    // 메인 이미지 - 침실
    let bedroom = new Image();
    bedroom.src = "/assets/games/gamePictures/bedroom.png";
    ctx.drawImage(bedroom, 0, 0, canvasWidth, canvasHeight);

    const canvas = canvasRef.current;
    canvas.onmousedown = (e) => {
      console.log(e.offsetX, e.offsetY);
      if (
        e.offsetX > 355 &&
        e.offsetX < 590 &&
        e.offsetY > 240 &&
        e.offsetY < 430 &&
        !bedroom_ans_1
      ) {
        alert("정답입니다!!");
        setPassCount(passCount + 1);
        setBedroom_ans_1("/assets/games/gamePictures/answerCircle.png");
      } else if (
        e.offsetX > 15 &&
        e.offsetX < 260 &&
        e.offsetY > 310 &&
        e.offsetY < 460 &&
        !bedroom_ans_2
      ) {
        alert("정답입니다!!");
        setPassCount(passCount + 1);
        setBedroom_ans_2("/assets/games/gamePictures/answerCircle.png");
      } else {
        setLife(life - 1);
      }
    };

    // 정답 그리기
    let answer_1 = new Image();
    answer_1.src = bedroom_ans_1;
    ctx.drawImage(answer_1, 0, 0, canvasWidth, canvasHeight);

    let answer_2 = new Image();
    answer_2.src = bedroom_ans_2;
    ctx.drawImage(answer_2, -350, 50, canvasWidth, canvasHeight);

    // 남은 정답 수 그리기
    let answerCnt = new Image();
    answerCnt.src = answerCount;
    ctx.drawImage(answerCnt, 0, 0, canvasWidth, canvasHeight);

    // 라이프 그리기
    let lifeImage = new Image();
    lifeImage.src = `${lifeCount}`;
    ctx.drawImage(lifeImage, 0, 0, canvasWidth, canvasHeight);
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

  // 성공
  useEffect(() => {
    if (passCount == 2) {
      setPassCount(0);

      setKicthen_ans_1("");
      setKicthen_ans_2("");

      setBathroom_ans_1("");
      setBathroom_ans_2("");

      setBedroom_ans_1("");
      setBedroom_ans_2("");

      setAnswerCount("/assets/games/gamePictures/answerCount_2.png");
      setLifeCount("/assets/games/gamePictures/pictureHeart_full.png");
      setnowPage("success");
    } else if (passCount == 1) {
      setAnswerCount("/assets/games/gamePictures/answerCount_1.png");
    }
  }, [passCount]);

  // 실패
  useEffect(() => {
    if (life == 0) {
      setPassCount(0);
      setKicthen_ans_1("");
      setKicthen_ans_2("");

      setBathroom_ans_1("");
      setBathroom_ans_2("");

      setBedroom_ans_1("");
      setBedroom_ans_2("");

      setAnswerCount("/assets/games/gamePictures/answerCount_2.png");
      setLifeCount("/assets/games/gamePictures/pictureHeart_full.png");
      setnowPage("fail");
    } else if (life == 2 || life == 1) {
      setLifeCount(`/assets/games/gamePictures/pictureHeart_${life}.png`);
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
        ref={canvasRef}
        className={classes.mygame}
        width={936}
        height={560}
      />

      {!life && <PictureFailModal setnowPage={setnowPage} setLife={setLife} />}

      {nowPage == "success" && (
        <PictureSuccessModal setnowPage={setnowPage} setLife={setLife} />
      )}
    </div>
  );
};

export default React.memo(GamePicture);
