import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRecoilState } from "recoil";
import { diaryListState } from "./../store/atoms";

import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const navigate = useNavigate();

  const [diaryList, setDiaryList] = useRecoilState(diaryListState);

  const { id } = useParams();
  const [originData, setOriginData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기 수정`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        alert("존재하지 않는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
