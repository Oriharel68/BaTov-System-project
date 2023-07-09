import React, { useEffect } from 'react'
import ClientNavBar from '../../nav/ClientNavBar'
import ClientNavBarOrderMain from '../../nav/ClientNavBarOrderMain'
import { useNavigate } from 'react-router-dom'

function OrderCompelteMessage() {
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(() => {
      navigate('/order/main');
    }, 3000);

  },[])
  return (
    <div>
  <div className="page-wraper">
        {/* bdika vdika */}
        {/* <ClientNavBar/> */}

        <div className="mainClient-page-wraper">
        <ClientNavBarOrderMain/>
        
          <div className="mainClient-page">
        
          <div className="RegisterMessage">

<p>
נקלט במערכת בהצלחה
</p>


</div>
        </div>
        </div>

       </div>         
  </div>
  )
}

export default OrderCompelteMessage