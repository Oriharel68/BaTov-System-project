import { useCallback, useState, memo } from 'react';
import CompanyNavBar from './CompanyNavBar';
import Companysubtitle from './Companysubtitle';
import { RxExit } from 'react-icons/rx';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Auth from '../FireBase/auth';
import AxiosClient from '../ApiClient/AxiosClient';
import Url from '../ApiClient/Url';
function CombaibnedNavCompany() {
  const [showDiv, setshowDiv] = useState(false);
  const navigate = useNavigate();
  const SignOut = useCallback(() => {                   // a reqest to logout from the system                                                 
    signOut(Auth)                                       //sign out function from fireBase- 
      .then(async () => {
        const response = await AxiosClient.post(`${Url}/logout`);
        if (response.status === 200) {
          window.sessionStorage.removeItem('accessToken');
          navigate('/company/access');
        } else {
          throw new Error('failed logout');
        }
      })
      .catch((error) => {
        alert(error);
      });  
  }, [Auth]);                                    
                                //Auth ->corrent user  

  return (
    <>
      <div className="companyMainpage-nav-container">
        <div className="nav-logo-container">
          <CompanyNavBar />
        </div>
        <div className="subTitle-company">
          <Companysubtitle />
        </div>
        <div className="exit-company">
          <button
            onClick={() => {
              setshowDiv(!showDiv);                                   //onclick that close and open a seconed div 
            }}>
            <RxExit />
          </button>
        </div>
      </div>
      {showDiv && (                                                 //how we showing/hide the div  
        <div className="exit-company-container">
          <h3>האם את/ה בטוח?</h3>
          <div className="exit-company-button-container">
            <button className="button-30" onClick={SignOut}>
              יציאה
            </button>
            <button
              style={{ marginRight: '1.2em' }}
              className="button-30"
              onClick={() => {
                setshowDiv(!showDiv);
              }}>
              ביטול
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(CombaibnedNavCompany);
