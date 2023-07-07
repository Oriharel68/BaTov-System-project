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
import CompanyAccsess from "../CompanyPage/CompanyAccsess";
import CompantMainPage from "../CompanyPage/CompantMainPage";
import AddworkerCompany from "../CompanyPage/subTitlelsComponents/AddworkerCompany";
import CompnatCalenderDetaills from "../CompanyPage/subTitlelsComponents/CompnatCalenderDetaills";
import StatisticCompany from "../CompanyPage/subTitlelsComponents/StatisticCompany";
import OrderOfTheCompany from "../CompanyPage/subTitlelsComponents/OrderOfTheCompany";
import DatePickerComponent from "../ClientPage/DatePickerComponent";
import UserRegistrationComplete from "../ClientPage/ClientMessages/UserRegistrationComplete";
import OrderCompelteMessage from "../ClientPage/ClientMessages/OrderCompelteMessage";
import ExistingOrder from "../ClientPage/ExistingOrder";


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
          <Route path="/order/ExistingOrder" element={<ExistingOrder/>} />
          {/* CHECK CALENDER */}
          <Route path="/order/calender" element={<DatePickerComponent/>} />
          
          {/*company side  */}
          <Route path="/company/access" element={<CompanyAccsess/>} />
          <Route path="/company/mainpage" element={<CompantMainPage/>} />
              {/* subtitels */}
              <Route path="/company/AddWorker" element={<AddworkerCompany/>} />
              <Route path="/company/Calener" element={<CompnatCalenderDetaills/>} />
              <Route path="/company/Statistics" element={<StatisticCompany/>} />
              <Route path="/company/Orders" element={<OrderOfTheCompany/>} />
              {/* messages */}
              <Route path="/client/registrationCompalete" element={<UserRegistrationComplete/>} />
              <Route path="/order/orderCompelte" element={<OrderCompelteMessage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterServer;
