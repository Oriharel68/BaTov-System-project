import React, { useEffect, useRef, useState } from "react";
import CombaibnedNavCompany from "../../nav/CombaibnedNavCompany";
import axios from "axios";
import AddWorkerListCompany from "./Add Worker List/AddWorkerListCompany";
// import ServerStatus from "../FireBase/ServerStatus";
import { BiExit } from "react-icons/bi";
import Modal from "react-modal";
import EditStyle from "./Add Worker List/EditDialogStyle";
import { toast } from "react-toastify";

function AddworkerCompany() {
  const [ServiceProviders, setServiceProviders] = useState([]);
  const [Change, setChange] = useState(0);
  const ref = useRef();

  const [showSecondDiv, setShowSecondDiv] = useState(false);
  function handleClick() {
    // setShowSecondDiv(true);
  setShowSecondDiv(!showSecondDiv);
  }

  async function handleOnSubmit(event) {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const WorkerName = formData.get("workerName");
      const TypeOfService = formData.get("serviceType");
      const Price = formData.get("price");
      
      if (!Price || !TypeOfService || !TypeOfService) {
        // alert("missing info");
        ref.current.style.color = "red";
        ref.current.innerText = "חסר מידע -בבקשה השלם את כל המידע הנדרש";
        return;
      }

      const { data } = await axios.put("http://localhost:4000/addProvider", {
        Price,
        WorkerName,
        TypeOfService,
      });

      if (!data.ok) {
        // alert("the user is alredy in us");
        ref.current.style.color = "red";
        ref.current.innerText = data.error;
        return;
      } else if (data.ok) {
        setChange(Change + 1);
        handleClick();
        toast.success('העובד נוסף בהצלחה');
     
      }
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    async function getServiceProviders() {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/getServiceProvider"
        );
        setServiceProviders(data);
      } catch (err) {
        console.log(err);
      }
    }
    getServiceProviders();
  }, [Change]);

  return (
    <div>
      <div className="navCompany-container">
        <CombaibnedNavCompany />
      </div>

      <div className="mainAddWorker-Page">
        <div className="Worker-list-container">
          <div className="topics-container">
            <h3 className="TContent">ניהול עובדים קיימים</h3>
            <button
              className="button-30"
              role="button"
              onClick={() => handleClick()}
            >
              הוספת עובד
            </button>
            {/* <button className='TTContent' onClick={()=>handleClick()}>הוספת עובד</button> */}
          </div>
          {showSecondDiv &&(
          <Modal isOpen={showSecondDiv} onRequestClose={()=>{
            setShowSecondDiv(!showSecondDiv);
          }}
          style={EditStyle}>
            <div className="main-container">
              <form id="Modal-Form" onSubmit={(event) => handleOnSubmit(event)}>
                <h3>הוספת עובד</h3>

                <input
                  type="text"
                  id="W2"
                  name="workerName"
                  placeholder=" שם + שם משפחה"
                />
                <input
                  type="text"
                  id="W2"
                  name="serviceType"
                  placeholder="סוג איש מקצוע"
                />
                <input
                  type="number"
                  id="W3"
                  name="price"
                  placeholder="  מחיר/עלות הבדיקה  ₪"
                  min="0"
                />

                <div className="buttom-contaienr">
                  <button>הוספה</button>
                  {/* <button onClick={() => handleClick()}>
                    <BiExit />
                  </button> */}
                </div>
              </form>
              <div ref={ref} className=""></div>
            </div>
            </Modal> )}
          <div className="main-worker-list-container">
            <table>
              <thead>
              <tr>
                <th>שם עובד</th>
                <th>סוג עובד</th>
                <th>מחיר בדיקה</th>
                <th>עריכה</th>
                <th>הסרה</th>
              </tr>
              </thead>
              <tbody>
              {ServiceProviders.length !==1?
              ServiceProviders.map((item) => {
                return (
                  <tr>
                    <AddWorkerListCompany
                      item={item}
                      key={item._id}
                      setChange={setChange}
                      Change={Change}
                    />
                  </tr>
                );
              }):
              <tr id="Loading"></tr>
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
// input[type=text]:focus {
// background-color: lightblue;
// }
export default AddworkerCompany;
