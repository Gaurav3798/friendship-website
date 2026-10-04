import { useState } from "react";
import { trackActivity } from "../services/tracking";

function Questions({ nextPage }) {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      question: "Friendship mein sabse important kya hai? ❤️",
      options: [
        "Trust ❤️",
        "Masti 😂",
        "Understanding 🫶",
        "Sab kuch 😌",
      ],
    },

    {
      question: "Agar Gaurav late reply kare toh? 😂",
      options: [
        "Wait karungi 😌",
        "Ek aur message karungi 😂",
        "Thoda sa gussa karungi 😤",
        "Phir bhi reply ka wait rahega ❤️",
      ],
    },

    {
      question:
        "Agar tumhara mood off ho toh Gaurav ko kya karna chahiye? 👀",
      options: [
        "Mujhe thoda space deni chahiye 🌸",
        "Baat karke mood theek karna chahiye 🫶",
        "Masti karke hasana chahiye 😂",
        "Bas mere saath rehna chahiye ❤️",
      ],
    },

    {
      question:
        "Pallavi, agar mujhe hamesha aapke saath rehna ho, toh mujhe kya karna hoga? 👀❤️",
      options: [
        "Hamesha mujhe hasate rehna 😂❤️",
        "Mera saath kabhi nahi chhodna 🫶",
        "Mujhe hamesha samajhna aur care karna ❤️",
        "Bas mere saath rehna... baaki sab main sambhal lungi 😌❤️",
      ],
    },

    {
      question:
        "Ek honest question... Kya aapko main pasand hoon? 👀❤️",
      options: [
        "Haan, bahut 😊❤️",
        "Haan... thoda zyada hi 😌",
        "Karte to huu... pr usko btana nhi cahte 🤭",
        "Iska jawab shayad meri smile de rahi hai ❤️",
      ],
    },
  ];

  const selectAnswer = (index, answer) => {
    const updatedAnswers = {
      ...answers,
      [index]: answer,
    };

    setAnswers(updatedAnswers);

    localStorage.setItem(
      "pallaviFriendshipAnswers",
      JSON.stringify(updatedAnswers)
    );

    trackActivity(
      "Questions",
      `question_${index + 1}_answered`,
      answer
    );
  };

  const allAnswered =
    Object.keys(answers).length === questions.length;

  const handleContinue = () => {
    localStorage.setItem(
      "pallaviFriendshipAnswers",
      JSON.stringify(answers)
    );

    trackActivity(
      "Questions",
      "all_questions_completed",
      `${questions.length} questions answered`
    );

    nextPage("quiz");
  };

  return (
    <div className="page">
      <div className="card">

        <div className="emoji-big">
          ❓
        </div>

        <h1 className="title">
          Friendship Questions
        </h1>

        <p className="subtitle">
          Chaliye dekhte hain aap friendship ke rules
          ko kitna seriously leti hain. 😂❤️
        </p>

        <div style={{ marginTop: "30px" }}>
          {questions.map((item, index) => (
            <div
              className="question"
              key={index}
            >
              <h3>
                {index + 1}. {item.question}
              </h3>

              <div className="options">
                {item.options.map((option) => (
                  <div
                    key={option}
                    className={`option ${
                      answers[index] === option
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      selectAnswer(index, option)
                    }
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {allAnswered && (
          <div className="quiz-result">

            <h2>
              🎉 All Questions Answered!
            </h2>

            <p>
              Answers successfully submitted.
              <br />
              Friendship Department is impressed. 😂❤️
            </p>

            <button
              className="main-btn"
              onClick={handleContinue}
            >
              Continue to Quiz ➜
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Questions;