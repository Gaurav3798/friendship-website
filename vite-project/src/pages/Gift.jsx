import { useEffect, useState } from "react";
import GiftBox from "../components/GiftBox";

function Gift({ nextPage }) {
  const [opened, setOpened] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  const handleOpen = () => {
    setOpened(true);

    setTimeout(() => {
      setCelebrate(true);
    }, 150);
  };

  useEffect(() => {
    if (!celebrate) return;

    const timer = setTimeout(() => {
      setCelebrate(false);
    }, 4200);

    return () => clearTimeout(timer);
  }, [celebrate]);

  return (
    <div className={`page gift-page ${opened ? "gift-is-opened" : ""}`}>

      {!opened ? (
        <div className="gift-card card">

          <div className="gift-top-decoration">
            ✨ 💗 ✨
          </div>

          <p className="small-heading">
            A LITTLE SURPRISE FOR YOU
          </p>

          <h1>
            There's Something
            <br />
            <span>Special Waiting 🎁</span>
          </h1>

          <p className="gift-intro">
            Itna sab padhne ke baad...
            <br />
            ek chhota sa surprise toh banta hai. 😌
          </p>

          <GiftBox onOpen={handleOpen} />

          <p className="gift-bottom-note">
            Made with a little effort,
            <br />
            and a lot of good vibes. 💗
          </p>

        </div>
      ) : (
        <div className="gift-reveal-card">

          {celebrate && (
            <div className="gift-celebration" aria-hidden="true">
              <span className="confetti c1">✦</span>
              <span className="confetti c2">♥</span>
              <span className="confetti c3">✧</span>
              <span className="confetti c4">🎉</span>
              <span className="confetti c5">♡</span>
              <span className="confetti c6">✦</span>
              <span className="confetti c7">♥</span>
              <span className="confetti c8">✧</span>
            </div>
          )}

          <div className="reveal-sparkles">
            <span>✦</span>
            <span>♡</span>
            <span>✧</span>
            <span>♥</span>
            <span>✦</span>
          </div>

          <div className="reveal-teddy">
            🧸
            <span className="teddy-heart">❤️</span>
          </div>

          <p className="reveal-small-heading">
            🎉 CONGRATULATIONS PALLAVI 🎉
          </p>

          <h1 className="reveal-title">
            You Just Unlocked
            <br />
            <span>A Very Special Gift! ✨</span>
          </h1>

          <p className="reveal-subtitle">
            Friendship Department ne officially decide kiya hai...
            <br />
            ki ye gift sirf ek special person ko milna chahiye. 😌
          </p>

          <div className="voucher-card">

            <div className="voucher-top">
              <span>💌 FRIENDSHIP DEPARTMENT</span>
              <span>NO. 001 ❤️</span>
            </div>

            <div className="voucher-content">

              <div className="voucher-icon">
                🎟️
              </div>

              <div className="voucher-text">
                <p className="voucher-label">
                  OFFICIAL FRIENDSHIP GIFT VOUCHER
                </p>

                <h2>
                  One Memorable Day
                  <br />
                  <span>With Gaurav 🌷</span>
                </h2>

                <p>
                  This voucher can be redeemed for
                  <strong> one special outing with Gaurav</strong> —
                  kahin bhi jahan dono milkar ek achhi memory bana sakein. 🦋
                </p>

                <div className="voucher-perks">
                  <span>☕ Chai / Coffee</span>
                  <span>📸 Photos</span>
                  <span>🚗 Little Trip</span>
                  <span>😂 Unlimited Fun</span>
                </div>
              </div>

            </div>

            <div className="voucher-bottom">
              <span>VALID: FOREVER ♾️</span>
              <span>VALUE: ONE BEAUTIFUL MEMORY 💗</span>
            </div>

          </div>

          <div className="gift-final-message">
            <strong>Terms & Conditions:</strong>
            <br />
            No expiry. No cash value. No cancellation. 😌
            <br />
            Bas ek condition hai...
            <strong> memory achhi honi chahiye. 😂❤️</strong>
          </div>

          <button
            className="reveal-continue-btn"
            onClick={() => nextPage("questions")}
          >
            Continue Your Surprise
            <span>→</span>
          </button>

        </div>
      )}

    </div>
  );
}

export default Gift;
