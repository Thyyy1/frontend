import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/Home_Page";
import AboutPage from "./pages/About_Page";
import CommandList from "./pages/Command_AboutPage";
import Team from "./pages/Team_AboutPage";
//import About_Component from "./components/About_Component";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/CommandList" element={<CommandList />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
