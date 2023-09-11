import { useState } from 'react';
import EditWorkerContainer from './EditWorkerContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineUserDelete } from 'react-icons/ai';
import Modal from 'react-modal';
import EditStyle from './EditDialogStyle';
import Url from '../../../ApiClient/Url';
import AxiosClient from '../../../ApiClient/AxiosClient';
function AddWorkerListCompany({ item, setChange, Change }: any) {
  const { Price, TypeOfService, WorkerName } = item;
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  function handleClick() {
    setShowSecondDiv(!showSecondDiv);
  }

  async function handleRemove(event: any) {
    try {
      const response = await AxiosClient.post(`${Url}/removeworker`, {
        WorkerName,
      });

      if (response.status !== 200) {
        return toast.error(`מחיקת העובד נכשלה`);
      }
      setChange(Change + 1);
      toast.success('העובד נמחק בהצלחה');
    } catch (error) {
      toast.error(`מחיקת העובד נכשלה`);
    }
  }
  return (
    <>
      <td>{WorkerName}</td>
      <td>{TypeOfService}</td>
      <td>{Price}₪</td>
      <td id="btnAddRemove">
        <button onClick={() => handleClick()}>
          <FiEdit3 />
        </button>
      </td>

      <td id="btnAddRemove">
        <button onClick={(event: any) => handleRemove(event)} name="WorkerName">
          <AiOutlineUserDelete />
        </button>
      </td>

      {showSecondDiv && (
        <Modal
          isOpen={showSecondDiv}
          onRequestClose={() => {
            setShowSecondDiv(!showSecondDiv);
          }}
          style={EditStyle as any}>
          <EditWorkerContainer
            setShowSecondDiv={setShowSecondDiv}
            item={item}
            Change={Change}
            setChange={setChange}
          />
        </Modal>
      )}
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
    </>
  );
}

export default AddWorkerListCompany;
