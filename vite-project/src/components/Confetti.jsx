function Confetti() {
  const pieces = Array.from({ length: 40 });

  return (
    <div className="confetti-container">
      {pieces.map((_, index) => (
        <span
          key={index}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

export default Confetti;