
import { useState, useEffect } from "react";

import Welcome from "./pages/Welcome";
import Letter from "./pages/Letter";
import Approval from "./pages/Approval";
import Gift from "./pages/Gift";
import Questions from "./pages/Questions";
import Quiz from "./pages/Quiz";
import Certificate from "./pages/Certificate";

import { trackActivity } from "./services/tracking";

function App() {
  const [page, setPage] = useState("welcome");

  // ======================================
  // PAGE OPEN TRACKING
  // ======================================
  useEffect(() => {
    const pageNames = {
      welcome: "Welcome",
      letter: "Letter",
      questions: "Questions",
      quiz: "Quiz",
      certificate: "Certificate",
      approval: "Approval",
      gift: "Gift",
    };

    trackActivity(
      pageNames[page] || page,
      "page_opened"
    );
  }, [page]);

  // ======================================
  // CHANGE PAGE
  // ======================================
  const nextPage = (next) => {
    setPage(next);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Welcome */}
      {page === "welcome" && (
        <Welcome nextPage={nextPage} />
      )}

      {/* Letter */}
      {page === "letter" && (
        <Letter nextPage={nextPage} />
      )}

      {/* Questions */}
      {page === "questions" && (
        <Questions nextPage={nextPage} />
      )}

      {/* Quiz */}
      {page === "quiz" && (
        <Quiz nextPage={nextPage} />
      )}

      {/* Certificate */}
      {page === "certificate" && (
        <Certificate nextPage={nextPage} />
      )}

      {/* Approval */}
      {page === "approval" && (
        <Approval nextPage={nextPage} />
      )}

      {/* Gift */}
      {page === "gift" && (
        <Gift nextPage={nextPage} />
      )}
    </>
  );
}

export default App;
