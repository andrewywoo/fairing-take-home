import { useState } from "react";
import SessionQuestion from "./components/SessionQuestion";
import {
  question,
  question1,
  question2,
  question3,
} from "./constants/questions";
import "./App.css";

type session = {
  questions: question[];
  lastSeenQuestionIndex: number;
  response: string[][];
};

function App() {
  const [session, setSession] = useState<session>({
    questions: [],
    lastSeenQuestionIndex: 0,
    response: [],
  });

  return (
    <div className="App">
      {/* Show session question if state is empty */}
      {session.questions.length === 0 && <SessionQuestion />}
      {/* If not use session to figure out which question user is on. */}
    </div>
  );
}

export default App;
