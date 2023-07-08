import React, { useState } from 'react'
import CompanyNavBar from './CompanyNavBar'
import Companysubtitle from './Companysubtitle'

function CombaibnedNavCompany() {
    
        const [showSecondDiv, setShowSecondDiv] = useState(false);
        
        const handleMouseEnter = () => {
          setShowSecondDiv(true);
        };
        
        const handleMouseLeave = () => {
          setShowSecondDiv(false);
        };

  return (

    <div
    //  className="companyMainpage-nav-container" 
    className="companyMainpage-nav-container"
   onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
        <CompanyNavBar/>

        {showSecondDiv &&  <div className="subTitle-company" >
        <Companysubtitle/>
        </div>}

       
    </div>
  
  
   
  )
}

export default CombaibnedNavCompany