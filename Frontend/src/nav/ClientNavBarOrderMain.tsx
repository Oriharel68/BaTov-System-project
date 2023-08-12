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
  function handleOnSubmit(event: any) {
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
          <ul>
            <li>
              <b className="marker">חקרו קטגוריות:</b>
              עיינו במגוון הקטגוריות השונות למציאת מה שאתם צריכים.
            </li>
            <li>
              <b className="marker">צפו בספקים:</b>
              ראו רשימה של ספקי שירות זמינים בתוך הקטגוריה שבחרתם.
              <li>
                <b className="marker">בדקו זמינות:</b>
                בחרו ספק ובדקו את הזמינות בזמן אמת.
              </li>
            </li>
            <li>
              <b className="marker">הזמינו תור:</b>
              בחרו זמן מתאים ואשרו את ההזמנה שלכם.
            </li>
            <li>
              <b className="marker">ניהול הזמנות: </b>
              לאחר ההזמנה, גשו ללוח הבקרה האישי שלכם כדי לראות ולנהל את ההזמנות
              שלכם.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ClientNavBarOrderMain;