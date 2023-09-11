import { useState } from 'react';
import NavBar from '../nav/NavBar';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../FireBase/auth';
import { AiOutlineMail } from 'react-icons/ai';
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

  const [Loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();

  async function handeleSingIn(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email: any = formData.get('Email');
    const password: any = formData.get('password');
    try {
      const response = await AxiosClient.post(`${Url}/companyCheck`, {
        email,
      });
      if (response?.status !== 200) return alert('שם משתמש או סיסמא אינם נכונים');

      await signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          setLoggedin(true);
          const uid = userCredential.user.uid;
          const response = await AxiosClient.post(`${Url}/login`, { uid });
          if (response.status === 200 && response.data.token) {
            window.sessionStorage.setItem('accessToken', response?.data?.token);
            navigate('/company/mainpage');
          } else {
            setLoggedin(false);
            alert('הכניסה נכשלה');
          }
        })

        .catch((error) => {
          setLoggedin(false);
          let errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          const errorbox: HTMLElement = document.querySelector('#errorbox') as HTMLElement;
          console.log(errorCode);
          let Message = '' + errorCode.replace('auth/', '');
          Message = Message.replace(':', 'd');
          errorbox.innerText = `${Message}:`;
        });
    } catch (error) {
      setLoggedin(false);
      return alert('שם משתמש או סיסמא אינם נכונים');
    }
  }

  return (
    <>
      <div className="CompanyNav-container">
        <NavBar />
      </div>

      <div className="CompanyMain-access-container">
        <form action="" onSubmit={(e) => handeleSingIn(e)}>
          <h3>כניסה למערכת</h3>

          <label className="inp">שם משתמש</label>
          <input type="email" name="Email" id="inp" placeholder="שם משתמש" required />

          <label className="inp"> סיסמא </label>

          <i className="show-password">
            <PiHandEyeDuotone onClick={togglePassword} />
          </i>
          <input
            type={passwordShown ? 'text' : 'password'}
            name="password"
            id="inp"
            placeholder="סיסמא"
            required
          />

          {Loggedin ? <div className="custom-loader"></div> : <h4 id="errorbox"></h4>}
          <div className="form-group forgot-password" onClick={handleMouseEnter}>
            <a id="forget" href="#" className="hoverMe">
              שכחתי סיסמה
            </a>

            {showSecondDiv && (
              <Modal
                isOpen={showSecondDiv}
                onRequestClose={handleMouseEnter}
                style={style as any}
                ariaHideApp={false}>
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
    </>
  );
}

export default CompanyAccsess;
