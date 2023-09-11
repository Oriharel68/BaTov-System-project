import ClientNavBar from '../nav/ClientNavBar';
import { Link } from 'react-router-dom';

function Clientmainpage() {
  return (
    <>
      <div className="page-wraper">
        <div className="mainClient-page-wraper">
          <ClientNavBar />
          <div className="content-mainclient">
            <span className="TContent">BaTov system-היכנס ל</span>
          </div>
          <div className="mainClient-page">
            <div className="buttonContainer-client">
              <Link to={'/client/access'}>
                {' '}
                <button className="button-30">כניסה</button>
              </Link>
              <Link to={'/client/registration'}>
                <button className="button-30" style={{ marginTop: '25px' }}>
                  הירשם
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clientmainpage;
