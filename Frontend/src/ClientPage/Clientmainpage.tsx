import React from 'react';
import ClientNavBar from '../nav/ClientNavBar';
import { Link } from 'react-router-dom';

function Clientmainpage() {
  return (
    <div>
      {/* nav component */}
      <div className="page-wraper">
        {/* bdika vdika */}
        {/* <ClientNavBar/> */}

        <div className="mainClient-page-wraper">
          <ClientNavBar />
          <div className="content-mainclient">
            <h1 className="TContent">BaTov system</h1>
          </div>

          <div className="mainClient-page">
            <div className="buttonContainer-client">
              {/* style={{paddingRight:'0px',paddingLeft:'0px'}} */}
              {/*  style={{marginTop:'25px',paddingRight:'17px',paddingRight:'0px'}}*/}
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
    </div>
  );
}

export default Clientmainpage;
