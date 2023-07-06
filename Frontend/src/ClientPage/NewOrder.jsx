import React, { useEffect, useMemo, useState } from 'react'
import ClientNavBar from '../nav/ClientNavBar'
import { Link  } from 'react-router-dom'
import axios from "axios";
import NewOrderList from './NewOrderList';
import DatePickerComponent from './DatePickerComponent';

function NewOrder() {


  const [ServiceProviders,setServiceProviders] = useState([]);
  const [Provider,setProvider] = useState({});
  const [Choice, setChoice] = useState(true);
  const [SelectedDate, setSelectedDate] = useState(null);
  
   //useMemo
//   const calculation = useMemo(() => expensiveCalculation(count), [count]);
  
const addServiceProvider= (item)=>{
    setProvider(item);
    setChoice(false);

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
  }, [])


  return (

    <div>
           <div className="page-wraper">
  

        <div className="mainClient-page-wraper">
        <ClientNavBar/>
        
          <div className="mainClient-page">
          <div className="clientbuttonContainer-client">
            

        
          <div className='clientNewOrderPage'>
        {Choice ? 
          
          <div className="">
                <h3>סוג איש מקצוע</h3>
  
        
              {ServiceProviders.map((item)=>{
                  
                  return (
                  
                     
                     
                     <NewOrderList item={item} key={item._id} addServiceProvider={addServiceProvider}/>
                     
                    
                  
                  )
                })}
          </div>
        
        
      :
      
      <div className="calender-container">


      <h3>בחר תאריך</h3>
      <div className="bootmCalender-container">
        
      <DatePickerComponent setSelectedDate ={setSelectedDate}/>
      <button> Complete</button>
      </div>
      </div>
      
        
        
        }
         </div>

          </div>
        </div>
        </div>

       </div>
     
    </div>

  )
}

export default NewOrder