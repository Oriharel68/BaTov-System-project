import React from "react";
import CombaibnedNavCompany from "../../nav/CombaibnedNavCompany";

function OrderOfTheCompany() {
  return (
    <div>
      <CombaibnedNavCompany />
      <div className="main-ordeList-container">
   <div className="orderReceipts-container">
   <h3>הזמנות פעילות</h3>
     
      <table>
  <tr>
    <th>תאריכים</th>
    <th>הזמנה</th>
    <th>סכום</th>
    <th>מספר הזמנה</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
    <td>$100</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
    <td>$150</td>
    <td>$100</td>

  </tr>
  <tr>
    <td>Joe</td>
    <td>Swanson</td>
    <td>$300</td>
    <td>$100</td>

  </tr>
  <tr>
    <td>Cleveland</td>
    <td>Brown</td>
    <td>$250</td>
    <td>$100</td>

  </tr>
      </table>
   </div>
   <div className="orderReceipts-container" id="B">
   <h3>הזמנות ישנות</h3>
     
   <table>
  <tr>
    <th>תאריכים</th>
    <th>הזמנה</th>
    <th>סכום</th>
    <th>מספר הזמנה</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
    <td>$100</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
    <td>$150</td>
    <td>$100</td>

  </tr>
  <tr>
    <td>Joe</td>
    <td>Swanson</td>
    <td>$300</td>
    <td>$100</td>

  </tr>
  <tr>
    <td>Cleveland</td>
    <td>Brown</td>
    <td>$250</td>
    <td>$100</td>

  </tr>
      </table>
   </div>
      </div>
    </div>
  );
}

export default OrderOfTheCompany;
