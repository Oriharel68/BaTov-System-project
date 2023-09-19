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
  const [showSecondDiv, setShowSecondDiv] = useState<boolean>(false);
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setShowSecondDiv(!showSecondDiv);//closing and opening the modal
  };
  
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
    const password: any = formData.get('password');//getting the data from the inputs
    try {
      const response = await AxiosClient.post(`${Url}/companyCheck`, {
        email,
      });//checking if the email is authorized to access the administrative panel
      if (response?.status !== 200) return alert('שם משתמש או סיסמא אינם נכונים');

      await signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          setLoggedin(true);
          const uid = userCredential.user.uid;
          const response = await AxiosClient.post(`${Url}/login`, { uid });
          if (response.status === 200 && response.data.token) {
            window.sessionStorage.setItem('accessToken', response?.data?.token);//token access
            navigate('/company/mainpage');
          } else {
            setLoggedin(false);//removing the loader
            alert('הכניסה נכשלה');
          }
        })

        .catch((error) => {
          setLoggedin(false);
          let errorCode = error.code;
          const errorbox: HTMLElement = document.querySelector('#errorbox') as HTMLElement;
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
