import React, { useState } from "react";
import NavBar from "../nav/NavBar";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { AiOutlineMail } from "react-icons/ai";
import axios from "axios";

function CompanyAccsess() {
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  const handleMouseEnter = () => {
    if (showSecondDiv == false) {
      setShowSecondDiv(true);
      return;
    } else {
      setShowSecondDiv(false);
      return;
    }
  };

  // const handleMouseLeave = () => {
  //   setShowSecondDiv(false);
  // };

  const [Loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  async function handeleSingIn(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email: any = formData.get("Email");
    const password: any = formData.get("password");
    console.log(email);
    console.log(password);
    const { data } = await axios.post("http://localhost:4000/companyCheck", {
      email,
    });
    if (data.ok == false) {
      alert("user in not a company user ,please contact the administrator ");
      return;
    }

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
        const errorbox: any = document.querySelector(
          "#errorbox"
        ) as HTMLElement;
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

          <input
            type="password"
            name="password"
            id="inp"
            placeholder="סיסמא"
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
              <div className="companyAccess-Message">
                <h3 className="T">
                  בבקשה תפנו למערכות התמיכה
                  <a href="mailto:admin@gmail.com">
                    <AiOutlineMail />
                  </a>
                </h3>
              </div>
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