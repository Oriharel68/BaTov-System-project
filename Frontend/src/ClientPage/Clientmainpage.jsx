import React from 'react'
import ClientNavBar from '../nav/ClientNavBar'
import { Link } from 'react-router-dom'
import RegestrationPage from './RegestrationPage'

function Clientmainpage() {
  return (
    <div >
      {/* nav component */}
       <div className="page-wraper">
        {/* bdika vdika */}
        {/* <ClientNavBar/> */}

        <div className="mainClient-page-wraper">
        <ClientNavBar/>
        
          <div className="mainClient-page">
          <div className="buttonContainer-client">

         <Link to={'/client/registration'}><button >הירשם</button></Link>
         <Link to={'/client/access'}> <button style={{marginTop:'25px',paddingRight:'17px'}}>כניסה</button></Link>
          </div>
        </div>
        </div>

       </div>
    </div>
  )
}

export default Clientmainpage