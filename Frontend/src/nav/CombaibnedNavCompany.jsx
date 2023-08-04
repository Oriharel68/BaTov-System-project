import React, { useCallback, useState } from 'react'
import CompanyNavBar from './CompanyNavBar'
import Companysubtitle from './Companysubtitle'
import { RxExit } from 'react-icons/rx';
import { getAuth,signOut  } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';

function CombaibnedNavCompany() {
    
  
const navigate = useNavigate();
  const userAuth = getAuth();
  const SignOut = useCallback(
    () => {
      signOut(userAuth).then(()=>{
        
        
        navigate('/company/access');
      }).catch((error)=>{
        console.log(error);
      })
    },
    [userAuth]
  )
  
  return (

    <div
    //  className="companyMainpage-nav-container" 
    className="companyMainpage-nav-container"
  //  onMouseEnter={handleMouseEnter}
  //   onMouseLeave={handleMouseLeave}
    >
      <div className="nav-logo-container">

        <CompanyNavBar/>
      </div>
  

            <div className="subTitle-company" >
        <Companysubtitle/>
        </div>
        <div className="exit-company">
          <button onClick={SignOut}><RxExit/></button>
        </div>

        {/* {showSecondDiv && 
         <div className="subTitle-company" >
        <Companysubtitle/>
        </div>
         } */}

       
    </div>
  
  
   
  )
}

export default CombaibnedNavCompany