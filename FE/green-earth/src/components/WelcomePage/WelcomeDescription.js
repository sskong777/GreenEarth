import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WelcomeDescription = () => {
  const navigate = useNavigate();

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const script = [
    {
      image: "assets/images/WelcomeDescription1.jpg",
      description: "설명1",
    },
    {
      image: "assets/images/WelcomeDescription2.jpg",
      description: "설명2",
    },
    {
      image: "assets/images/WelcomeDescription3.jpg",
      description: "설명3",
    },
  ];

  const [page, setPage] = useState(0);

  let btn = page < 2 ? "다음으로" : "지구 살리러 가기";

  const onClick = () => {
    if (page < 2) {
      setPage(page + 1);
    } else {
      navigate("/login");
    }
  };

  let nowScript = script[page];
  useEffect(() => {
    nowScript = script[page];
  }, [page]);

  return (
    <div>
      <img src={env.PUBLIC_URL + nowScript.image} />
      <h1>{nowScript.description}</h1>
      <button onClick={onClick}>{btn}</button>
    </div>
  );
};
export default WelcomeDescription;
