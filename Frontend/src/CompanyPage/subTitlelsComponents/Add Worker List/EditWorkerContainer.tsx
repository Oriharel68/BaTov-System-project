import { Dispatch, SetStateAction, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Url from '../../../ApiClient/Url';
import AxiosClient from '../../../ApiClient/AxiosClient';
import { Provider } from '../../../Types/Types';


interface EditWorkerContainerProps {
  Provider:Provider,
  setChange:Dispatch<SetStateAction<boolean>>,
  setShowSecondDiv:Dispatch<SetStateAction<boolean>>
}

function EditWorkerContainer({ Provider, setChange, setShowSecondDiv }: EditWorkerContainerProps) {
  const { Price, TypeOfService, WorkerName, _id } = Provider;

  const InputWokrerNameref = useRef<HTMLInputElement>();
  const InputTypeOfServiceref = useRef<HTMLInputElement>();
  const InputPriceNameref = useRef<HTMLInputElement>();

  async function handleEdit(event: any) {
    event.preventDefault();
    const WorkerName = InputWokrerNameref?.current?.value;
    const TypeOfService = InputTypeOfServiceref?.current?.value;
    const Price = InputPriceNameref?.current?.value;
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
        ref={InputWokrerNameref as any}
        placeholder={`שם + שם משפחה -- ${WorkerName}`}
      />

      <input
        type="text"
        id="W2"
        name="serviceType"
        ref={InputTypeOfServiceref as any}
        placeholder={`סוג איש מקצוע -- ${TypeOfService}`}
      />

      <input
        type="number"
        id="W3"
        name="price"
        ref={InputPriceNameref as any}
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
