function Letter({ nextPage }) {
  const rules = [
    {
      title: "Rule 01 — Reply Department 📱",
      text: 'Message ka reply dena optional nahi hai. Minimum reply: "Haan", "Accha", "😂". Seen karke gayab hona serious violation maana jayega. 🚨',
    },
    {
      title: "Rule 02 — Boring Mood Allowed Nahi 😎",
      text: 'Agar mood off ho, toh officially batana padega. "Nothing" bolkar kuch na batana allowed nahi hai. 😂',
    },
    {
      title: "Rule 03 — Unlimited Masti Pass 🤡",
      text: "Mere saath random, funny aur unnecessary baatein karna completely allowed hai. Actually, encouraged hai. 😂",
    },
    {
      title: "Rule 04 — Gossip Confidentiality 🤫",
      text: "Jo baat Friendship Department ke andar hogi, woh bahar leak nahi honi chahiye. Leak hone par emergency meeting bulayi jayegi. 😂",
    },
    {
      title: "Rule 05 — Food Sharing 🍕",
      text: "Agar mere saamne kuch tasty khaya ja raha hai, toh usme mera legal share automatically included hoga. 😌",
    },
    {
      title: "Rule 06 — Emergency Friendship Support 🚨",
      text: 'Zarurat padne par support available rahega. Lekin agar reason ho "bas bore ho rahi thi", toh fine lag sakta hai. 😂',
    },
    {
      title: "Rule 07 — Ego-Free Zone ❤️",
      text: "Choti-moti baaton par ego laana strictly prohibited hai. Ladai ho sakti hai, par friendship cancel nahi hogi. 😌",
    },
    {
      title: "Rule 08 — Birthday Protocol 🎂",
      text: "Birthday wish mandatory hai. Late wish = explanation required. Birthday bhoolna = Friendship Court mein case chalega. ⚖️😂",
    },
    {
      title: "Rule 09 — Nickname Permission 😏",
      text: "Friendship ke dauraan ek-do funny nicknames automatically approved honge. 😂",
    },
    {
      title: "Rule 10 — Friendship Renewal ♾️",
      text: "Is friendship ki expiry date N/A hai. Annual renewal ki zarurat nahi padegi. 😌🤝",
    },
  ];

  return (
    <div className="page">
      <div className="card">

        <div className="letter-header">
          <div style={{ fontSize: "45px" }}>🤝</div>

          <h1>
            OFFICIAL FRIENDSHIP
            <br />
            APPROVAL LETTER
          </h1>

          <p>Friendship Department • Confidential Document</p>
        </div>

        <div className="details">
          <p><strong>To:</strong> Pallavi</p>
          <p><strong>From:</strong> Gaurav</p>
          <p>
            <strong>Subject:</strong> Friendship Approval &
            Terms & Conditions
          </p>
        </div>

        <p className="letter-text">
          Dear <strong>Pallavi</strong>,
        </p>

        <p className="letter-text">
          Aapko suchit kiya jaata hai ki aapke saath
          friendship ke liye bheja gaya application
          carefully review karne ke baad{" "}
          <span className="approved">APPROVED ✅</span> kar diya
          gaya hai.
        </p>

        <p className="letter-text">
          Is approval ke baad aap officially meri
          <strong> Friendship Department</strong> ki permanent
          member hain. 🎉
        </p>

        <p className="letter-text">
          Lekin friendship shuru karne se pehle kuch
          important rules & regulations hain, jinhe maanna
          anivarya hoga. 😌
        </p>

        <h2 className="section-title">
          📜 Friendship Rules & Regulations
        </h2>

        <div className="rules">
          {rules.map((rule, index) => (
            <div className="rule" key={index}>
              <h3>{rule.title}</h3>
              <p>{rule.text}</p>
            </div>
          ))}
        </div>

        <div className="approval-box">
          <h2>✅ FINAL APPROVAL</h2>

          <p className="letter-text">
            Upar diye gaye sabhi rules ko padhne ke baad
            agar aap ready hain, toh next step ke liye
            proceed karein. 😂
          </p>

          <button
            className="main-btn"
            onClick={() => nextPage("approval")}
          >
            Continue ➜
          </button>
        </div>

      </div>
    </div>
  );
}

export default Letter;