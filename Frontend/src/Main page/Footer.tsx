import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import NavLogo from './NavLogo';
function Footer() {
  return (
    <div className="Footer">
      <div className="left-Fotter-container">
        <p> &copy; 2020 BaTov, Inc. All rights reserved. </p>
        <NavLogo />
      </div>
      <div className="right-Fotter-container">
        <ul>
          <li>
            <AiOutlineInstagram />
          </li>
          <li>
            <BsFacebook />
          </li>

          <li>
            {' '}
            <a style={{ textDecoration: 'none', color: '#a9a9a9' }} href="mailto:admin@gmail.com">
              <AiOutlineMail />
            </a>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
