import React, { useState } from "react";
import ClientNavBar from "../nav/ClientNavBar";
import app from "../FireBase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
import ServerStatus from "../FireBase/ServerStatus";
import { Link, useNavigate } from "react-router-dom";

function RegestrationPage() {
  const auth = getAuth();
  const navigate = useNavigate();
  

  async function handleOnSubmit(event) {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const Email = formData.get("Email");
      const password = formData.get("Password");
      const FirstName = formData.get("FirstName");
      const LastName = formData.get("LastName");
      const PhoneNumber = formData.get("PhoneNumber");
      const rPassword = formData.get("RepeatYourPassword")
      if (!FirstName || !LastName || !Email || !PhoneNumber || !password || !rPassword) {
        alert("missing info");
        return;
      }
      if(rPassword !== password){
      alert('password not the same');
      return;
      } 
      if (!(await ServerStatus())) {
        alert("Server down");
        return;
      }

      createUserWithEmailAndPassword(auth, Email, password)
        .then(async (userCred) => {
          //what happen after a user register
          const { data } = await axios.post("http://localhost:4000/register", {
            FirstName,
            LastName,
            Email,
            PhoneNumber,
          });

          if (!data.ok) {
            alert(data.error);
            userCred.user.delete();
            return;
          }

          updateProfile(userCred.user, {
            displayName: `${FirstName} ${LastName}`,
          })
            .then(() => {
              // alert("user was created Succsesfuly");
              navigate("/client/registrationCompalete")
              setTimeout(() => {
                navigate("/client/access");
              }, 3000);
            })
            .catch((err) => {
              alert(err);
            });
        })
        .catch((err) => {
          alert(err);
        });
    } catch (error) {
      alert(error);
    }
  }
  // check how errors are being exported
  //   const { register, handleSubmit, formState: { errors }} = useForm();
  // console.log(app);
  //   const onSubmit = (values) => {...};
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
                <h2>Register</h2>
              </div>
              <form action="" onSubmit={(event) => handleOnSubmit(event)}>
            

                <label for="inp" class="inp1">
                  <input 
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="Email"
                    required
                    
                   />

                  <input
                    type="password"
                    name="Password"
                    placeholder="Enter New Password"
                    id="passowrd"
                    required
                    pattern=".{6,}"
                  />
  
                  <input
                    type="password"
                    name="RepeatYourPassword"
                    placeholder="Repeat Your Password"
                    id="passowrd"
                    required
                    pattern=".{6,}"
                  />
  
                  <input
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    name="LastName"
                    id="LastName"
                    placeholder="Last Name"
                    required
                  />
                  <input
                    type="tel"
                    name="PhoneNumber"
                    id="PhoneNumber"
                    placeholder="PhoneNumber"
                    required
                  />

                  {/* <svg width="280px" height="18px" viewBox="0 0 280 18" class="border">
    <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
  </svg>
  <svg width="14px" height="12px" viewBox="0 0 14 12" class="check">
    <path d="M1 7 5.5 11 L13 1"></path>
  </svg> */}
                </label>
                {/* <div className="buttonContainer-client"> */}
               {/* <Link to={'/client/registrationCompalete'}>   */}
               <button>Sumbit</button> 
               {/* </Link>  */}
                {/* </div> */}
              </form>
            </div>

        
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegestrationPage;
