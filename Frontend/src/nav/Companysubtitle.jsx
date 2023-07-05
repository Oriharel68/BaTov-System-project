import React from 'react'
import { Link } from 'react-router-dom'

function Companysubtitle() {
  return (
    <div className='companySubTitle-conatiner'>
        <ul >
        <Link to={'/company/Orders'}> <li>הזמנות</li> </Link> 
            <Link to={'/company/Statistics'}> <li>סטטיסטיקה</li> </Link> 
           <Link to={'/company/mainpage'}> <li><h3>ראשי</h3></li> </Link> 
           <Link to={'/company/Calener'}>   <li>יומן עבודה</li> </Link> 
           <Link to={'/company/AddWorker'}> <li>הוספת עובד</li> </Link> 
        </ul>

    </div>
  )
}

export default Companysubtitle