import React, { useState } from 'react'
import NavBar from '../nav/NavBar'
import Companysubtitle from '../nav/Companysubtitle'
import CompanyNavBar from '../nav/CompanyNavBar';
import CombaibnedNavCompany from '../nav/CombaibnedNavCompany';


function CompantMainPage() {
//     const [showSecondDiv, setShowSecondDiv] = useState(false);
    
//     const handleMouseEnter = () => {
//       setShowSecondDiv(true);
//     };
    
//     const handleMouseLeave = () => {
//       setShowSecondDiv(false);
//     };
    
  return (
    <div>
        {/* <div
        //  className="companyMainpage-nav-container" 
        className="companyMainpage-nav-container"
       onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <CompanyNavBar/>

            {showSecondDiv &&  <div className="subTitle-company" >
            <Companysubtitle/>
            </div>}

           
        </div> */}
        <CombaibnedNavCompany/>
        <div className="mainCompanyPage-container">

        </div>

    </div>
  )
}

export default CompantMainPage