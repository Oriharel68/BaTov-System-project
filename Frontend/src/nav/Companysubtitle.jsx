import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Companysubtitle() {


  return (
    <div className='companySubTitle-conatiner'>
        <ul >
        <NavLink to={'/company/Orders'} className='T' >  <li>הזמנות</li> </NavLink> 
            <NavLink to={'/company/Statistics'}className='T' > <li>סטטיסטיקה</li> </NavLink> 
           <NavLink to={'/company/Calender'}className='T'>  <li>יומן עבודה</li> </NavLink> 
           <NavLink to={'/company/AddWorker'}className='T' ><li>הוספת עובד</li> </NavLink> 
           <NavLink to={'/company/mainpage'}className='T' ><li >ראשי</li> </NavLink> 
        </ul>

    </div>
  )
}

export default Companysubtitle