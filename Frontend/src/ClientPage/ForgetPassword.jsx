import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import ClientNavBar from '../nav/ClientNavBar';
import {  useNavigate } from "react-router-dom";

function ForgetPassword() {
    const navigate = useNavigate(); 
    const auth = getAuth();
    const [sendEmail, SetSendEmail] = useState(false);
 
      
      function handleOnSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
    
        const email = formData.get('Email')
        // const password = formData.get('password');
    
    
        sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          alert("check your email adreess for new password")
          SetSendEmail(true);
               
          setTimeout(() => {
            navigate('/client/access');
          }, 2000);
          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          // ..
          const errorbox = document.querySelector("#errorbox");
          console.log(errorCode);
          let Message = "" + errorCode.replace('auth/','');
          Message = Message.replace(':', 'd');
          errorbox.innerText = `${Message}:`;
        });
        
        // signInWithEmailAndPassword(auth, email, password)
        //   .then((userCredential) => {
        //     // Signed in
        //     // const user = userCredential.user;
        //     setLoggedin(true);
    
        //     setTimeout(() => {
        //       navigate('/order/main')
        //     }, 3000);
        //     // ...
        //   })
        //   .catch((error) => {
        //     let errorCode = error.code;
        //     const errorMessage = error.message;
        //                                        console.log(errorMessage);                  
        //     // console.log(`${errorCode}:${errorMessage}`);
        //     const errorbox = document.querySelector("#errorbox");
        //     console.log(errorCode);
        //     let Message = "" + errorCode.replace('auth/','');
        //     Message = Message.replace(':', 'd');
        //     errorbox.innerText = `${Message}:`;
        //   });
      }
    

  return (
     <div>
      {/* nav component */}
      <div className="page-wraper">
        {/* bdika vdika */}
        {/* <ClientNavBar/> */}

        <div className="mainClient-page-wraper">
          <ClientNavBar />
          {}
          <div className="mainClient-page">
            {/* -----xxxx---- */}
            <div className="registerWraper-conatiner">
              <div className="registerClient-page-title">
                <h2 style={{direction:'rtl'}}>שכחת סיסמה?</h2>
              </div>
              <form action="" onSubmit={(event) => handleOnSubmit(event)}>
            

                <label style={{direction:'rtl'}} for="inp" class="inp1">
                :הקלד את כתובת המייל לשיחזור
                  <input 
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="מייל"
                    required
                    
                   />

    
        {sendEmail ? (
            
            <div class="custom-loader2"></div>
            // <div class="message" 
            // style={{
            // position:'absolute',
            // top:'50%',
            // bottom:'50%'
            // }}
            // > check your email adreess for new password
            // </div>
        )
        :
        (
            <h4 id="errorbox"></h4>
        )
        }
                </label>
                {/* <div className="buttonContainer-client"> */}
               {/* <Link to={'/client/registrationCompalete'}>   */}
               <button type="submit">אישור</button> 
               {/* </Link>  */}
                {/* </div> */}
              </form>
            </div>

        
          </div>
       <div className="back-toAccess-container">
        חזור לדף הכניסה <button> </button>  
       </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword