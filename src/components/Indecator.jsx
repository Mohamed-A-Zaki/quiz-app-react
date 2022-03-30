import React, { memo, useContext } from "react";
import { context_question } from "../App";

const Indecator = ({ q_number }) => {
  let questions = useContext(context_question);

  return (
    <div className="indecator">
      {/* start bullets */}
      <div className="bullets">
        {/* start map on questions to create bullets */}
        {questions.map(({ id }) => {
          return (
            <span key={id} className={id <= q_number ? "active" : null}></span>
          );
        })}
        {/* end map on questions to create bullets */}
      </div>
      {/* end bullets */}

      {/* start time */}
      <div className="time">
        <span className="minuted">02</span> :
        <span className="secondes">30</span>
      </div>
      {/* end time */}
    </div>
  );
};

export default memo(Indecator);
