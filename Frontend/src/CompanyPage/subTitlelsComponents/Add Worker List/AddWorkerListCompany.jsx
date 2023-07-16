import axios from 'axios';
// import { log } from 'console';
import React, { useState } from 'react'

function AddWorkerListCompany({item,setChange,Change}) {
    // console.log(item);
    const {Price,TypeOfService,WorkerName} = item;


    async function handaleRemove(event){
        try {
          const {data} = await axios.post('http://localhost:4000/removeworker',{
            // TypeOfService,
            WorkerName,
            // Price,
          })

          if (!data.ok) {
            alert(data.error);
            // userCred.user.delete();
            return;
          }
          else if(data.ok){
            setChange(Change+1);
            alert('Provider has been removed succssefuly');
          }      
          }
         catch (error) {
          alert(error)
        }
      }
  return (
    <div className='workers-list'>
      {/* <form action="">
        <input type="text" value={WorkerName}/>
        <button>עריכה</button>
        <button onClick={(event)=>handaleRemove(event)} name='WorkerName'>הסרה</button>
      </form> */}
             <table>

<tr 
// id="Active"
>
  <td id='WorkerName' className='WorkerName' > {WorkerName}</td>
  <td id='btnAddRemove'>
       <button >עריכה</button>
       </td>
  <td id='btnAddRemove'>
      <button onClick={(event)=>handaleRemove(event)} name='WorkerName'>הסרה</button>
      </td>

</tr>



           </table>
              
    </div>
  )
}

export default AddWorkerListCompany