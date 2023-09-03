import React, { useState } from 'react';
import ClientNavBar from '../nav/ClientNavBar';
import app from '../FireBase/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Url from '../ApiClient/Url';
import auth from '../FireBase/auth';
import AxiosClient from '../ApiClient/AxiosClient';

function RegestrationPage() {
  const navigate = useNavigate();

  async function handleOnSubmit(event: any) {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const Email: any = formData.get('Email');
      const password: any = formData.get('Password');
      const FirstName: any = formData.get('FirstName');
      const LastName: any = formData.get('LastName');
      const PhoneNumber: any = formData.get('PhoneNumber');
      const rPassword: any = formData.get('RepeatYourPassword');
      if (
        !FirstName ||
        !LastName ||
        !Email ||
        !PhoneNumber ||
        !password ||
        !rPassword
      ) {
        alert('חסר מידע - השלם מחדש');
        return;
      }
      if (rPassword !== password) {
        alert('הסיסמא לא נכונה');
        return;
      }
      await createUserWithEmailAndPassword(auth, Email, password).then(
        async (userCred) => {
          //what happen after a user register
          const firebaseUid = userCred.user.uid;
          const { data } = await AxiosClient.post(`${Url}/register`, {
            FirstName,
            LastName,
            Email,
            PhoneNumber,
            firebaseUid,
          });

          if (!data.ok) {
            alert('הזן את הפרטים מחדש');
            console.log(data)
            userCred.user.delete();
            return;
          }
          await updateProfile(userCred.user, {
            displayName: `${FirstName} ${LastName}`,
          });

          // alert("user was created Succsesfuly");
          navigate('/client/registrationCompalete');
          setTimeout(() => {
            navigate('/client/access');
          }, 3000);
        }
      );
    } catch (error) {
      console.log(error);
      alert('הזן את הפרטים מחחדש');
      
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
                <h2>הרשמה</h2>
              </div>
              <form action="" onSubmit={(event) => handleOnSubmit(event)}>
                <label className="inp1">
                  <input
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    placeholder="שם פרטי"
                    required
                  />
                  <input
                    type="text"
                    name="LastName"
                    id="LastName"
                    placeholder="שם משפחה "
                    required
                  />
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="כתובת דואר אלקטרוני"
                    required
                  />

                  <input
                    type="password"
                    name="Password"
                    placeholder="סיסמא"
                    id="passowrd"
                    required
                    pattern=".{6,}"
                  />

                  <input
                    type="password"
                    name="RepeatYourPassword"
                    placeholder="אימות סיסמא"
                    id="passowrd"
                    required
                    pattern=".{6,}"
                  />

                  <input
                    type="tel"
                    name="PhoneNumber"
                    id="PhoneNumber"
                    placeholder="טלפון נייד"
                    min={10}
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
                <button>הרשמה</button>
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
