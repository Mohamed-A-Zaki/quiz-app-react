import React, { memo, useContext } from "react";
import { context_question } from "../App";

const Question = ({ q_number }) => {
  let question = useContext(context_question)[q_number - 1];

  function check_question() {
    if (question) {
      const { id, title, answer_1, answer_2, answer_3, answer_4 } = question;

      const answers = [answer_1, answer_2, answer_3, answer_4];

      return (
        <>
          {/* start title of question */}
          <div className="title">
            <span className="q-number">{id}</span>
            {title}
          </div>
          {/* end title of question */}

          {/* start choices of questions */}
          <div className="choices">
            {answers.map((ans, index) => {
              return (
                <div className="choice" key={index}>
                  <input type="radio" id={`choice_${index}`} name="answer" />
                  <label htmlFor={`choice_${index}`}>{ans}</label>
                </div>
              );
            })}
          </div>
          {/* end choices of questions */}
        </>
      );
    }else {
      return <div className="error">Error!</div>
    }
  }

  return <div className="question">{check_question()}</div>;
};

export default memo(Question);
