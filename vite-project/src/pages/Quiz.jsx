
import { useState } from "react";

function Quiz({ nextPage }) {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const options = [
    "Best Friend 😎",
    "Official Friend 🤝",
    "Permanent Friend ❤️",
    "All of the above 😂",
  ];

  const handleSubmit = () => {
    if (!selected) return;

    // Final quiz answer save karo
    localStorage.setItem(
      "pallaviFriendshipQuizAnswer",
      selected
    );

    setSubmitted(true);
  };

  const handleCertificate = () => {
    // Quiz answer already saved hai
    nextPage("certificate");
  };

  return (
    <div className="page">
      <div className="card">

        <div className="emoji-big">😂</div>

        <h1 className="title">
          Final Friendship Quiz
        </h1>

        <div className="question">

          <h3>
            Question: Gaurav aur Pallavi ki friendship
            ka status kya hona chahiye?
          </h3>

          <div className="options">

            {options.map((option) => (
              <div
                key={option}
                className={`option ${
                  selected === option
                    ? "selected"
                    : ""
                }`}
                onClick={() => {
                  if (!submitted) {
                    setSelected(option);
                  }
                }}
              >
                {option}
              </div>
            ))}

          </div>

        </div>

        {!submitted && selected && (
          <button
            className="main-btn"
            onClick={handleSubmit}
          >
            Submit Answer ✅
          </button>
        )}

        {submitted && (
          <div className="quiz-result">

            <h2>🎉 Congratulations!</h2>

            <p>
              Aapne Friendship Quiz successfully complete
              kar liya hai. 😂
            </p>

            <p>
              Selected Answer:
              <strong> {selected}</strong>
            </p>

            <button
              className="main-btn"
              onClick={handleCertificate}
            >
              🏆 Get Certificate
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Quiz;