import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Url from '../ApiClient/Url';
import { getAuth, signOut } from 'firebase/auth';
import { GrCircleInformation } from 'react-icons/gr';
import { IoExit } from 'react-icons/io5';
import NavLogo from '../Main page/NavLogo';
import { toast, ToastContainer } from 'react-toastify';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import Modal from 'react-modal';
import NavStyle from './NavModal';
import auth from '../FireBase/auth';
import AxiosClient from '../ApiClient/AxiosClient';

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
  async function handleOnSubmit(event: any) {
    event.preventDefault();

    await signOut(auth)
      .then(async () => {
        // Sign-out successful.
        const response = await AxiosClient.post(`${Url}/logout`);
        if (response.status === 200) {
          window.localStorage.removeItem('accessToken');
          toast.success('התנתקות הצליחה');
          setTimeout(() => {
            navigate('/client/main');
          }, 1500);
        } else {
          throw new Error('no authorized');
        }
      })
      .catch((error) => {
        alert(error);
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
        {location !== '/order/main' ? (
          <div className="go-back">
            <button onClick={() => goBack()}>
              <IoChevronBackCircleSharp />
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="logo-client-icon">
          <Link to={'/order/main'}>
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
        <Modal
          onRequestClose={() => {
            setShowSecondDiv((prev) => !prev);
          }}
          style={NavStyle as any}
          isOpen={showSecondDiv}
        >
          <div className="close-information-client-container">
            <span onClick={() => setShowSecondDiv((prev) => !prev)}>
              &times;
            </span>
          </div>
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
                לאחר ההזמנה, גשו ללוח הבקרה האישי שלכם כדי לראות ולנהל את
                ההזמנות שלכם.
              </li>
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ClientNavBarOrderMain;
