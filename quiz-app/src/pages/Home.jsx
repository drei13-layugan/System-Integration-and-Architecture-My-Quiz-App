function Home({ onStart, loading, error }) {
  return (
    <div className="home">
      <p className="welcome">Welcome to the</p>
      <h1>Frontend Quiz!</h1>
      <p className="description">
        Test your knowledge with 10 random multiple-choice questions. Every
        round is different!
      </p>

      <button className="btn" onClick={onStart} disabled={loading}>
        {loading ? "Loading questions..." : "Start Quiz"}
      </button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Home;