import AnswerOption from "./AnswerOption";

function QuestionCard({
  questionNumber,
  questionText,
  choices,
  selectedAnswer,
  onSelect,
  onNext,
  isLast,
}) {
  return (
    <div className="card question-card">
      <p className="question-number">Question {questionNumber}</p>
      <h3 className="question-text">{questionText}</h3>

      <div className="answers">
        {choices.map((choice) => (
          <AnswerOption
            key={choice}
            text={choice}
            isSelected={selectedAnswer === choice}
            onSelect={onSelect}
          />
        ))}
      </div>

      <button
        className="btn"
        onClick={onNext}
        disabled={selectedAnswer === null}
      >
        {isLast ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default QuestionCard;