import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { fetchQuestions } from "./api/fetchQuestions";

function App() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetches a fresh set of random questions, then opens the quiz
  const loadQuiz = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchQuestions();
      setQuestions(data);
      navigate("/quiz");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Home onStart={loadQuiz} loading={loading} error={error} />}
        />
        <Route
          path="/quiz"
          element={<Quiz questions={questions} onFinish={setResult} />}
        />
        <Route
          path="/result"
          element={
            <Result
              result={result}
              onRetake={loadQuiz}
              loading={loading}
              error={error}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;