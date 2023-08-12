import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { getAuth, signOut } from "firebase/auth";
import { GrCircleInformation } from "react-icons/gr";
import { IoExit } from "react-icons/io5";
import NavLogo from "../Main page/NavLogo";
import { toast, ToastContainer } from "react-toastify";
import { IoChevronBackCircleSharp } from "react-icons/io5";

function ClientNavBarOrderMain() {
  const navigate = useNavigate();
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const location = useLocation().pathname;
  function goBack() {
    window.history.back(); // Navigate to the previous route
  }
  const handleMouseEnter = () => {
    if (showSecondDiv == false) {
      setShowSecondDiv(true);
      return;
    } else {
      setShowSecondDiv(false);
      return;
    }
  };
  function handleOnSubmit(event) {
    event.preventDefault();

    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("התנתקות הצליחה");
        // setLoggedin(true);
        setTimeout(() => {
          navigate("/client/main");
        }, 1500);

        // ...
      })
      .catch((error) => {
        // An error happened.
        // let errorCode = error.code;
        //       const errorMessage = error.message;
        //                                          console.log(errorMessage);
        //       // console.log(`${errorCode}:${errorMessage}`);
        //       const errorbox = document.querySelector("#errorbox");
        //       console.log(errorCode);
        //       let Message = "" + errorCode.replace('auth/','');
        //       Message = Message.replace(':', 'd');
        //       errorbox.innerText = `${Message}:`;
      });
  }

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        rtl={true}
        theme="light"
      />
      <div className="navBar-Client">
        {location !== "/order/main" ? (
          <div className="go-back">
            <button onClick={() => goBack()}>
              <IoChevronBackCircleSharp />
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="logo-client-icon">
          <Link to={"/order/main"}>
            <NavLogo />
          </Link>
        </div>

        <div className="right-orderClient-container">
          <button
            id="information"
            onClick={handleMouseEnter}
            // style={{fontSize:}}
          >
            <GrCircleInformation />
          </button>

          {/* <Link to={"/client/main"}> */}

          {/* <a href="" id="LU"> */}
          {/* <CgProfile id="LOGOUT"/> */}
          <button onClick={(event) => handleOnSubmit(event)} id="exit-client">
            <IoExit />
          </button>

          {/* </a> */}

          {/* </Link> */}
        </div>
      </div>
      {showSecondDiv && (
        <div className="client-order-message">
          <h3>תפריט</h3>
          <p>
            {" "}
           לפניכם תפריט של הזמנות ,הזמנה חדשה תגרום לפתיחת הזמנה חדשה
            ,בהזמנה קיימת תוכלו לראות את כל ההזמנות הפעילות , בנוסף לכך תוכלו
            לראות את כל ההזמנות הישנות.
          </p>
          <h3>הזמנה</h3>

          <p>
            {" "}
            לפניכם תפריט של הזמנות הנכם מתבקשים לבחור בהזמנה חדשה. <br /> בהזמנה
            החדשה יש לפניכם תפריט שכולל זימון של תורים, פה תוכלו לבחור לעצמכם את
            הסוג של השירות שתצטרכו ואת התאריך שאותו תרצו לשריין.
          </p>
        </div>
      )}
    </div>
  );
}

export default ClientNavBarOrderMain;
