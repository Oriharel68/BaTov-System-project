import React, { useState } from "react";
import ClientNavBar from "../nav/ClientNavBar";
import app from "../FireBase/auth";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import  axios from 'axios';
import { useNavigate } from "react-router-dom";


function RegestrationPage() {
  const auth = getAuth();
  const navigate = useNavigate();
   function handleOnSubmit(event) {
try{
    event.preventDefault();
    const Email = event.target[0].value;
    const password = event.target[1].value;
    const FirstName = event.target[2].value;
    const LastName = event.target[3].value;
    const PhoneNumber = event.target[4].value;
    if (!FirstName || !LastName || !Email || !PhoneNumber || !password){
      alert('missing info');
      return;
    }
    createUserWithEmailAndPassword(auth,Email,password)
    .then( async (userCred)=>{
      //what happen after a user register
     const {data}  = await axios.post('http://localhost:4000/register',{FirstName,LastName,Email,PhoneNumber});
     updateProfile(userCred.user,{
      displayName:`${FirstName} ${LastName}`,
     })
     console.log(data);
    }).catch((err)=>{
      console.log(err);
    })
    navigate('/client/access');
  }catch(error){
    console.log(error);
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
            <form action="" onSubmit={(event) => handleOnSubmit(event)}>
              <input type="email" name="" id="email" placeholder="Email" />
              <input type="password" placeholder="Password" id="passowrd" />
              <input type="text" id="FirstName" placeholder="First Name" />
              <input type="text" id="LastName" placeholder="Last Name" />
              <input type="text" id="PhoneNumber" placeholder="PhoneNumber" />
              <div className="buttonContainer-client">
                <button>Register</button>
              </div>
            </form>
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

export default RegestrationPage;
