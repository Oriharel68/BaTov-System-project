import React from 'react'
import { Link } from 'react-router-dom'

function CompanyNavBar() {
  return (
    <div>

      <Link to={'/company/mainpage'}>
    <div className='navBar-Main' style={{
   
        
    }}>
     <h1>
        logo     
       <span>v</span>
       </h1>
     
     </div>
     </Link>
    </div>
    
  )
}

export default CompanyNavBar