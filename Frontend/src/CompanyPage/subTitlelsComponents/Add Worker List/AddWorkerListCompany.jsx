import axios from 'axios';
// import { log } from 'console';
import React, { useState } from 'react'
import EditWorkerContainer from './EditWorkerContainer';

function AddWorkerListCompany({item,setChange,Change}) {
    // console.log(item);
    const {Price,TypeOfService,WorkerName} = item;

    const [showSecondDiv, setShowSecondDiv] = useState(false);
        function handleClick (){
            // setShowSecondDiv(true);
            if(showSecondDiv){
              setShowSecondDiv(false)
              return;
            }else{
              setShowSecondDiv(true)

            }
        }
   




    async function handleRemove(event){
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
    // <div className='workers-list'>
     
             <>

<tr 
// id="Active"
>
  <td id='WorkerName' className='WorkerName' > {WorkerName}</td>
  <td id='btnAddRemove'>
       <button onClick={()=>handleClick()} >עריכה</button>
       </td>
       
  <td id='btnAddRemove'>
      <button onClick={(event)=>handleRemove(event)} name='WorkerName'>הסרה</button>
      
      </td>

</tr>
       {showSecondDiv &&  <div className="subTitle-company" >
        <EditWorkerContainer setShowSecondDiv={setShowSecondDiv} item={item} Change={Change}  setChange={setChange}/>
        </div>}


           </>
              
    // </div>
  )
}

export default AddWorkerListCompany