import React, { useEffect, useState } from 'react'
import NavBar from '../nav/NavBar'
import Companysubtitle from '../nav/Companysubtitle'
import CompanyNavBar from '../nav/CompanyNavBar';
import CombaibnedNavCompany from '../nav/CombaibnedNavCompany';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";


function CompantMainPage() {
//     const [showSecondDiv, setShowSecondDiv] = useState(false);
    
//     const handleMouseEnter = () => {
//       setShowSecondDiv(true);
//     };
    
//     const handleMouseLeave = () => {
//       setShowSecondDiv(false);
//     };
const navigate = useNavigate()
const auth = getAuth();
const [userAuth,setUserAuth] =useState(auth)

//cheking the user if in/ out
// console.log(userIn);
useEffect(()=>{
  if(userAuth == null ){
    
    navigate('/');
    alert("useer is not assianged");
  }  
},[])

// console.log(userIn.currentUser);
  
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