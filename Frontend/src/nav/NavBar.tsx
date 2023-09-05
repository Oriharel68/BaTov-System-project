// import React from 'react'

// function NavBar() {
//   return (
//     <div className='navBar-Main'>
//         <h1>Copmpany Logo</h1>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo et molestias corporis totam facilis voluptatibus dolor tempora velit accusantium facere, culpa blanditiis quae in eius est maxime nisi laudantium nulla?</p>
//     </div>
//   )
// }

// export default NavBar
import React from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../Main page/NavLogo';

function NavBar() {
  return (
    <div>
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
    </div>
  );
}

export default NavBar;
