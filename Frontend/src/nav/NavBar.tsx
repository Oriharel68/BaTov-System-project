import { Link } from 'react-router-dom';
import NavLogo from '../Main page/NavLogo';

function NavBar() {
  return (
    <>
      <div className="navBar-Main">
        <Link to={'/'}>
          <NavLogo />
        </Link>

        <div className="insideNavTopFirst-container">
          <div className="btn-container">
            <Link to={'/company/access'} id="T">
              <button>חברה</button>
            </Link>
            <Link to={'/client/access'} id="T" className="r1">
              {' '}
              <button>לקוח</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
