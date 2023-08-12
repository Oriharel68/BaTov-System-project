import React, { useState } from "react";
import ClientNavBar from "../nav/ClientNavBar";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import app from "../FireBase/auth";

function AcsessPage() {
  const [Loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  function handleOnSubmit(event:any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email:any = formData.get("Email");
    const password:any = formData.get("password");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setLoggedin(true);
        setTimeout(() => {
          navigate("/order/main");
        }, 3000);
        // ...
      })
      .catch((error) => {
        const errorbox:any = document.querySelector("#errorbox");
        errorbox.innerText = `משתמש או סיסמה אינם נכונים`;
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
                <h2>התחברות</h2>
              </div>
              <form onSubmit={(event) => handleOnSubmit(event)}>
                <div className="form-group">
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    placeholder="אימייל"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="סיסמה"
                    required
                  />
                </div>
                {Loggedin ? (
                  <div className="custom-loader"></div>
                ) : (
                  <h4 id="errorbox"></h4>
                )}
                <div
                  className="form-group forgot-password"
                  style={{ marginTop: "2em" }}
                >
                  <Link to={"/client/forgetPassword"}>
                    {" "}
                    <a href="#">שכחת סיסמה?</a>{" "}
                  </Link>
                </div>
                <button className="signin-button" type="submit">
                  התחבר
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
