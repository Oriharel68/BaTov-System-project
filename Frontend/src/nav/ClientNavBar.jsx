import React from 'react'
import { Link } from 'react-router-dom'

function ClientNavBar() {
  return (
    <div>
        
        <div className='navBar-Client'>
        <Link to={'/client/main'}>  <h1>logo</h1></Link>
     </div>
    </div>
  )
}

export default ClientNavBar