import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

function Quiz({ questions, onFinish }) {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  // Opened /quiz directly with no questions loaded
  if (questions.length === 0) return <Navigate to="/" replace />;

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  const handleNext = () => {
    // Record whether the answer is correct
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);

    if (isLast) {
      // Quiz completion + score calculation
      onFinish({ score: newScore, total: questions.length });
      navigate("/result");
    } else {
      // Move to the next question
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="quiz-page">
      <QuizHeader current={currentIndex + 1} total={questions.length} />
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <QuestionCard
        questionNumber={currentQuestion.id}
        questionText={currentQuestion.question}
        choices={currentQuestion.choices}
        selectedAnswer={selectedAnswer}
        onSelect={setSelectedAnswer}
        onNext={handleNext}
        isLast={isLast}
      />
    </div>
  );
}

export default Quiz;