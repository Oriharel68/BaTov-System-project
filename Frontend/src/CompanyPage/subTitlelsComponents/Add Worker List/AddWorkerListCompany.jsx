import axios from 'axios';
// import { log } from 'console';
import React, { useState } from 'react'

function AddWorkerListCompany({item}) {
    // console.log(item);
    const {Price,TypeOfService,WorkerName} = item;
    // const [ServiceProviders,setServiceProviders] = useState([]);
 
    async function handaleRemove(e){
        try {
          e.preventDefault();
        //   const formData = new FormData(event.target);
         const WorkerName = document.getElementById('WorkerName');
        //  if (!WorkerName ) {
        //     alert("eror");
        //     return;
        //   }
              
          const {data} = await axios.delete('http://localhost:4000/removeworker',{
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
            alert('Provider has been removed succssefuly');
          }      
          }
         catch (error) {
          alert(error)
        }
      }
  return (
    <div className='workers-list'>
             <table>

<tr 
// id="Active"
>
  <td id='WorkerName' name>{WorkerName}</td>
  <td id='btnAddRemove'>   <button >עריכה</button></td>
  <td id='btnAddRemove' onClick={(e)=>handaleRemove(e)}>   <button>הסרה</button></td>

</tr>



           </table>
              
    </div>
  )
}

export default AddWorkerListCompany