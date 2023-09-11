import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ClientNavBarOrderMain from '../nav/ClientNavBarOrderMain';
import Auth from '../FireBase/auth';
function OrderMain() {
  const [userAuth, setUserAuth] = useState(Auth);
  const [UserName, setUserName] = useState('');

  //אחרי שעושים ריפרש לדף הוא עדיין יהיה מחובר(הצג של השם פרטי+משפחה)--זה הפתרון
  useEffect(() => {
    const getUserName = () => {
      userAuth.onAuthStateChanged((user: any) => {
        setUserName(user.displayName);
      });
    };
    getUserName();
  }, []);

  return (
    <>
      <div className="page-wraper">
        <div className="mainClient-page-wraper">
          <ClientNavBarOrderMain />
          <div className="clientName-conatier">
            <h2 style={{ direction: 'rtl' }}>
              ברוך הבא👋 <h4>{UserName} </h4>
            </h2>
          </div>
          <div className="mainClient-page">
            <div className="order-buttonContainer-client">
              <Link to={'/order/newOrder'}>
                <button>הזמנה חדשה</button>
              </Link>
              <Link to={'/order/ExistingOrder'}>
                {' '}
                <button style={{ marginTop: '25px', paddingRight: '17px' }}>
                  הזמנה קיימת
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderMain;
