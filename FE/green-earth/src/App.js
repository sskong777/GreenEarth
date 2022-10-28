import "./style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ChildMainPage from "./pages/ChildMainPage"
import GamePage from "./pages/GamePage"
import ParentMainPage from "./pages/ParentMainPage"

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="child" element={<ChildMainPage />}/>
          <Route path="game" element={<GamePage />}/>
          <Route path="parent" element={<ParentMainPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
