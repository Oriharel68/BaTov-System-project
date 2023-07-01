import React from 'react'
import { Link  } from 'react-router-dom'
import ClientNavBar from '../nav/ClientNavBar'

function OrderMain() {
  return (
    <div>
     <div className="page-wraper">
        {/* bdika vdika */}
        {/* <ClientNavBar/> */}

        <div className="mainClient-page-wraper">
        <ClientNavBar/>
        
          <div className="mainClient-page">
          <div className="buttonContainer-client">

         <Link to={'/client/registration'}><button >הזמנה חדשה</button></Link>
         <Link to={'/client/access'}> <button style={{marginTop:'25px',paddingRight:'17px'}}>הזמנה קיימת</button></Link>
         {/* <Link to={'/client/access'}> <button style={{marginTop:'25px',paddingRight:'17px'}}>הזמנה קיימת</button></Link> */}
          </div>
        </div>
        </div>

       </div>
    </div>
  )
}

export default OrderMain