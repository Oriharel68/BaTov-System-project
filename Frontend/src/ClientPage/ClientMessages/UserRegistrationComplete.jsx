import React from 'react'
import NavBar from '../../nav/NavBar'
import ClientNavBar from '../../nav/ClientNavBar'

function UserRegistrationComplete() {
  return (
<div >
 


      <div className="page-wraper">
        {/* bdika vdika */}
        {/* <ClientNavBar/> */}

        <div className="mainClient-page-wraper">
        <ClientNavBar/>
        
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
  המשתמש נרשם בהצלחה
  </div>
</div>


</div>
        </div>
        </div>

       </div>
      
      
      </div>
  )
}

export default UserRegistrationComplete