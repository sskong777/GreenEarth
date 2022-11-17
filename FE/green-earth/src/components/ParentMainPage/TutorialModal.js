import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "animate.css";

const TutorialModal = ({ setModalOpen }) => {
  const navigate = useNavigate();
  const [imageNumber, setImageNumber] = useState(1);

  const handleClickNextImageButton = () => {
    setImageNumber(imageNumber + 1);
  };

  const handleClickCloseButton = () => {
    setModalOpen(false);
    setImageNumber(1);
  };

  return (
    <>
      <div className="TutorialModal">
        <img
          src={`/assets/tutorial/Tutorial${imageNumber}.png`}
          className="tutorialImage"
        />
        {imageNumber > 14 ? (
          <button
            className="TutorialNextButton"
            onClick={handleClickCloseButton}
          >
            닫기
          </button>
        ) : (
          <button
            className="TutorialNextButton"
            onClick={handleClickNextImageButton}
          >
            다음
          </button>
        )}
      </div>
    </>
  );
};

export default TutorialModal;
