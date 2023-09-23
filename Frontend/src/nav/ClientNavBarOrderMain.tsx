import { useState, memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Url from '../ApiClient/Url';
import { signOut } from 'firebase/auth';
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
    window.history.back();      // fution that Navigate to the previous route/page that we was before 
  }
  const handleMouseEnter = () => {                           //operating the modal close/open 
    if (showSecondDiv == false) {
      setShowSecondDiv(true);
      return;
    } else {
      setShowSecondDiv(false);
      return;
    }
  };
  async function handleOnSubmit(event: any) {               // handle a logout request 
    event.preventDefault();
    await signOut(auth)                                   //function from the firebase 
      .then(async () => {
        // Sign-out successful.
        const response = await AxiosClient.post(`${Url}/logout`);
        if (response.status === 200) {
          window.sessionStorage.removeItem('accessToken');
          toast.success('התנתקות הצליחה');
          setTimeout(() => {                                    //seting the time before the client exit the system
            navigate('/client/access');
          }, 1500);
        } else {
          throw new Error('אין הרשאה');
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <>
      <ToastContainer                                          //react-tostify 
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
          <button id="information" onClick={handleMouseEnter}>
            <GrCircleInformation />
          </button>

          <button onClick={(event) => handleOnSubmit(event)} id="exit-client">
            <IoExit />
          </button>
        </div>
      </div>
      {showSecondDiv && (
        <Modal                                                                        //modal option 
          onRequestClose={() => {
            setShowSecondDiv((prev) => !prev);
          }}
          style={NavStyle as any}
          isOpen={showSecondDiv}>
          <div className="close-information-client-container">
            <span onClick={() => setShowSecondDiv((prev) => !prev)}>&times;</span>           //x - CLOSE modal icon 
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
                לאחר ההזמנה, גשו ללוח הבקרה האישי שלכם כדי לראות ולנהל את ההזמנות שלכם.
              </li>
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
}

export default memo(ClientNavBarOrderMain);
