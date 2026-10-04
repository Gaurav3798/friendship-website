function Welcome({ nextPage }) {
  return (
    <div className="page welcome-page">

      {/* Floating Decorations */}
      <div className="welcome-butterfly butterfly-1">🦋</div>
      <div className="welcome-butterfly butterfly-2">🦋</div>
      <div className="welcome-butterfly butterfly-3">🦋</div>

      <div className="welcome-flower flower-1">🌸</div>
      <div className="welcome-flower flower-2">🌷</div>
      <div className="welcome-flower flower-3">🌼</div>
      <div className="welcome-flower flower-4">🌸</div>

      <div className="welcome-heart heart-1">❤️</div>
      <div className="welcome-heart heart-2">💗</div>

      <div className="welcome-sparkle sparkle-1">✦</div>
      <div className="welcome-sparkle sparkle-2">✧</div>
      <div className="welcome-sparkle sparkle-3">✨</div>

      {/* Main Card */}
      <div className="card welcome-card">

        {/* Top Heading */}
        <div className="welcome-top">
          <span>✨</span>
          <p>A LITTLE SOMETHING FOR YOU</p>
          <span>✨</span>
        </div>

        {/* Teddy */}
        <div className="welcome-teddy">
          🧸
        </div>

        {/* Greeting */}
        <p className="welcome-small">
          Hello Miss Pallavi! 🌷
        </p>

        {/* Main Title */}
        <h1 className="welcome-title">
          I Made Something
          <br />
          <span>Just For You ❤️</span>
        </h1>

        {/* Subtitle */}
        <p className="welcome-subtitle">
          Ye koi normal website nahi hai...
          <br />
          thodi si creativity hai 🎨,
          <br />
          thodi si masti hai 😂,
          <br />
          aur honestly... thoda sa dil bhi laga hai. 🌸
        </p>

        {/* Main Message */}
        <div className="welcome-message">

          <div className="message-icon">
            💌
          </div>

          <p>
            Sach kahun toh iske peeche koi special occasion nahi hai...
          </p>

          <p>
            Bas mann kiya ki aapke liye kuch aisa kiya jaaye
            <br />
            jo dekhkar aapke face par ek genuine si smile aa jaaye. 😊
          </p>

          <div className="message-line"></div>

          <p className="highlight-message">
            Pata nahi kyun, par mujhe laga ki...
            <br />
            <strong>
              "Chalo, Madam  ke liye kuch different karte hain." 🌷
            </strong>
          </p>

          <p>
            Aur phir socha...
            <br />
            <strong>
              Effort bhale he chhota ho, agar kisi ke din ko
              <br />
              thoda better bana sake, toh effort karne mein kya jaata hai. ❤️
            </strong>
          </p>

          <div className="message-line"></div>

          <p className="highlight-message">
            Toh ye wahi chhoti si effort hai...
            <br />
            <strong>
              Sirf aapke liye. 🦋
            </strong>
          </p>

        </div>

        {/* Curiosity Box */}
        <div className="curiosity-box">

          <span>👀</span>

          <div>
            <strong>
              Waise... ek chhoti si warning hai 😌
            </strong>

            <p>
              Maine yahan thoda time lagaya hai,
              <br />
              toh ab bina dekhe jaane nahi dunga. 😂
              <br />
              Aage ka surprise khud dekhna padega... ✨
            </p>
          </div>

          <span>🦋</span>

        </div>

        {/* Button */}
        <button
          className="welcome-btn"
          onClick={() => nextPage("letter")}
        >
          <span>💌</span>
          Open Your Surprise
          <span>➜</span>
        </button>

        {/* Bottom Message */}
        <p className="welcome-bottom">
          Made with genuine care, a little creativity & lots of good vibes. 🌷
        </p>

        {/* Bottom Flowers */}
        <div className="welcome-flowers">
          🌷 🌸 🦋 🌸 🌷
        </div>

      </div>
    </div>
  );
}

export default Welcome;