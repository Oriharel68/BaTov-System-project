import React, { useState } from "react";
import ClientNavBar from "../nav/ClientNavBar";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";



function AcsessPage() {
  const [Loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate(); 
  const auth = getAuth();


  function handleOnSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target)

    const email = formData.get('Email')
    const password = formData.get('password');



    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setLoggedin(true);

        setTimeout(() => {
          navigate('/order/main')
        }, 3000);
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        const errorMessage = error.message;
                                           console.log(errorMessage);                  
        // console.log(`${errorCode}:${errorMessage}`);
        const errorbox = document.querySelector("#errorbox");
        console.log(errorCode);
        let Message = "" + errorCode.replace('auth/','');
        Message = Message.replace(':', 'd');
        errorbox.innerText = `${Message}:`;
      });
  }

  return (
    <div>
      <div className="page-wraper">
        {/* bdika vdika */}
        {/* <ClientNavBar/> */}
        <div className="mainClient-page-wraper">
          <ClientNavBar />
          
          
          <div className="mainClient-page">

          <div className="registerWraper-conatiner">
          <div className="registerClient-page-title">
          <h2>Sign In</h2>
           </div>
              <form onSubmit={(event)=>handleOnSubmit(event)}>
                <div className="form-group">
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    placeholder="Email"
                    required
                  />
 

                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required
                  />
                </div>
                {Loggedin ? (

<div class="custom-loader"></div>


  ) : (
    <h4 id="errorbox"></h4>
  )}
                <div className="form-group forgot-password" style={{marginTop:'2em'}}>
                 
                <Link to={'/*'}>  <a href="#">Forgot password?</a>  </Link>  
                </div>
                <button className="signin-button" type="submit">
                  Sign In
                </button>
              </form>
              </div>
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcsessPage;
