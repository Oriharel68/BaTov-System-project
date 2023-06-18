import React from "react";
import ClientNavBar from "../nav/ClientNavBar";
import app from "../FireBase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegestrationPage() {
  const navigate = useNavigate();
  
  function handleOnSubmit(event) {
    event.preventDefault();
    const auth = getAuth();
    const email = event.target[0].value;
    const password = event.target[1].value;
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCred)=>{
      //what happen after a user register
    })
    .catch((error)=>{
      navigate('/*')//add an error 
    })
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

          <div className="mainClient-page">
            <form action="" onSubmit={(event) => handleOnSubmit(event)}>
              <input type="email" name="" id="email" placeholder="Email" />
              <input type="password" placeholder="Password" id="passowrd" />
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
