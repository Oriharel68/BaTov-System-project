import React, { useState } from 'react'
import CompanyNavBar from './CompanyNavBar'
import Companysubtitle from './Companysubtitle'
import { RxExit } from 'react-icons/rx';
import { getAuth,  } from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';

function CombaibnedNavCompany() {
    
        // const [showSecondDiv, setShowSecondDiv] = useState(false);
        
        // const handleMouseEnter = () => {
        //   setShowSecondDiv(true);
        // };
        
        // const handleMouseLeave = () => {
        //   setShowSecondDiv(false);
        // };
        // cheking the user if in/ out


  // useEffect(() => {
  //   if (userAuth.currentUser == null) {
  //     navigate("/");
  //     alert("useer is not assianged");
  //   }
  // }, []);
const navigate = useNavigate();
  const userAuth = getAuth();
function singOut(){
  if (userAuth.currentUser !== null)   {
        
    //     alert("useer is not assianged");
    if (window.confirm("האם את/ה בטוח?")) {
      window.open( navigate("/company/access"), "Thanks for Visiting!",userAuth.currentUser = null);
    }
  }
  return;
    }
console.log(userAuth.currentUser);
console.log(userAuth);
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
          <button onClick={()=>singOut()}><RxExit/></button>
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