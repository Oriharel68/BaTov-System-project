import { useEffect } from 'react';
import ClientNavBar from '../../nav/ClientNavBar';
import { useNavigate } from 'react-router-dom';
function UserRegistrationComplete() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/client/access');
    }, 3000);
  }, []);

  return (
    <>
      <div className="page-wraper">
        <div className="mainClient-page-wraper">
          <ClientNavBar />

          <div className="mainClient-page">
            <div className="RegisterMessage">
              <div className="alert-popup-container">
                <div className="success-checkmark">
                  <div className="check-icon">
                    <span className="icon-line line-tip"></span>
                    <span className="icon-line line-long"></span>
                    <div className="icon-circle"></div>
                    <div className="icon-fix"></div>
                  </div>
                </div>
                <div className="alert-popup-title">Success!!!</div>
                <div className="alert-popup-message">המשתמש נרשם בהצלחה</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegistrationComplete;
