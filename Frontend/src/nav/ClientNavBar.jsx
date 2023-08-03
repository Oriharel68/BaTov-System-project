import React from 'react'
import { Link } from 'react-router-dom'
import NavLogo from '../Main page/NavLogo'

function ClientNavBar() {
  return (
    <div>
        
        <div className='navBar-Client'>
        <Link to={'/client/main'}> <NavLogo/></Link>
     </div>
    </div>
  )
}

export default ClientNavBar