import { useState, useEffect, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { FaEllipsisV } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Companysubtitle() {
  const path = window.location.pathname.replace('/company', '');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Update windowWidth state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine whether to show the dropdown based on windowWidth
  const showDropdown = windowWidth <= 786;

  return (
    <div className="companySubTitle-conatiner">
      {/* Show the regular ul for larger screens */}
      {!showDropdown && (
        <ul className="desktop-list">
              {/* //classes for the background color stend on the div we clicked  */}
          <li>                                                  
            <NavLink to="/company/Orders" className={`T ${path === '/Orders' ? 'mainO' : ''}`}>    
              הזמנות
            </NavLink>
          </li>
          <li>
            <NavLink to="/company/Calender" className={`T ${path === '/Calender' ? 'main' : ''}`}>
              יומן עבודה
            </NavLink>
          </li>
          <li>
            <NavLink to="/company/AddWorker" className={`T ${path === '/AddWorker' ? 'main' : ''}`}>
              ניהול עובדים
            </NavLink>
          </li>
          <li>
            <NavLink to="/company/mainpage" className="mainP">
              ראשי
            </NavLink>
          </li>
        </ul>
      )}

      {/* Show the עוד button for smaller screens */}
      {showDropdown && (
        <>
          <div
            className={`more-button ${dropdownVisible ? 'active' : ''}`}
            onClick={() => setDropdownVisible(!dropdownVisible)}>
            <FaEllipsisV />
          </div>
          {dropdownVisible && (
            <div className="dropdown-list-wrapper">
              <ul className="dropdown-list">
                <div className="close-page" onClick={() => setDropdownVisible(!dropdownVisible)}>
                  <AiOutlineCloseCircle />
                </div>
                <li>
                  <NavLink to="/company/mainpage" className="mainP">
                    ראשי
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/company/Orders" className={`T ${path === '/Orders' ? 'mainO' : ''}`}>
                    הזמנות
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/company/Calender" className={`T ${path === '/Calender' ? 'main' : ''}`}>
                    יומן עבודה
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/company/AddWorker" className={`T ${path === '/AddWorker' ? 'main' : ''}`}>
                    ניהול עובדים
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default memo(Companysubtitle);                                                                                 
 