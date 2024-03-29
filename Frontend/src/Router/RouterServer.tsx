import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ErorPage from '../ErorPage/ErorPage';
import Main from '../Main page/Main';
import Clientmainpage from '../ClientPage/Clientmainpage';
import RegestrationPage from '../ClientPage/RegestrationPage';
import AcsessPage from '../ClientPage/AcsessPage';
import OrderMain from '../ClientPage/OrderMain';
import NewOrder from '../ClientPage/NewOrder';
import CompanyAccsess from '../CompanyPage/CompanyAccsess';
import CompantMainPage from '../CompanyPage/CompanyMainPage';
import AddworkerCompany from '../CompanyPage/subTitlelsComponents/AddworkerCompany';
import CompnatCalenderDetaills from '../CompanyPage/subTitlelsComponents/CompnayCalenderDetaills';
import OrderOfTheCompany from '../CompanyPage/subTitlelsComponents/OrderOfTheCompany';
import UserRegistrationComplete from '../ClientPage/ClientMessages/UserRegistrationComplete';
import OrderCompelteMessage from '../ClientPage/ClientMessages/OrderCompelteMessage';
import ExistingOrder from '../ClientPage/ExistingOrder';
import ForgetPassword from '../ClientPage/ForgetPassword';
import MiddlewareAuth from '../MiddlewareAuth/MiddlewareAuth';
function RouterServer() {
  return (
    <>
      <Router>
        <MiddlewareAuth>
          <Routes>
            <Route path="/*" element={<ErorPage />} />
            <Route path="/" element={<Main />} />
            <Route path="/client/main" element={<Clientmainpage />} />
            <Route path="/client/registration" element={<RegestrationPage />} />
            <Route path="/client/access" element={<AcsessPage />} />
            <Route path="/client/forgetPassword" element={<ForgetPassword />} />
            {/* orders */}
            <Route path="/order/main" element={<OrderMain />} />
            <Route path="/order/newOrder" element={<NewOrder />} />
            <Route path="/order/ExistingOrder" element={<ExistingOrder />} />

            {/* Check */}

            {/*company side  */}
            <Route path="/company/access" element={<CompanyAccsess />} />

            <Route path="/company/mainpage" element={<CompantMainPage />} />
            {/* subtitels */}
            <Route path="/company/AddWorker" element={<AddworkerCompany />} />
            <Route path="/company/Calender" element={<CompnatCalenderDetaills />} />

            <Route path="/company/Orders" element={<OrderOfTheCompany />} />
            {/* messages */}
            <Route path="/client/registrationCompalete" element={<UserRegistrationComplete />} />
            <Route path="/order/orderCompelte" element={<OrderCompelteMessage />} />
          </Routes>
        </MiddlewareAuth>
      </Router>
    </>
  );
}

export default RouterServer;
