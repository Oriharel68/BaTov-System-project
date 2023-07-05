import React, { useState } from 'react'
import NavBar from '../nav/NavBar'
import Companysubtitle from '../nav/Companysubtitle'


function CompantMainPage() {
    const [showSecondDiv, setShowSecondDiv] = useState(false);
    
    const handleMouseEnter = () => {
      setShowSecondDiv(true);
    };
    
    const handleMouseLeave = () => {
      setShowSecondDiv(false);
    };
    
  return (
    <div>
        <div className="companyMainpage-nav-container"   onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <NavBar/>
            {showSecondDiv &&  <div className="subTitle-company" >
            <Companysubtitle/>
            </div>}

           
        </div>
        <div className="mainCompanyPage-container">

        </div>

    </div>
  )
}

export default CompantMainPage