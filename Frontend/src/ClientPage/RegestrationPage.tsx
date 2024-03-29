import ClientNavBar from '../nav/ClientNavBar';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Url from '../ApiClient/Url';
import auth from '../FireBase/auth';
import AxiosClient from '../ApiClient/AxiosClient';

function RegestrationPage() {
  const navigate = useNavigate();

  async function handleOnSubmit(event:  SubmitEvent| null) {
    try {
      event!.preventDefault();
      const formData = new FormData(event!.target as HTMLFormElement );
      const Email: FormDataEntryValue | null = formData.get('Email');
      const password: FormDataEntryValue | null = formData.get('Password');
      const FirstName: FormDataEntryValue | null = formData.get('FirstName');
      const LastName: FormDataEntryValue | null = formData.get('LastName');
      const PhoneNumber: FormDataEntryValue | null = formData.get('PhoneNumber');
      const rPassword: FormDataEntryValue | null = formData.get('RepeatYourPassword'); // all of the data that the user typed
      if (!FirstName || !LastName || !Email || !PhoneNumber || !password || !rPassword) { // not empty
        alert('חסר מידע - השלם מחדש');
        return;
      }
      if (rPassword !== password) {
        alert('הסיסמא לא תואמת');
        return;
      }
      await createUserWithEmailAndPassword(auth, Email as string, password as string).then(async (userCred) => { // creating a firebase user
        //what happen after a user register
        const firebaseUid = userCred.user.uid;
        const response = await AxiosClient.post(`${Url}/register`, {
          FirstName,
          LastName,
          Email,
          PhoneNumber,
          firebaseUid,
        });

        if (response?.status !== 200) {
          alert('אימייל לא תקין/בשימוש');
          userCred.user.delete();//if it failed at the server it will remove the user
          return;
        }
        await updateProfile(userCred.user, {
          displayName: `${FirstName} ${LastName}`, // updating the display name
        });

        navigate('/client/registrationCompalete');
      });
    } catch (error) {
      console.log(error);
      alert('הזן את הפרטים מחדש');
    }
  }

  return (
    <>
      <div className="page-wraper">
        <div className="mainClient-page-wraper">
          <ClientNavBar />
          <div className="mainClient-page">
            <div className="registerWraper-conatiner">
              <div className="registerClient-page-title">
                <h2>הרשמה</h2>
              </div>
              <form action="" onSubmit={(event:any) => handleOnSubmit(event)}>
                <label className="inp1">
                  <input type="text" name="FirstName" id="FirstName" placeholder="שם פרטי" required />
                  <input type="text" name="LastName" id="LastName" placeholder="שם משפחה " required />
                  <input type="email" name="Email" id="email" placeholder="כתובת דואר אלקטרוני" required />

                  <input
                    type="password"
                    name="Password"
                    placeholder="סיסמא"
                    id="passowrd"
                    required
                    pattern=".{6,}"
                  />

                  <input
                    type="password"
                    name="RepeatYourPassword"
                    placeholder="אימות סיסמא"
                    id="passowrd"
                    required
                    pattern=".{6,}"
                  />

                  <input
                    type="tel"
                    name="PhoneNumber"
                    id="PhoneNumber"
                    placeholder="טלפון נייד"
                    pattern="[0-9]{10}"
                    required
                  />
                </label>
                <div className="register-btn-Container go-To-Access-page">
                  כבר יש לך חשבון?{' '}
                  <Link to={'/client/access'} className="hoverMe">
                    {' '}
                    היכנס{' '}
                  </Link>{' '}
                </div>
                <button>הרשמה</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegestrationPage;
