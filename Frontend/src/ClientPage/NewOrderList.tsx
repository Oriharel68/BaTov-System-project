import { memo } from 'react';
import { TbHandClick } from 'react-icons/tb';

function NewOrderList({ item, addServiceProvider }: any) {
  return (
    <div className="workerType-wraper">
      <button
        style={{ display: 'flex', justifyContent: 'start' }}
        id="WokerType"
        onClick={() => addServiceProvider(item)}
      >
        <div className="btn-wraper">
          <div
            className="top-btn-container"
            style={{ borderBottom: '1px solid silver' }}
          >
            <span className="marker"> מקצוע: </span>
            {item.TypeOfService}
          </div>
          <div className="bootom-btn-container">
            <span className="marker">שם עובד : </span>
            {item.WorkerName}
          </div>
        </div>
        <TbHandClick style={{ position: 'absolute', left: '15px' }} />
      </button>
    </div>
  );
}
//אם הקומפננטה מעליו תיתרנדר אז הקומפוננטה הזאת לא תתרנדר
export default memo(NewOrderList);
