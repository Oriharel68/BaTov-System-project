import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Companysubtitle() {
  const [activeLink, setActiveLink] = useState("");

  const Tchange = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="companySubTitle-conatiner">
      <ul>
        <Link to={"/company/Orders"} 
   className={`T${activeLink === '/company/Orders' ? 'main' : ''}`}        
   onClick={() => Tchange('/company/Orders')}

>
          <li>הזמנות</li>
        </Link>
        <Link to={"/company/Statistics"} 
           className={activeLink === '/company/Statistics' ? 'main' : ''}
           onClick={() => Tchange('/company/Statistics')}

        
        >
          {" "}
          <li>סטטיסטיקה</li>{" "}
        </Link>
        <Link to={"/company/Calender"} className="T">
          {" "}
          <li>יומן עבודה</li>{" "}
        </Link>
        <Link to={"/company/AddWorker"} className="T">
          <li>הוספת עובד</li>{" "}
        </Link>
        <Link to={"/company/mainpage"} className="main">
          <li>ראשי</li>{" "}
        </Link>
      </ul>
    </div>
  );
}

export default Companysubtitle;
