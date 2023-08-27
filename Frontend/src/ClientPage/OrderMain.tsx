import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ClientNavBar from '../nav/ClientNavBar';
import { getAuth } from 'firebase/auth';
import ClientNavBarOrderMain from '../nav/ClientNavBarOrderMain';
import Auth from '../FireBase/auth';
function OrderMain() {
  const navigate = useNavigate();
  const [userAuth, setUserAuth] = useState(Auth);
  const [UserName, setUserName] = useState('');

  useEffect(() => {
    const getUserName = () => {
      userAuth.onAuthStateChanged((user: any) => {
        setUserName(user.displayName);
      });
    };
    getUserName();
  }, []);

  return (
    <div>
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
              {/* change the client order list:*/}
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
    </div>
  );
}

export default OrderMain;
