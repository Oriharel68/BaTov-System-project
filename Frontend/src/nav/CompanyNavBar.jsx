import React from 'react'
import { Link } from 'react-router-dom'
import Companysubtitle from './Companysubtitle'

function CompanyNavBar() {
  return (
    <>

      <Link to={'/company/mainpage'}>
    <div >
     <h1>
        logo     
       <span>v</span>
       </h1>
       {/* <div className="subTitle-company" >
        <Companysubtitle/>
        </div>
    */}
     </div>
     </Link>
    </>
    
  )
}

export default CompanyNavBar