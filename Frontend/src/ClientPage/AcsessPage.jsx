import React, { useState } from "react";
import ClientNavBar from "../nav/ClientNavBar";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {  Spinner } from "reactstrap";



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
  
        // console.log(`${errorCode}:${errorMessage}`);
        const errorbox = document.querySelector("#errorbox");
        console.log(errorCode);
        let Message = "" + errorCode.replace('auth/','')
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
          
          {Loggedin ? (

        <div class="custom-loader"></div>
     
       
          ) : (
            <h1 id="errorbox"></h1>
          )}
          <div className="mainClient-page">
            <div className="signin-container">
              <h2>Sign In</h2>
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
                <div className="form-group forgot-password">
                  <a href="#">Forgot password?</a>
                </div>
                <button className="signin-button" type="submit">
                  Sign In
                </button>
              </form>
            </div>

            {/* <form action="" onSubmit={(event) => handleOnSubmit(event)}>
              <input type="email" name="" id="email" placeholder="Email" />
              <input type="password" placeholder="Password" id="password" />
              <div className="buttonContainer-client">
                <button>Login</button>
              </div>
            </form>  */}


            {/* <div className="buttonContainer-client">
          <form 
          onSubmit={handleSubmit(onSubmit)}>
        <input
          name="message"
          autoComplete="off"

          // check how register is being used.
          {...register("message", {
            required: "Required",
          })}
        />
        {errors.message && errors.message.message}
        <input type="submit" />
      </form>
              
       
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcsessPage;
