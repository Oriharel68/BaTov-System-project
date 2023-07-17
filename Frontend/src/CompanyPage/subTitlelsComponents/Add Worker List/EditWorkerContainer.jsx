import axios from 'axios';
import React, { useRef } from 'react'

function EditWorkerContainer({item,Change,setChange,setShowSecondDiv}) {
  const {Price,TypeOfService,WorkerName,_id} = item;
  
  const InputWokrerNameref = useRef()
  const InputTypeOfServiceref = useRef()
  const InputPriceNameref = useRef()

  async function handleEdit(event){
    event.preventDefault(); 
     const WorkerName= InputWokrerNameref.current.value;
     const TypeOfService= InputTypeOfServiceref.current.value;
     const Price= InputPriceNameref.current.value;
    // InputTypeOfServiceref
    // InputPriceNameref
    try {
      if (!Price || !TypeOfService || !TypeOfService ) {
        // alert("missing info");
        // ref.current.style.color = "red";
        // ref.current.innerText = "חסר מידע -בבקשה השלם את כל המידע הנדרש";

        return;
      }
      let {data} = await axios.post('http://localhost:4000/EditCompanyWorker',{
        _id,WorkerName,TypeOfService,Price
      })
      console.log(data);
      setChange(Change +1)
      setShowSecondDiv(false)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div style={{backgroundColor:'red',position:'absolute'}}>
      
          <h3>עריכת שינוי</h3>
          <input type="text" id="W2" name="workerName" ref={InputWokrerNameref} placeholder=  {`שם + שם משפחה -- ${WorkerName}   `} />

        <input type="text" id="W2" name="serviceType" ref={InputTypeOfServiceref} placeholder= {`סוג איש מקצוע -- ${TypeOfService}   `}/>

        <input type="number" id="W3" name="price" ref={InputPriceNameref} placeholder= {`מחיר /עלות בדיקה-- ${Price}   `} min="0"/>
        <button onClick={(event)=>handleEdit(event)}>בצע שינוי </button>
    </div>
  )
}

export default EditWorkerContainer