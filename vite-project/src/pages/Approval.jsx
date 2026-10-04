
import { useState } from "react";
import { approveFriendship } from "../services/api";

function Approval({ nextPage }) {
  const [loading, setLoading] = useState(false);

  const handleApproval = async () => {
    if (loading) return;

    try {
      setLoading(true);

      // ======================================
      // Questions ke answers localStorage se lo
      // ======================================
      const savedAnswers = JSON.parse(
        localStorage.getItem("pallaviFriendshipAnswers") || "{}"
      );

      // Answers ko ordered array mein convert karo
      const answerList = Object.keys(savedAnswers)
        .sort((a, b) => Number(a) - Number(b))
        .map((key) => savedAnswers[key]);

      // ======================================
      // Quiz ka answer localStorage se lo
      // ======================================
      const quizAnswer =
        localStorage.getItem("pallaviFriendshipQuizAnswer") || "";

      // ======================================
      // Complete friendship data
      // ======================================
      const friendshipData = {
        name: "Pallavi",
        answers: answerList,
        quizAnswer: quizAnswer,
        approved: true,
        message:
          "Pallavi officially approved the friendship ❤️",
      };

      console.log(
        "Sending friendship data:",
        friendshipData
      );

      // ======================================
      // MongoDB backend ko data bhejo
      // ======================================
      const result =
        await approveFriendship(friendshipData);

      console.log(
        "Friendship saved successfully:",
        result
      );

      // ======================================
      // Save successful → Gift page
      // ======================================
      nextPage("gift");

    } catch (error) {
      console.error(
        "Approval Error:",
        error
      );

      alert(
        "Oops! Approval save nahi ho paya 😅\n\nPlease make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page approval-page">

      <div className="card approval-card">

        <div className="approval-icon">
          💌
        </div>

        <p className="small-heading">
          ONE LAST FORMALITY
        </p>

        <h1>
          Friendship Approval
          <br />
          <span>Required ❤️</span>
        </h1>

        <p className="approval-intro">
          Ab officially friendship approve karne ka
          time aa gaya hai. 😌
        </p>

        <div className="approval-letter">

          <div className="approval-stamp">
            FRIENDSHIP
            <br />
            DEPARTMENT
          </div>

          <h2>
            Dear Pallavi,
          </h2>

          <p>
            Aapne ab tak jo bhi rules padhe hain,
            unke baad ab decision aapka hai. 😌
          </p>

          <p>
            Agar aap officially is friendship ko
            accept karti hain, toh neeche button
            press karke approval de sakti hain. ❤️
          </p>

          <p>
            Aur haan...
            <br />
            <strong>
              Ek baar approve kar diya toh cancel
              karna thoda mushkil hoga. 😂
            </strong>
          </p>

        </div>

        <div className="approval-question">

          <h2>
            So... Are You Ready? 🦋
          </h2>

          <p>
            Kya aap is friendship ko officially
            approve karti hain?
          </p>

        </div>

        <div className="approval-buttons">

          <button
            className="main-btn approval-yes"
            onClick={handleApproval}
            disabled={loading}
          >
            {loading
              ? "⏳ SAVING..."
              : "❤️ YES, I APPROVE"}
          </button>

          <button
            className="secondary-btn"
            onClick={handleApproval}
            disabled={loading}
          >
            {loading
              ? "⏳ SAVING..."
              : "😌 Obviously"}
          </button>

        </div>

        <p className="approval-note">
          * By clicking any button above, you officially
          agree to the friendship terms & conditions. 😂
        </p>

      </div>

    </div>
  );
}

export default Approval;
