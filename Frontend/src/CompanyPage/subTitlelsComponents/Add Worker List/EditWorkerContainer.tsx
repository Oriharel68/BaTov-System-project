import { useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Url from '../../../ApiClient/Url';
import AxiosClient from '../../../ApiClient/AxiosClient';

function EditWorkerContainer({ Provider, setChange, setShowSecondDiv }: any) {
  const { Price, TypeOfService, WorkerName, _id } = Provider;

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
        toast.error('אנא השלם את המידע הנדרש');
        return;
      }
      let { data } = await AxiosClient.post(`${Url}/EditCompanyWorker`, {
        _id,
        WorkerName,
        TypeOfService,
        Price,
      });
      console.log(data);
      setChange((prev:boolean)=>!prev);
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
      <button onClick={(event) => handleEdit(event)} className="button-30" role="button">
        בצע שינוי{' '}
      </button>
      <button id="close" onClick={() => setShowSecondDiv(false)}>
        close
      </button>
    </div>
  );
}

export default EditWorkerContainer;
