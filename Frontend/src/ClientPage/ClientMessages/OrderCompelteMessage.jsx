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
          <div class="alert-popup-container">
  <div class="success-checkmark">
    <div class="check-icon">
      <span class="icon-line line-tip"></span>
      <span class="icon-line line-long"></span>
      <div class="icon-circle"></div>
      <div class="icon-fix"></div>
    </div>
  </div>
  <div class="alert-popup-title">Success!!!</div>
  <div class="alert-popup-message">
  נקלט במערכת בהצלחה
  </div>
</div>


</div>
        </div>
        </div>

       </div>         
  </div>
  )
}

export default OrderCompelteMessage