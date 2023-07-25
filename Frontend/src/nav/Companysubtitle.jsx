import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Companysubtitle() {

function Tchange(event) {
  console.log(event);
  
}

  // function onMousrClick(){
  //   if(bgColor == true){

  //   }
  // }
  return (
    <div className='companySubTitle-conatiner'>
        <ul >
        <Link to={'/company/Orders'} className='T' onClick={(e)=>Tchange(e)}>  <li>הזמנות</li> </Link> 
            <Link to={'/company/Statistics'}className='T' onClick={(e)=>Tchange(e)}> <li>סטטיסטיקה</li> </Link> 
           <Link to={'/company/Calender'}className='T' onClick={(e)=>Tchange(e)}>  <li>יומן עבודה</li> </Link> 
           <Link to={'/company/AddWorker'}className='T' onClick={(e)=>Tchange(e)}><li>הוספת עובד</li> </Link> 
           <Link to={'/company/mainpage'}className='T' onClick={(e)=>Tchange(e)}><li >ראשי</li> </Link> 
        </ul>

    </div>
  )
}

export default Companysubtitle