import axios from 'axios';
// import { log } from 'console';
import React, { useState } from 'react'

function AddWorkerListCompany({item}) {
    // console.log(item);
    const {Price,TypeOfService,WorkerName} = item;
    // const [ServiceProviders,setServiceProviders] = useState([]);

    // const workercheck =document.querySelectorAll("WorkerName");
    // console.log(workercheck);

    async function handaleRemove(event){
        try {
          event.preventDefault();
          
          const formData = new FormData(event.target);
          const WorkerName = document.getElementById('WorkerName');
          const target = event.target;

           const NewWorkerName = WorkerName.target;
        //   document.querySelectorAll("WorkerName");
        //  formData.get({WorkerName});
        //  document.getElementById('WorkerName');
         console.log(WorkerName);
         console.log(NewWorkerName);
        //  if (!WorkerName ) {
        //     alert("eror");
        //     return;
        //   }

            //   .delete
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
  <td id='WorkerName' className='WorkerName' > {WorkerName}</td>
  <td id='btnAddRemove'>   <button >עריכה</button></td>
  <td id='btnAddRemove' onClick={(event)=>handaleRemove(event)}>   <button>הסרה</button></td>

</tr>



           </table>
              
    </div>
  )
}

export default AddWorkerListCompany