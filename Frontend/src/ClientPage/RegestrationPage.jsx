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
import { useNavigate } from "react-router-dom";

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

      if (!FirstName || !LastName || !Email || !PhoneNumber || !password) {
        alert("missing info");
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
              alert("user was created Succsesfuly");

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
            <form action="" onSubmit={(event) => handleOnSubmit(event)}>
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
                placeholder="Password"
                id="passowrd"
                required
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
                type="text"
                name="PhoneNumber"
                id="PhoneNumber"
                placeholder="PhoneNumber"
                required
              />
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
