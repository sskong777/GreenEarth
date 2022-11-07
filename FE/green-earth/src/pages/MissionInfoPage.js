import { useNavigate } from "react-router-dom";


import MissionInfo from "../components/MissionInfo";


import "../style/MissionInfo.css";

const MissionInfoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="MissionInfoPage">
      <MissionInfo></MissionInfo>
    </div>
  );
};

export default MissionInfoPage;
