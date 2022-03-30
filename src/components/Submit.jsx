import React from "react";

const Submit = ({ get_next_question }) => {
  return (
    <div className="submit" onClick={get_next_question}>
      Submit Answer
    </div>
  );
};

export default Submit;
