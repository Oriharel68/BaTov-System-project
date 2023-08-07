import React, { useCallback, useState } from 'react';
import { setDate } from '../Helpjs/help';
import Modal from 'react-modal';
import RemoveStyle from './ModalStyle/RemoveOrderStyle';
import axios from 'axios';
function ExistingOrderList({order,setChanged,Changed}) {

  const [showModal,setShowModal] = useState(false);

  const handleClick = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  async function handleRemove(){
    try {
      const {data} = await axios.delete(`http://localhost:4000/RemoveOrder?orderId=${order._id}`);
      if(data.deleted){
        setChanged(Changed+1);
        handleClick();//closing the Modal
      }
      else{
        throw new Error('not deleted');
      }
    } catch (error) {
      console.log(error);
      handleClick();//closing the Modal
    }
  }
  
  return (
    
    <div>
        
        <div className='workerType-wraper'>
       <button onClick={handleClick} id='WokerType'> 
    מקצוע:{order.TypeOfService} <br /><br /> 
      שם עובד : {order.WorkerName}<br /><br/>
      תאריך : {setDate(order.DateTime)}
       </button>
       {showModal &&
       <Modal isOpen={showModal}
       onRequestClose={handleClick}
       style={RemoveStyle}
       ariaHideApp={false}
       >
        <div className='Remove-Modal'>
          <h3>מקצוע:{order.TypeOfService}</h3>
          <h3>שם עובד : {order.WorkerName}</h3>
          <h3>תאריך : {setDate(order.DateTime)}</h3>
          <div>
          <button onClick={handleClick}>יציאה</button>
      <button onClick={handleRemove}>מחיקה</button>
          </div>
     
        </div>

       </Modal>
       }

    </div>
    </div>
  )
}

export default ExistingOrderList