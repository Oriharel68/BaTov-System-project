import React, { useState } from "react";
import NavBar from "../nav/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AiOutlineMail } from 'react-icons/ai';

import axios from "axios";

function CompanyAccsess() {
 
  const [showSecondDiv, setShowSecondDiv] = useState(false);
        
  const handleMouseEnter = () => {
    setShowSecondDiv(true);
  };
  
  const handleMouseLeave = () => {
    setShowSecondDiv(false);
  };

  const [Loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  async function handeleSingIn(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("Email");
    const password = formData.get("password");
    console.log(email);
    console.log(password);
    const { data } = await axios.post("http://localhost:4000/companyCheck",{
      email
    });

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setLoggedin(true);

        setTimeout(() => {
          navigate("/company/mainpage");
        }, 3000);
     
      })
      .catch((error) => {
        let errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // console.log(`${errorCode}:${errorMessage}`);
        const errorbox = document.querySelector("#errorbox");
        console.log(errorCode);
        let Message = "" + errorCode.replace("auth/", "");
        Message = Message.replace(":", "d");
        errorbox.innerText = `${Message}:`;
      });
  }

  return (
    <div>
      <div className="CompanyNav-container">
        <NavBar />
      </div>

      {/*   {Loggedin ? (

<div class="custom-loader"></div>


  ) : (
    <h4 id="errorbox"></h4>
  )}
                <div className="form-group forgot-password" style={{marginTop:'2em'}}>
                 
                <Link to={'/client/forgetPassword'}>  <a href="#">Forgot password?</a>  </Link>  
                </div>
                <button className="signin-button" type="submit">
                  Sign In
                </button> 
                
                
                
                
                 <form action=""  onSubmit={(e) => handeleSingIn(e)}>
         </form>
                */}

      <div className="CompanyMain-access-container">
      <form action=""  onSubmit={(e) => handeleSingIn(e)}>

        <div className="topAccess-container">
          {/* <input type="text" placeholder='שם משתמש' /> */}
          <label for="inp" class="inp">
            <input
              type="email"
              name="Email"
              id="inp"
              placeholder="שם משתמש"
              pattern=".{6,}"
              required
            />
            <svg
              width="280px"
              height="18px"
              viewBox="0 0 280 18"
              class="border"
            >
              <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
            </svg>

            <svg width="14px" height="12px" viewBox="0 0 14 12" class="check">
              <path d="M1 7 5.5 11 L13 1"></path>
            </svg>
          </label>
        </div>
        <div className="bootomAccess-container">
          {/* <input type="text" placeholder='סיסמא' /> */}
          <label for="inp" class="inp">
            <input
              type="password"
              name="password"
              id="inp"
              placeholder="סיסמא"
              pattern=".{6,}"
              required
            />
            <svg
              width="280px"
              height="18px"
              viewBox="0 0 280 18"
              class="border"
            >
              <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
            </svg>
            <svg width="14px" height="12px" viewBox="0 0 14 12" class="check">
              <path d="M1 7 5.5 11 L13 1"></path>
            </svg>

          
          </label>
    
        </div>
        {Loggedin ? (

<div class="custom-loader"></div>


  ) : (
    <h4 id="errorbox"></h4>
  )}
                <div className="form-group forgot-password" style={{marginTop:'2em'}}
                   onClick={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                   >
                 
                  <a href="#">Forgot password?</a>   
                  
                {showSecondDiv &&  <div className="companyAccess-Message" >
              <h3>Please contact the admin administrator </h3>
              <a  href="mailto:admin@gmail.com">
              <li  >  mail<AiOutlineMail/> </li>
              </a> 
              </div>
             } 
                </div>
                <button className="signin-button" type="submit">
                  Sign In
                </button> 
                

        </form>

      </div>
    </div>
  );
}

export default CompanyAccsess;
