import { useState } from 'react';
import ClientNavBar from '../nav/ClientNavBar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../FireBase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Url from '../ApiClient/Url';
import AxiosClient from '../ApiClient/AxiosClient';
import { FiSun } from 'react-icons/fi';

function AcsessPage() {
  const [Loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  function handleOnSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email: any = formData.get('Email');
    const password: any = formData.get('password');
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        setLoggedin(true);
        const uid = userCredential.user.uid;
        const response = await AxiosClient.post(`${Url}/login`, { uid });
        if (response?.status === 200 && response?.data?.token) {
          window.sessionStorage.setItem('accessToken', response?.data?.token);
          navigate('/order/main');
        } else {
          setLoggedin(false);
          alert('לא הצליח להיכנס');
        }

        // ...
      })
      .catch(() => {
        setLoggedin(false);
        const errorbox: any = document.querySelector('#errorbox');
        errorbox.innerText = `משתמש או סיסמה אינם נכונים`;
      });
  }

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div className="page-wraper">
        <div className="mainClient-page-wraper">
          <ClientNavBar />
          <div className="mainClient-page">
            <div className="registerWraper-conatiner ">
              <div className=" content-client-header TContent">
                <p className="">היכנס ל - </p>
                <p
                  className="marker"
                  style={{
                    textDecoration: 'underLine',
                    transform: 'rotate(-4deg)',
                  }}>
                  BaTov system{' '}
                </p>
              </div>

              <div className="registerClient-page-title">
                <h2>התחברות</h2>
              </div>
              <form onSubmit={(event) => handleOnSubmit(event)}>
                <div className="form-group">
                  <input type="email" id="Email" name="Email" placeholder="אימייל" required />
                </div>
                <div className="form-group">
                  <i className="show-passwordd">
                    <FiSun onClick={togglePassword} />
                  </i>
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="סיסמה"
                    required
                  />
                </div>
                {Loggedin ? <div className="custom-loader"></div> : <></>}
                <h4 id="errorbox"></h4>
                <div className="form-group forgot-password" style={{ marginTop: '2em' }}>
                  <Link to={'/client/forgetPassword'}>
                    {' '}
                    <a href="#" className="hoverMe">
                      שכחת את הסיסמה?
                    </a>{' '}
                  </Link>
                </div>
                <div className="register-btn-Container">
                  אין לך חשבון?{' '}
                  <Link to={'/client/registration'} className="hoverMe">
                    {' '}
                    המשך להרשמה{' '}
                  </Link>{' '}
                </div>

                <button className="signin-button" type="submit">
                  התחבר
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcsessPage;
