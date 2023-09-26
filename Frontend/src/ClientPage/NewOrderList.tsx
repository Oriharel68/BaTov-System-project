import { memo } from 'react';
import { TbHandClick } from 'react-icons/tb';
import { Provider } from '../Types/Types';

interface NewOrderListProps {
  Provider:Provider,
  addServiceProvider:(provider:Provider)=>void,
}

function NewOrderList({ Provider, addServiceProvider }: NewOrderListProps) {
  const {TypeOfService,WorkerName} = Provider;
  return (
    <div className="workerType-wraper">
      <button
        style={{ display: 'flex', justifyContent: 'start' }}
        id="WokerType"
        onClick={() => addServiceProvider(Provider)}
      >
        <div className="btn-wraper">
          <div
            className="top-btn-container"
            style={{ borderBottom: '1px solid silver' }}
          >
            <span className="marker"> מקצוע: </span>
            {TypeOfService}
          </div>
          <div className="bootom-btn-container">
            <span className="marker">שם עובד : </span>
            {WorkerName}
          </div>
        </div>
        <TbHandClick style={{ position: 'absolute', left: '15px' }} />
      </button>
    </div>
  );
}
//אם הקומפננטה מעליו תיתרנדר אז הקומפוננטה הזאת לא תתרנדר
export default memo(NewOrderList);
