import React, { useEffect, useRef, useState } from 'react'
import CombaibnedNavCompany from '../../nav/CombaibnedNavCompany'
import axios from 'axios';
import AddWorkerListCompany from './Add Worker List/AddWorkerListCompany';
// import ServerStatus from "../FireBase/ServerStatus";
function AddworkerCompany() {
  const [ServiceProviders,setServiceProviders] = useState([]);
  const [Change,setChange] = useState(0);
   const ref = useRef();
   
  async function handleOnSubmit(event) {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const WorkerName = formData.get("workerName");
      const TypeOfService = formData.get("serviceType");
      const Price = formData.get("price");
      ref.current.style.paddingTop = "1em";
      ref.current.style.fontWeight = "bold";

      if (!Price || !TypeOfService || !TypeOfService ) {
        // alert("missing info");
        ref.current.style.color = "red";
        ref.current.innerText = "חסר מידע -בבקשה השלם את כל המידע הנדרש";
        return;
      }
 
      
      const  {data}  = await axios.put("http://localhost:4000/addProvider", {
       Price,
       WorkerName,
       TypeOfService,
      })
   

      if (!data.ok) {
        // alert("the user is alredy in us");
        ref.current.style.color = "red";
        ref.current.innerText = data.error;
        return;
      }
      else if(data.ok){
        setChange(Change +1)
        // alert('Provider has been created succssefuly');
        ref.current.style.color = "green";
        // ref.current.style.paddingTop = "1em";

        ref.current.innerText = 'נוצר בהצלחה';

      }      
      

      
    } catch (error) {
      alert(error);
    }
  }
useEffect(() => {
    async function getServiceProviders(){
      try{
      const {data} = await axios.get("http://localhost:4000/getServiceProvider");
      setServiceProviders(data);
      }catch(err){
        console.log(err);
      }
    }
    getServiceProviders();
  }, [Change])

  return (
    <div>
      <div className="navCompany-container">

      <CombaibnedNavCompany/>
      </div>
      
      <div className="mainAddWorker-Page">
        <div className="main-container">
          <form action=""  onSubmit={(event) => handleOnSubmit(event)}>
          <h3>הוספת עובד</h3>
            
        <input type="text" id="W2" name="workerName" placeholder=' שם + שם משפחה'/>
        <input type="text" id="W2" name="serviceType" placeholder='סוג איש מקצוע'/>
        <input type="number" id="W3" name="price" placeholder='מחיר/עלות בדיקה' min="0"/>
         
          <button>
            הוספה
          </button>
          </form>
                <div ref={ref} className=""></div>
            
            </div>
            <div className="Worker-list-container">
              <h3>ניהול עובדים קיימים</h3>
.
              <div className="main-worker-list-container">
              {ServiceProviders.map((item)=>{
                  
                return (
                  
                  <table>



                     <AddWorkerListCompany item={item} key={item._id} setChange={setChange} Change={Change}/>


                     
                    
                     </table>

                  )
                })}
         
           
              </div>
         
              </div>
      </div>

    </div>
  )
}
// input[type=text]:focus {
  // background-color: lightblue;
// }
export default AddworkerCompany