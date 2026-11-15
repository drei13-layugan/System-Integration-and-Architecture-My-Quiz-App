const API_URL =
  "https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export async function fetchQuestions() {
  const res = await fetch(API_URL);

  if (res.status === 429) {
    throw new Error("Too many requests. Wait 5 seconds and try again.");
  }
  if (!res.ok) {
    throw new Error("Failed to load questions.");
  }

  const data = await res.json();

  if (data.response_code === 5) {
    throw new Error("Too many requests. Wait 5 seconds and try again.");
  }
  if (data.response_code !== 0) {
    throw new Error("No questions returned. Please try again.");
  }

  return data.results.map((item, index) => {
    const correctAnswer = decodeURIComponent(item.correct_answer);
    const incorrect = item.incorrect_answers.map((a) => decodeURIComponent(a));

    return {
      id: index + 1,
      question: decodeURIComponent(item.question),
      choices: shuffle([...incorrect, correctAnswer]),
      correctAnswer,
    };
  });
}