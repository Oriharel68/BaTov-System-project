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
      // console.log(event);
        try {
          event.preventDefault();
          
          const formData = new FormData(event.target);
          // console.log(formData);
          const WorkerName = formData.get('WorkerName');
          console.log(WorkerName);
     

            //   .delete
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
  <td id='btnAddRemove'>   <button >עריכה</button></td>
  <td id='btnAddRemove'>  <button onClick={(event)=>handaleRemove(event)} name='WorkerName'>הסרה</button></td>

</tr>



           </table>
              
    </div>
  )
}

export default AddWorkerListCompany