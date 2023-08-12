import React from "react";
import CombaibnedNavCompany from "../../nav/CombaibnedNavCompany";
import Fullcalender from "../Calenders/Fullcalender";

function CompnatCalenderDetaills() {
  return (
    <div>
      <CombaibnedNavCompany />
      <div className="calendar-Company-container">
        <Fullcalender />
      </div>
    </div>
  );
}

export default CompnatCalenderDetaills;
