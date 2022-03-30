// import css file
import "./App.scss";

// import react
import { createContext, useCallback, useEffect, useState } from "react";

// import axios
import axios from "axios";

// import react toast
import { toast, ToastContainer } from "react-toastify";

// import components
import Finish from "./components/Finish";
import Indecator from "./components/Indecator";
import Info from "./components/Info";
import Question from "./components/Question";
import Result from "./components/Result";
import Submit from "./components/Submit";

// start contexts
export let context_question = createContext();

function App() {
  const [questions, setQuestions] = useState([]);
  const [q_number, setQ_number] = useState(1);

  useEffect(() => {
    axios
      .get("/quiz-app-react/json/api.json")
      .then(({ data }) => {
        setQuestions(data);
      })
      .catch((err) => {
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }, []);

  let get_next_question = useCallback(() => {
    if (q_number <= questions.length) {
      setQ_number(q_number + 1);
    }
  }, [q_number, questions]);

  return (
    <div className="App">
      <div className="container">
        <h1>Quiz App</h1>

        <context_question.Provider value={questions}>
          {/* render info component */}
          <Info />
          {/* render question or finish message */}
          <div className="content">
            {q_number < 10 ? <Question q_number={q_number} /> : <Finish />}
          </div>
          {/* render sumbit && indecator || result component*/}
          {q_number < 10 ? (
            <>
              <Submit get_next_question={get_next_question} />
              <Indecator q_number={q_number} />
            </>
          ) : (
            <Result />
          )}
        </context_question.Provider>

        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default App;
