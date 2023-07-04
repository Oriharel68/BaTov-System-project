import React from 'react'
import NavBar from '../nav/NavBar'
import Companysubtitle from '../nav/Companysubtitle'

function CompantMainPage() {
  return (
    <div>
        <div className="companyMainpage-nav-container">
            <NavBar/>
            <div className="subTitle-company" style={{padding:'5em'}}>
            <Companysubtitle/>
            </div>
        </div>
        <div className="mainCompanyPage-container">

        </div>

    </div>
  )
}

export default CompantMainPage