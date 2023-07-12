import React from 'react'
import CombaibnedNavCompany from '../../nav/CombaibnedNavCompany'

function AddworkerCompany() {
  return (
    <div>
      <div className="navCompany-container">

      <CombaibnedNavCompany/>
      </div>
      
      <div className="mainAddWorker-Page">
        <div className="main-container">
          <h3>הוספת עובד</h3>
          <form action="">
            
        <input type="text" id="W2" name="" placeholder='סוג איש מקצוע'/>
        <input type="text" id="W2" name="" placeholder='שם עובד'/>
        <input type="text" id="W3" name="" placeholder='מחיר/עלות בדיקה'/>
         
          <button type="button">
            הוספה
          </button>
          </form>

            
            </div>
      </div>

    </div>
  )
}
// input[type=text]:focus {
  // background-color: lightblue;
// }
export default AddworkerCompany