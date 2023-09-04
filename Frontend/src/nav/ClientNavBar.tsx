import React from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../Main page/NavLogo';
import { TbHomeShare } from 'react-icons/tb';
function ClientNavBar() {
  return (
    <div>
      <div className="navBar-Client">
        <div className="logo-client-icon">
          <Link to={'/client/main'}>
            {' '}
            <NavLogo />
          </Link>
        </div>
        <Link to={'/'}>
          <div className="aboutUS-homepage-path">
            <div className="top-container">
              <TbHomeShare />
            </div>
            <div className="bottom-container">
              <p>קצת עלינו!</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ClientNavBar;
