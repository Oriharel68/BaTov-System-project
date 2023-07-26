import axios from 'axios';
// import { log } from 'console';
import React, { useState } from 'react'
import EditWorkerContainer from './EditWorkerContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast.error(`מחיקת נותן השירות נכשלה`);
            return;
          }
          else if(data.ok){
            setChange(Change+1);
            toast.success('נותן השירות נמחק בהצלחה');
          }      
          }
         catch (error) {
          toast.error(`מחיקת נותן השירות נכשלה`);
        }
      }
  return (
    // <div className='workers-list'>
     
             <>

<tr>
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
        <ToastContainer
position="bottom-center"
autoClose={200}
hideProgressBar={false}
closeOnClick
rtl={true}
theme="light"
/>

           </>
              
    // </div>
  )
}

export default AddWorkerListCompany