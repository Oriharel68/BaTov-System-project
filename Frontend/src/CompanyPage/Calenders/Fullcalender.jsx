import React, { useCallback, useEffect, useState } from 'react'
import Calender from './Calender'
import axios from 'axios'
import moment from 'moment'
import Modal from 'react-modal';
import {setDate} from '../../Helpjs/help'
import {BiExit} from 'react-icons/bi'


function Fullcalender() {
    const [Events, setEvents] = useState([])
    const [EventData,setEventData] = useState(null);
    const [isOpen,setIsOpen] = useState(false);
    const Style = {
        overlay:{
            opacity:'1',
            backgroundColor: '#3434c7',
            backgroundImage:  'repeating-radial-gradient( circle at 0 0, transparent 0, #3434c7 40px ), repeating-linear-gradient( #00000055, #000000 )'
        },
       
 
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '18em',
            minWidth:'10em',
            padding: '2em',
            paddingTop:'1em',
            paddingRight:'1em',
            direction:'rtl'
          },
    };

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
            const text = `ביקור מ${item.WorkerName} לשירות:${item.TypeOfService}`;//title
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

    const OnSelectEvent = useCallback(
      (calEvent) => {
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
        
    
   
    {isOpen ?<Modal isOpen={isOpen} onRequestClose={CloseDia} style={Style}>
        <h3>{EventData.title}</h3>
        <p>בתאריך:<br/>{setDate(EventData.start.getTime())}</p>
        <div className='button-container'>
        <BiExit style={{maxHeight:'10em'}} onClick={CloseDia}/>
        </div>
        
      </Modal>:
      <div className='calendar-Company-container'>
      <Calender onSelectEvent={OnSelectEvent} events={Events} />
  
    </div>
   
      }

   
    </div>
     
    
    
  )
}

export default Fullcalender