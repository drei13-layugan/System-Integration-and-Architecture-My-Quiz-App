function QuizHeader({ current, total }) {
  return (
    <div className="quiz-header">
      <h2>Frontend Quiz</h2>
      <span>
        Question {current} of {total}
      </span>
    </div>
  );
}

export default QuizHeader;