import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { CgProfile } from 'react-icons/cg';
import { getAuth, signOut } from "firebase/auth";
import { GrCircleInformation } from 'react-icons/gr';
function ClientNavBarOrderMain() {
  const navigate = useNavigate(); 
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  const handleMouseEnter = () => {
    if(showSecondDiv == false){
      setShowSecondDiv(true)
      return;
    }else{
      setShowSecondDiv(false)
      return;
    }
      };
  function handleOnSubmit(event) {

      
    event.preventDefault();
  
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      alert("Sign-out successful.")
      // setLoggedin(true);
      setTimeout(() => {
        navigate('/client/main')
      }, 1000);
    
      // ...
    }).catch((error) => {
      // An error happened.
      // let errorCode = error.code;
      //       const errorMessage = error.message;
      //                                          console.log(errorMessage);                  
      //       // console.log(`${errorCode}:${errorMessage}`);
      //       const errorbox = document.querySelector("#errorbox");
      //       console.log(errorCode);
      //       let Message = "" + errorCode.replace('auth/','');
      //       Message = Message.replace(':', 'd');
      //       errorbox.innerText = `${Message}:`;
    });


  
  }

  return (
    <div>
      <div className="navBar-Client">
        <Link to={"/order/main"} >
          <h1>logo</h1>
        </Link>
        

        <div className="right-orderClient-container">

           <button id="information" 
            onClick={handleMouseEnter}
            // style={{fontSize:}}
>
           <GrCircleInformation/>

           </button>
           
       
        <form action="" id="LU">
        {/* <Link to={"/client/main"}> */}
       
          {/* <a href="" id="LU"> */}
            {/* <CgProfile id="LOGOUT"/> */}
            <button   onClick={(event)=>handleOnSubmit(event)}> 
             Log Out  
            </button>
             {/* </a> */}
             
        {/* </Link> */}
        </form>
        </div>

      </div>
      {showSecondDiv &&  <div className="client-order-message" >
              <h3>תפריט</h3>
              <p> .לפניכם תפריט של הזמנות ,הזמנה חדשה תיגרום לכן לפתוח הזמנה חדשה ,הזמנה קיימת תוכלו לראות את כל ההזמנות הפעילות , בנוסף לכך תוכלו לראות את כל ההזמנות הישנות
                 </p>
              <h3>הזמנה</h3>
              
              <p>  לפניכם תפריט של הזמנות הנכם מתבקשים לבחור בהזמנה חדשה. <br /> בהזמנה החדשה יש לפניכם תפריט שכולל זימון של תורים, פה תוכלו לבחור לעצמכם את הסוג של השירות שתיצטרכו ואת התאריך שהנכם תירצו אותו אצלכם.</p>
              </div>
             } 
    </div>
  );
}

export default ClientNavBarOrderMain;
