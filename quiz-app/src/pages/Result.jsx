import { Navigate, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

function Result({ result, onRetake, loading, error }) {
  const navigate = useNavigate();

  // Opened /result directly without finishing a quiz
  if (!result) return <Navigate to="/" replace />;

  return (
    <ResultCard
      total={result.total}
      correct={result.score}
      onRetake={onRetake}
      onHome={() => navigate("/")}
      loading={loading}
      error={error}
    />
  );
}

export default Result;