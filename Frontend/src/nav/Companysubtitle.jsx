import React from 'react'
import { Link } from 'react-router-dom'

function Companysubtitle() {
  return (
    <div className='companySubTitle-conatiner'>
        <ul >
            <li>הזמנות</li>
            <li>סטטיסטיקה</li>
           <Link to={'/company/mainpage'}> <li><h3>ראשי</h3></li> </Link> 
            <li>יומן עבודה</li>
            <li>הוספת עובד</li>
        </ul>

    </div>
  )
}

export default Companysubtitle