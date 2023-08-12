import React, { useEffect } from "react";
import ClientNavBar from "../../nav/ClientNavBar";
import ClientNavBarOrderMain from "../../nav/ClientNavBarOrderMain";
import { useNavigate } from "react-router-dom";

function OrderCompelteMessage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/order/main");
    }, 3000);
  }, []);
  return (
    <div>
      <div className="page-wraper">
        {/* bdika vdika */}
        {/* <ClientNavBar/> */}

        <div className="mainClient-page-wraper">
          <ClientNavBarOrderMain />

          <div className="mainClient-page">
            <div className="RegisterMessage">
              <div className="alert-popup-container">
                <div className="success-checkmark">
                  <div className="check-icon">
                    <span className="icon-line line-tip"></span>
                    <span className="icon-line line-long"></span>
                    <div className="icon-circle"></div>
                    <div className="icon-fix"></div>
                  </div>
                </div>
                <div className="alert-popup-title">Success!!!</div>
                <div className="alert-popup-message">נקלט במערכת בהצלחה</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCompelteMessage;
