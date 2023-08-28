import React, { useState } from 'react';
import NavBar from '../nav/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../FireBase/auth';
import { AiOutlineMail } from 'react-icons/ai';
import axios from 'axios';
import { PiHandEyeDuotone } from 'react-icons/pi';
import Modal from 'react-modal';
import style from '../ClientPage/ModalStyle/RemoveOrderStyle';
import Url from '../ApiClient/Url';
import AxiosClient from '../ApiClient/AxiosClient';

function CompanyAccsess() {
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  const handleMouseEnter = () => {
    setShowSecondDiv(!showSecondDiv);
  };
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // const handleMouseLeave = () => {
  //   setShowSecondDiv(false);
  // };

  const [Loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();

  async function handeleSingIn(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email: any = formData.get('Email');
    const password: any = formData.get('password');
    try {
      const { data } = await AxiosClient.post(`${Url}/companyCheck`, {
        email,
      });
      if (data.ok === false) throw Error('err');
    } catch (error) {
      alert('invalid user');
      return;
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const uid = userCredential.user.uid;
        const response = await AxiosClient.post(`${Url}/login`, { uid });
        if (response.status === 200) {
          setLoggedin(true);
          setTimeout(() => {
            navigate('/company/mainpage');
          }, 3000);
        } else {
          throw new Error('couldnt login');
        }
      })

      .catch((error) => {
        let errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // console.log(`${errorCode}:${errorMessage}`);
        const errorbox: any = document.querySelector(
          '#errorbox'
        ) as HTMLElement;
        console.log(errorCode);
        let Message = '' + errorCode.replace('auth/', '');
        Message = Message.replace(':', 'd');
        errorbox.innerText = `${Message}:`;
      });
  }

  return (
    <div>
      <div className="CompanyNav-container">
        <NavBar />
      </div>

      <div className="CompanyMain-access-container">
        <form action="" onSubmit={(e) => handeleSingIn(e)}>
          <h3>כניסה למערכת</h3>
          {/* <div className="topAccess-container"> */}
          {/* <input type="text" placeholder='שם משתמש' /> */}
          <label className="inp">שם משתמש</label>
          <input
            type="email"
            name="Email"
            id="inp"
            placeholder="שם משתמש"
            // pattern=".{6,}"
            required
          />
          {/* <svg
              width="280px"
              height="18px"
              viewBox="0 0 280 18"
              class="border"
            >
              <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
            </svg>

            <svg width="14px" height="12px" viewBox="0 0 14 12" class="check">
              <path d="M1 7 5.5 11 L13 1"></path>
            </svg> */}

          {/* </div> */}
          {/* <div className="bootomAccess-container"> */}
          {/* <input type="text" placeholder='סיסמא' /> */}
          <label className="inp"> סיסמא </label>

          <i className="show-password">
            <PiHandEyeDuotone onClick={togglePassword} />
          </i>
          <input
            type={passwordShown ? 'text' : 'password'}
            name="password"
            id="inp"
            placeholder="סיסמא"
            // pattern=".{6,}"
            required
          />

          {Loggedin ? (
            <div className="custom-loader"></div>
          ) : (
            <h4 id="errorbox"></h4>
          )}
          <div
            className="form-group forgot-password"
            onClick={handleMouseEnter}
            //  onMouseLeave={handleMouseLeave}
          >
            <a id="forget" href="#">
              שכחתי סיסמה
            </a>

            {showSecondDiv && (
              <Modal
                isOpen={showSecondDiv}
                onRequestClose={handleMouseEnter}
                style={style as any}
                ariaHideApp={false}
              >
                <div className="companyAccess-Message">
                  <h3 className="T">בבקשה תפנו למערכות התמיכה</h3>
                  <p> שלחו מייל ונענה בהקדם ☏</p>
                  <a href="mailto:admin@gmail.com">
                    {' '}
                    <AiOutlineMail />
                  </a>
                  <h4 onClick={handleMouseEnter}>חזור</h4>
                </div>
              </Modal>
            )}
          </div>
          <button className="signin-button" type="submit">
            כניסה למערכת
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompanyAccsess;
