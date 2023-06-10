import React from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import ErorPage from "../ErorPage/ErorPage";
import Main from "../Main page/Main";
import NavBar from "../nav/NavBar";


function RouterServer() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/*" element={<ErorPage />} />

          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterServer;
