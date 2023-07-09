import React, { useEffect, useMemo, useState } from 'react'
import ClientNavBar from '../nav/ClientNavBar'
import { Link, useNavigate  } from 'react-router-dom'
import axios from "axios";
import NewOrderList from './NewOrderList';
import DatePickerComponent from './DatePickerComponent';
import ClientNavBarOrderMain from '../nav/ClientNavBarOrderMain';
import { getAuth } from 'firebase/auth';


function NewOrder() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(getAuth());
  const [ServiceProviders,setServiceProviders] = useState([]);
  const [Provider,setProvider] = useState(null);
  const [Choice, setChoice] = useState(true);
  const [SelectedDate, setSelectedDate] = useState(null);
  
   //useMemo
//   const calculation = useMemo(() => expensiveCalculation(count), [count]);


const handleComplete =  async ()=>{
  const {TypeOfService,WorkerName} = Provider;
  if(!SelectedDate || !Provider){
    alert('date or Provider is empty or invalid');
    return;
  }

  const message = await axios.post('http://localhost:4000/addOrder',{
    TypeOfService,
    WorkerName,
    Email:auth.currentUser.email,
    DateTime:SelectedDate
  });
  if(!message.data.ok){
    alert("order could not be placed");
    return;
  }
  navigate('/order/orderCompelte')
}


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
// console.log(ServiceProviders);

  return (

    <div>
           <div className="page-wraper">
  

        <div className="mainClient-page-wraper">
        <ClientNavBarOrderMain/>
        
          <div className="mainClient-page">
          <div className="clientbuttonContainer-client">
            

        
          <div className='clientNewOrderPage'>
        {Choice ? 
          
          <div className="">
                <h3>:סוג איש מקצוע</h3>
  
        
              {ServiceProviders.map((item)=>{
                  
                  return (
                  
                     
                     
                     <NewOrderList item={item} key={item._id} addServiceProvider={addServiceProvider}/>
                     
                    
                  
                  )
                })}
          </div>
        
        
      :
      
      <div className="calender-container">
      <h3>:בחר תאריך</h3>
      
      <div className="bootmCalender-container">
        
      <DatePickerComponent Provider={Provider} setSelectedDate ={setSelectedDate}/>
      <button onClick={handleComplete} id='Calender'> Complete</button>
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