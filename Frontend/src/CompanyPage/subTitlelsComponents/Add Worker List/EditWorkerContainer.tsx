import axios from 'axios';
import React, { Ref, RefObject, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Url from '../../../ApiClient/Url';
import AxiosClient from '../../../ApiClient/AxiosClient';

function EditWorkerContainer({
  item,
  Change,
  setChange,
  setShowSecondDiv,
}: any) {
  const { Price, TypeOfService, WorkerName, _id } = item;

  const InputWokrerNameref: any = useRef();
  const InputTypeOfServiceref: any = useRef();
  const InputPriceNameref: any = useRef();

  async function handleEdit(event: any) {
    event.preventDefault();
    const WorkerName = InputWokrerNameref?.current?.value;
    const TypeOfService = InputTypeOfServiceref.current.value;
    const Price = InputPriceNameref.current.value;
    // InputTypeOfServiceref
    // InputPriceNameref
    try {
      if (!Price || !TypeOfService || !TypeOfService) {
        // alert("missing info");
        // ref.current.style.color = "red";
        // ref.current.innerText = "חסר מידע -בבקשה השלם את כל המידע הנדרש";
        toast.error('אנא השלם את המידע הנדרש', {
          // position: "bottom-center",
          // autoClose: 2000,
          // hideProgressBar: false,
          // closeOnClick: true,
          // progress: undefined,
          // theme: "dark",
        });
        return;
      }
      let { data } = await AxiosClient.post(`${Url}/EditCompanyWorker`, {
        _id,
        WorkerName,
        TypeOfService,
        Price,
      });
      console.log(data);
      setChange(Change + 1);
      setShowSecondDiv(false);
      toast.success('עודכן בהצלחה', {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="Editing-container">
      {/* <ToastContainer /> */}
      <h3>עריכה</h3>
      <input
        type="text"
        id="W2"
        name="workerName"
        ref={InputWokrerNameref}
        placeholder={`שם + שם משפחה -- ${WorkerName}`}
      />

      <input
        type="text"
        id="W2"
        name="serviceType"
        ref={InputTypeOfServiceref}
        placeholder={`סוג איש מקצוע -- ${TypeOfService}`}
      />

      <input
        type="number"
        id="W3"
        name="price"
        ref={InputPriceNameref}
        placeholder={`מחיר /עלות בדיקה-- ${Price}`}
        min="0"
      />
      <button
        onClick={(event) => handleEdit(event)}
        className="button-30"
        role="button"
      >
        בצע שינוי{' '}
      </button>
      <button id="close" onClick={() => setShowSecondDiv(false)}>
        close
      </button>
    </div>
  );
}

export default EditWorkerContainer;
