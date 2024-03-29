import { useCallback, useState, memo } from 'react';
import { setDate } from '../Helpjs/help';
import Modal from 'react-modal';
import RemoveStyle from './ModalStyle/RemoveOrderStyle';
import { FiSettings } from 'react-icons/fi';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { BiExit } from 'react-icons/bi';
import Url from '../ApiClient/Url';
import AxiosClient from '../ApiClient/AxiosClient';
import { Order } from '../Types/Types';

interface existingOrderListProps {
  order:Order,
  setChanged:(a:(prev:boolean)=>void)=>void,
  Changed:boolean,
  isExpired:boolean;
}

function ExistingOrderList({ order, setChanged, Changed, isExpired }: existingOrderListProps) {



  const [showModal, setShowModal] = useState<boolean>(false); 

  const handleClick = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  async function handleRemove() {
    try {
      const { data } = await AxiosClient.delete(`${Url}/RemoveOrder?orderId=${order._id}`);
      if (data.deleted) {
        setChanged((prev:boolean)=> !prev);// the data have been change and it needs to request the data again
        handleClick(); //closing the Modal
      } else {
        throw new Error('not deleted');
      }
    } catch (error) {
      console.log(error);
      handleClick(); //closing the Modal
    }
  }

  return (
    <>
      <div className="workerType-wraper">
        <button onClick={handleClick} id="WokerType">
          <div className="btn-wraper">
            <div className="top-btn-container">
              <ul>
                <li className="marker"> מקצוע: </li>
                <li className="marker">שם עובד :</li>
                <li className="marker"> תאריך :</li>
              </ul>
            </div>
            <div className="bootom-btn-container">
              <ul>
                <li> {order.TypeOfService} </li>
                <li> {order.WorkerName}</li>
                <li style={{ borderLeft: 'none' }}> {setDate(order.DateTime as any)}</li>
              </ul>
            </div>
          </div>
          <FiSettings>אפשרויות</FiSettings>
        </button>
        {showModal && (
          <Modal isOpen={showModal} onRequestClose={handleClick} style={RemoveStyle as any} ariaHideApp={false}>
            <div className="Remove-Modal">
              <div className="rows">
                <h3 className="marker">מקצוע:</h3>
                <p> {order.TypeOfService} </p>
              </div>
              <div className="rows">
                <h3 className="marker">שם עובד :</h3>
                <p>{order.WorkerName} </p>
              </div>
              <div className="rows">
                <h3 className="marker">תאריך : </h3>
                <p>{setDate(order.DateTime as any)} </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  maxWidth: '100%',
                  width: '80%',
                }}>
                <div
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <BiExit style={{ width: '3em', height: '3em' }} onClick={handleClick}>
                    יציאה
                  </BiExit>
                  יציאה
                </div>
                {isExpired && (
                  <div
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <MdRemoveCircleOutline style={{ width: '3em', height: '3em' }} onClick={handleRemove}>
                      מחיקה
                    </MdRemoveCircleOutline>
                    מחיקה
                  </div>
                )}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}

export default memo(ExistingOrderList);
