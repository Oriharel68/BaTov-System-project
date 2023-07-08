import React from 'react'
import { Link } from 'react-router-dom'

function Companysubtitle() {
  return (
    <div className='companySubTitle-conatiner'>
        <ul >
        <Link to={'/company/Orders'}id='T'> <li>הזמנות</li> </Link> 
            <Link to={'/company/Statistics'} id='T'> <li>סטטיסטיקה</li> </Link> 
           <Link to={'/company/mainpage'}id='T'> <li><h3>ראשי</h3></li> </Link> 
           <Link to={'/company/Calener'}id='T'>   <li>יומן עבודה</li> </Link> 
           <Link to={'/company/AddWorker'}id='T'> <li>הוספת עובד</li> </Link> 
        </ul>

    </div>
  )
}

export default Companysubtitle