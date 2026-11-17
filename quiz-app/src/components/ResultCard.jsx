function ResultCard({ total, correct, onRetake, onHome, loading, error }) {
  const incorrect = total - correct;
  const percentage = Math.round((correct / total) * 100);

  return (
    <div className="card result-card">
      <p className="subtitle">Quiz Completed</p>
      <h2>Your score:</h2>

      <div className="score-box">
        {correct} / {total}
      </div>

      <ul className="stats">
        <li>
          <span>Total Questions</span>
          <strong>{total}</strong>
        </li>
        <li>
          <span>Correct Answers</span>
          <strong className="good">{correct}</strong>
        </li>
        <li>
          <span>Incorrect Answers</span>
          <strong className="bad">{incorrect}</strong>
        </li>
        <li>
          <span>Final Score</span>
          <strong>
            {correct} / {total}
          </strong>
        </li>
        <li>
          <span>Percentage</span>
          <strong>{percentage}%</strong>
        </li>
      </ul>

      <div className="button-row">
        <button className="btn" onClick={onRetake} disabled={loading}>
          {loading ? "Loading..." : "Retake Quiz"}
        </button>
        <button className="btn btn-secondary" onClick={onHome}>
          Return Home
        </button>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default ResultCard;