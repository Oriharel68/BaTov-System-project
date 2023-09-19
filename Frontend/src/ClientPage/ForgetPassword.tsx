import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import ClientNavBar from '../nav/ClientNavBar';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import auth from '../FireBase/auth';
import { toast } from 'react-toastify';

function ForgetPassword() {
  const navigate = useNavigate();
  const [sendEmail, SetSendEmail] = useState<boolean>(false);

  function handleOnSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email: any = formData.get('Email');

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toast.info('בדוק את כתובת הדוא"ל שלך עבור סיסמה חדשה ');
        SetSendEmail(true);
        setTimeout(() => {
          navigate('/client/access');
        }, 2000);
      })
      .catch(() => {
        const errorbox: HTMLElement | null | any = document.querySelector('#errorbox');
        errorbox.innerText = 'המייל שנרשם לא תקין';
      });
  }

  return (
    <>
      <div className="page-wraper">
        <div className="mainClient-page-wraper">
          <ClientNavBar />

          <div className="mainClient-page">
            <div className="registerWraper-conatiner">
              <div className="registerClient-page-title">
                <h2 style={{ direction: 'rtl' }}>שכחת סיסמה?</h2>
              </div>
              <form action="" onSubmit={(event) => handleOnSubmit(event)}>
                <label style={{ direction: 'rtl' }} className="inp1">
                  :הקלד את כתובת המייל לשיחזור
                  <input type="email" name="Email" id="email" placeholder="מייל" required />
                  {sendEmail ? <div className="custom-loader2"></div> : <h4 id="errorbox"></h4>}
                </label>

                <button type="submit">אישור</button>
              </form>
            </div>
          </div>
          <div className="back-toAccess-container">
            <span> לא משנה נזכרתי בסיסמא </span>
            <Link to={'/client/access'}>
              <button>
                {' '}
                <BiArrowBack />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
