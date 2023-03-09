import { useState } from "react";
import SessionQuestion from "./components/SessionQuestion";
import { getRelevantQuestionsForUser } from "./service/session";
import { question, questionList } from "./constants/questions";
import "./App.css";

type session = {
  questions: question[];
  lastSeenQuestionIndex: number;
  response: string[][];
};

const INITIAL_STATE = {
  questions: [],
  lastSeenQuestionIndex: 0,
  response: [],
};

function App() {
  const [session, setSession] = useState<session>(INITIAL_STATE);

  const handleSessionQuestionSubmit = (event) => {
    const customerType = event.target.customerType.value;
    const location = event.target.location.value;
    const purchased = [
      ...(event.target.redShirt.checked ? ["redShirt"] : []),
      ...(event.target.blackJeans.checked ? ["blackJeans"] : []),
      ...(event.target.blueSweater.checked ? ["blueSweater"] : []),
    ];

    const sessionValues = { customerType, location, purchased };
    const questionsToAdd = getRelevantQuestionsForUser(
      sessionValues,
      questionList
    );

    setSession((prevState) => ({ ...prevState, questions: questionsToAdd }));

    event.preventDefault();
  };

  return (
    <div className="App">
      {session.questions.length === 0 ? (
        <SessionQuestion handleOnSubmit={handleSessionQuestionSubmit} />
      ) : (
        <div>{JSON.stringify(session)}</div>
      )}
    </div>
  );
}

export default App;
