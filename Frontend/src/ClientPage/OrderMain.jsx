import React, { useState } from 'react'
import { Link  } from 'react-router-dom'
import ClientNavBar from '../nav/ClientNavBar'
import { getAuth } from 'firebase/auth'
import ClientNavBarOrderMain from '../nav/ClientNavBarOrderMain';

function OrderMain() {
  const auth = getAuth();
  console.log(auth);

const [userAuth,setUserAuth] =useState(auth)

  return (
    <div>
     <div className="page-wraper">
        {/* bdika vdika */}
        {/* <ClientNavBar/> */}

        <div className="mainClient-page-wraper">
        <ClientNavBarOrderMain/>
        <div className="clientName-conatier">
        <h2>Welcome Back👋 <h4>{userAuth.currentUser.displayName} </h4></h2>
        

        </div>
          <div className="mainClient-page">
          <div className="order-buttonContainer-client">

         <Link to={'/order/newOrder'}><button >הזמנה חדשה</button></Link>
         {/* change the client order list:*/}
         <Link to={'/order/ExistingOrder'}> <button style={{marginTop:'25px',paddingRight:'17px'}}>הזמנה קיימת</button></Link>
          </div>
        </div>
        </div>

       </div>
    </div>
  )
}

export default OrderMain