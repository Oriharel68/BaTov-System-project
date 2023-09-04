import React, { useCallback, useEffect, useRef, useState } from 'react';
import CombaibnedNavCompany from '../../nav/CombaibnedNavCompany';
import AddWorkerListCompany from './Add Worker List/AddWorkerListCompany';
// import ServerStatus from "../FireBase/ServerStatus";

import Modal from 'react-modal';
import EditStyle from './Add Worker List/EditDialogStyle';
import { ToastContainer, toast } from 'react-toastify';
import Url from '../../ApiClient/Url';
import AxiosClient from '../../ApiClient/AxiosClient';
function AddworkerCompany() {
  const [ServiceProviders, setServiceProviders] = useState([]);
  const [Change, setChange] = useState(0);
  const [Visible, setVisible] = useState(false);
  const ref: any = useRef();
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  const handleClick = useCallback(() => {
    setShowSecondDiv(!showSecondDiv);
  }, [showSecondDiv]);

  async function handleOnSubmit(event: any) {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const WorkerName = formData.get('workerName');
      const TypeOfService = formData.get('serviceType');
      const Price = formData.get('price');

      if (!Price || !TypeOfService || !TypeOfService) {
        toast.error(`חסר מידע -בבקשה השלם את כל המידע הנדרש`);

        return;
      }

      const { data } = await AxiosClient.put(`${Url}/addProvider`, {
        Price,
        WorkerName,
        TypeOfService,
      });

      if (!data.ok) {
        // alert("the user is alredy in us");
        ref.current.style.color = 'red';

        ref.current.style.fontWeight = 'bolder';
        ref.current.innerText = data.error;
        return;
      } else if (data.ok) {
        setChange(Change + 1);
        handleClick();
        setVisible(false);
        toast.success('העובד נוסף בהצלחה');
      }
    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    async function getServiceProviders() {
      try {
        const response = await AxiosClient.get(`${Url}/getServiceProvider`);
        if(response?.status !== 200)return alert('שגיאה בעת בקשת עובדים');
        const {data} = response;
        setServiceProviders(data);
        setVisible(true);
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
          {showSecondDiv && (
            <Modal
              isOpen={showSecondDiv}
              onRequestClose={() => {
                setShowSecondDiv(!showSecondDiv);
              }}
              style={EditStyle as any}
            >
              <div className="main-container">
                <form
                  id="Modal-Form"
                  onSubmit={(event) => handleOnSubmit(event)}
                >
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
                  <button id="close" onClick={() => setShowSecondDiv(false)}>
                    close
                  </button>
                  <div ref={ref} className=""></div>
                  <div className="bottom-container">
                    <button className="button-30" role="button">
                      הוספה
                    </button>
                    {/* <button onClick={() => handleClick()}>
                    <BiExit />
                  </button> */}
                  </div>
                </form>
              </div>
            </Modal>
          )}
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
                {Visible ? (
                  ServiceProviders.map((item: any) => {
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
                  })
                ) : (
                  <tr className="loading">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
// input[type=text]:focus {
// background-color: lightblue;
// }
export default AddworkerCompany;
