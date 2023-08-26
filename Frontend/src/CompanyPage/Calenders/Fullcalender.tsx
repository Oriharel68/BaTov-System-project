import React, { useCallback, useEffect, useState } from 'react'
import Calender from './Calender'
import moment from 'moment'
import Modal from 'react-modal';
import {setDate} from '../../Helpjs/help'
import {BiExit} from 'react-icons/bi'
import Style from './dialogStyle';
import Url from '../../ApiClient/Url';
import AxiosClient from '../../ApiClient/AxiosClient';

function Fullcalender() {
    const [Events, setEvents] = useState([])
    const [EventData,setEventData] :any = useState(null);
    const [isOpen,setIsOpen] = useState(false);
    useEffect(()=>{
        const getAllOrders = async ()=>{
          try {
            const response = await AxiosClient.get(`${Url}/getAllOrders`);
            if(response.status !==200){
                alert('data couldnt be retreived');
                return;
            }
            const {Orders} = response.data;
            const AllEvents = Orders.map((item:any)=>{
            const date = new Date();
            date.setTime(item.DateTime);
            const moments = moment(date).toDate();
            const text = `ביקור מ${item.WorkerName} לשירות:${item.TypeOfService}`;//title
            return {
                start:moments,
                end:moments,
                title:text
            }
            })
            setEvents(AllEvents)
          } catch (error) {
            console.log(error);
          }
            
        }
    getAllOrders();
    },[])

    const OnSelectEvent = useCallback(
      (calEvent:any) => {
        setEventData(calEvent);
        console.log(calEvent);
        setIsOpen(true);
      },
      [],
    );

    
      const CloseDia = useCallback(
        () => {
         setIsOpen(false)
        },
        [],
      );


  return (
    <div>
        
    
   
    {isOpen ?
    <Modal isOpen={isOpen} onRequestClose={CloseDia} style={Style as any}>
        <h3>{EventData.title}</h3>
        <p>בתאריך:<br/>{setDate(EventData.start.getTime())}</p>
        <div className='button-container'>
        <BiExit style={{minHeight:'7.5em', width:'5em',cursor:'pointer'}} onClick={CloseDia}/>
        </div>
        
      </Modal>
      :
      <div className='calendar-Company-container'>
      <Calender onSelectEvent={OnSelectEvent} events={Events} />
    </div>
      }

   
    </div>
     
    
    
  )
}

export default Fullcalender