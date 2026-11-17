function AnswerOption({ text, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={`answer-option ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(text)}
    >
      {text}
    </button>
  );
}

export default AnswerOption;