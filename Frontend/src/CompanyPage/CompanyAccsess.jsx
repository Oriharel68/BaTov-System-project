import React from 'react'
import NavBar from '../nav/NavBar'

function CompanyAccsess() {
  return (
    <div>
        <div className="CompanyNav-container">
          <NavBar/>
        </div>
     

   

         <div className="CompanyMain-access-container">
          <div className="topAccess-container">
             {/* <input type="text" placeholder='שם משתמש' /> */}

             <label for="inp" class="inp">
  <input type="email" id="inp" placeholder="שם משתמש" pattern=".{6,}" required/>
  <svg width="280px" height="18px" viewBox="0 0 280 18" class="border">
    <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
  </svg>
  <svg width="14px" height="12px" viewBox="0 0 14 12" class="check">
    <path d="M1 7 5.5 11 L13 1"></path>
  </svg>
</label>

          </div>
          <div className="bootomAccess-container">
          {/* <input type="text" placeholder='סיסמא' /> */}
          <label for="inp" class="inp">
  <input type="password" id="inp" placeholder="סיסמא" pattern=".{6,}" required/>
  <svg width="280px" height="18px" viewBox="0 0 280 18" class="border">
    <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
  </svg>
  <svg width="14px" height="12px" viewBox="0 0 14 12" class="check">
    <path d="M1 7 5.5 11 L13 1"></path>
  </svg>
</label>
          </div>
         </div>
    </div>
  )
}

export default CompanyAccsess