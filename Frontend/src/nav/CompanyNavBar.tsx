import { Link } from 'react-router-dom';
import NavLogo from '../Main page/NavLogo';

function CompanyNavBar() {
  return (
    <>
      <Link to={'/company/mainpage'}>
        <div>
          <NavLogo />
        </div>
      </Link>
    </>
  );
}

export default CompanyNavBar;
