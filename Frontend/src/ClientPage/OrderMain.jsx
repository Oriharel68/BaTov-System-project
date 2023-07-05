import React from 'react'
import { Link  } from 'react-router-dom'
import ClientNavBar from '../nav/ClientNavBar'
import { getAuth } from 'firebase/auth'

function OrderMain() {
  const auth = getAuth();
console.log(auth);


  return (
    <div>
     <div className="page-wraper">
        {/* bdika vdika */}
        {/* <ClientNavBar/> */}

        <div className="mainClient-page-wraper">
        <ClientNavBar/>
        <div className="clientName-conatier">
        <h2>Welcome Back👋 <h4>{auth.currentUser.displayName} </h4></h2>
        

        </div>
          <div className="mainClient-page">
          <div className="order-buttonContainer-client">

         <Link to={'/order/newOrder'}><button >הזמנה חדשה</button></Link>
         {/* change the client order list:*/}
         <Link to={'/*'}> <button style={{marginTop:'25px',paddingRight:'17px'}}>הזמנה קיימת</button></Link>
          </div>
        </div>
        </div>

       </div>
    </div>
  )
}

export default OrderMain