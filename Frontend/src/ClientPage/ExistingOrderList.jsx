import React, { useCallback, useState } from "react";
import { setDate } from "../Helpjs/help";
import Modal from "react-modal";
import RemoveStyle from "./ModalStyle/RemoveOrderStyle";
import axios from "axios";
import { MdRemoveCircleOutline } from "react-icons/md";
import { BiExit } from "react-icons/bi";
function ExistingOrderList({ order, setChanged, Changed, isExpired }) {
  const [showModal, setShowModal] = useState(false);
  const [Expired, setExpired] = useState(isExpired);
  const handleClick = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  async function handleRemove() {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/RemoveOrder?orderId=${order._id}`
      );
      if (data.deleted) {
        setChanged(Changed + 1);
        handleClick(); //closing the Modal
      } else {
        throw new Error("not deleted");
      }
    } catch (error) {
      console.log(error);
      handleClick(); //closing the Modal
    }
  }

  return (
    <div>
      <div className="workerType-wraper">
        <button onClick={handleClick} id="WokerType">
          <span className="marker"> מקצוע: </span>{order.TypeOfService}<br />
          <span className="marker">שם עובד :</span> {order.WorkerName}<br />
          <span className="marker"> תאריך :</span>{setDate(order.DateTime)}
         
          
          
          
          
          
        </button>
        {showModal && (
          <Modal
            isOpen={showModal}
            onRequestClose={handleClick}
            style={RemoveStyle}
            ariaHideApp={false}
          >
            <div className="Remove-Modal">
              <h3>מקצוע:{order.TypeOfService}</h3>
              <h3>שם עובד : {order.WorkerName}</h3>
              <h3>תאריך : {setDate(order.DateTime)}</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "100%",
                  width: "80%",
                }}
              >
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <BiExit
                    style={{ width: "3em", height: "3em" }}
                    onClick={handleClick}
                  >
                    יציאה
                  </BiExit>
                  יציאה
                </div>
                {Expired && (
                  <div
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <MdRemoveCircleOutline
                      style={{ width: "3em", height: "3em" }}
                      onClick={handleRemove}
                    >
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
    </div>
  );
}

export default ExistingOrderList;
