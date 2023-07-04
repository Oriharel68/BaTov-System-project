import React from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import ErorPage from "../ErorPage/ErorPage";
import Main from "../Main page/Main";
import NavBar from "../nav/NavBar";
import Clientmainpage from "../ClientPage/Clientmainpage";
import RegestrationPage from "../ClientPage/RegestrationPage";
import AcsessPage from "../ClientPage/AcsessPage";
import OrderMain from "../ClientPage/OrderMain";
import NewOrder from "../ClientPage/NewOrder";
import Calender from "../ClientPage/Calender";


function RouterServer() {
  return (
    <div>
      <Router>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/*" element={<ErorPage />} />
          <Route path="/" element={<Main />} />
          <Route path="/client/main" element={<Clientmainpage/>} />
          <Route path="/client/registration" element={<RegestrationPage/>} />
          <Route path="/client/access" element={<AcsessPage/>} />
          {/* orders */}
          <Route path="/order/main" element={<OrderMain/>} />
          <Route path="/order/newOrder" element={<NewOrder/>} />
          <Route path="/order/calender" element={<Calender/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default RouterServer;
