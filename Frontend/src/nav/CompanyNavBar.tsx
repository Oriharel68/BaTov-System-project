import React from "react";
import { Link } from "react-router-dom";
import Companysubtitle from "./Companysubtitle";
import NavLogo from "../Main page/NavLogo";

function CompanyNavBar() {
  return (
    <>
      <Link to={"/company/mainpage"}>
        <div>
          <NavLogo />
          {/* <div className="subTitle-company" >
        <Companysubtitle/>
        </div>
    */}
        </div>
      </Link>
    </>
  );
}

export default CompanyNavBar;
