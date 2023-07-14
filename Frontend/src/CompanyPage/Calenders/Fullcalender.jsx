import React, { useEffect, useState } from 'react'
import Calender from './Calender'
import axios from 'axios'
import moment from 'moment'



function Fullcalender() {
    const [Events, setEvents] = useState([])

    useEffect(()=>{
        const getAllOrders = async ()=>{
            const {data} = await axios.get('http://localhost:4000/getAllOrders');
            if(!(data.ok)){
                alert('data couldnt be retreived');
                return;
            }
            const {Orders} = data;
            const AllEvents = Orders.map((item)=>{
            const date = new Date();
            date.setTime(item.DateTime);
            const moments = moment(date).toDate();
            const text = `A visit From ${item.WorkerName} in the Service of ${item.TypeOfService}`;//title
            return {
                start:moments,
                end:moments,
                title:text
            }
            })
            setEvents(AllEvents)
        }
    getAllOrders();
    },[])



  return (
     <Calender events={Events} />
    
    
  )
}

export default Fullcalender