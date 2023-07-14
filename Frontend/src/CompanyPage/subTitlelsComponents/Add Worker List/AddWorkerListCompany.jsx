import React from 'react'

function AddWorkerListCompany({item}) {
    console.log(item);
    const {Price,TypeOfService,WorkerName} = item;
  return (
    <div className='workers-list'>
             <table>

<tr 
// id="Active"
>
  <td >{WorkerName}</td>
  <td id='btnAddRemove'>   <button >עריכה</button></td>
  <td id='btnAddRemove'>   <button>הסרה</button></td>

</tr>



           </table>
              
    </div>
  )
}

export default AddWorkerListCompany