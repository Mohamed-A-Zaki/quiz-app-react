import React, { memo, useContext } from "react";
import { context_question } from "../App";

const Info = () => {
  let questions_count = useContext(context_question).length;

  return (
    <div className="info">
      <div className="category">
        Category : <span>HTML</span>
      </div>
      <div className="q-count">
        Questions Count : <span>{questions_count}</span>
      </div>
    </div>
  );
};

export default memo(Info);
