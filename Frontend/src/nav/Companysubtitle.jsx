import React, { useRef, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

function Companysubtitle() {

 const path = window.location.pathname.replace('/company/','');
  return (
    <div className='companySubTitle-conatiner'>
        <ul >
        <NavLink to={'/company/Orders'} className={`T ${path ==='Orders' ?'mainO':'' }`} >  <li>הזמנות</li> </NavLink> 
            <NavLink to={'/company/Statistics'}className={`T ${path ==='Statistics' ?'main':'' }`} > <li>סטטיסטיקה</li> </NavLink> 
           <NavLink to={'/company/Calender'}className={`T ${path === 'Calender' ?'main':'' }`}>  <li>יומן עבודה</li> </NavLink> 
           <NavLink to={'/company/AddWorker'}className={`T ${path === 'AddWorker' ?'main':'' }`} ><li>הוספת עובד</li> </NavLink> 
           <NavLink to={'/company/mainpage'}className="mainP"><li >ראשי</li> </NavLink> 
        </ul>

    </div>
  )
}

export default Companysubtitle