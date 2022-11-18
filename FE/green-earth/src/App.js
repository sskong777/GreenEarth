import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ReactHowler from "react-howler";

import WelcomePage from "./pages/WelcomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import EditAccountPage from "./pages/EditAccountPage";
import ChildMainPage from "./pages/ChildMainPage";
import ParentMainPage from "./pages/ParentMainPage";
import ProfilePage from "./pages/ProfilePage";
import GamePage from "./pages/GamePage";
import MissionInfoPage from "./pages/MissionInfoPage";
import ChattingPage from "./pages/ChattingPage";
import OauthRedirectPage from "./pages/OauthRedirectPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/account/:childId" element={<EditAccountPage />} />
          <Route path="/child" element={<ChildMainPage />} />
          <Route path="/parent" element={<ParentMainPage />} />
          <Route path="/profile/:childId" element={<ProfilePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/oauth/redirect" element={<OauthRedirectPage />} />
          <Route path="/mission/:missionId" element={<MissionInfoPage />} />
          <Route path="/chat" element={<ChattingPage />} />
          {/* 404 리다이렉트 */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      {/* 내가Green지구 BGM */}
      {/* <ReactHowler
        src="assets/sounds/toypiano.mp3"
        playing={true}
        loop={true}
        volume={0.5}
      /> */}
    </BrowserRouter>
  );
};

export default App;
