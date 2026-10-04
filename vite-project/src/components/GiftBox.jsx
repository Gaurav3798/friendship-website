function GiftBox({ onOpen }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <div
      className="special-gift-wrapper"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Open your special gift"
    >
      <span className="gift-sparkle sparkle-1">✦</span>
      <span className="gift-sparkle sparkle-2">✧</span>
      <span className="gift-sparkle sparkle-3">♡</span>
      <span className="gift-sparkle sparkle-4">✦</span>

      <div className="gift-floating-message">
        <span>Something special is waiting...</span>
        <span className="gift-arrow">↓</span>
      </div>

      <div className="gift-glow"></div>

      <div className="special-gift-box">
        <div className="special-gift-lid">
          <div className="lid-ribbon"></div>

          <div className="gift-bow">
            <span className="bow-left"></span>
            <span className="bow-center"></span>
            <span className="bow-right"></span>
          </div>
        </div>

        <div className="special-gift-body">
          <div className="body-ribbon"></div>

          <div className="gift-heart">
            <span>♥</span>
          </div>

          <div className="gift-shine shine-1"></div>
          <div className="gift-shine shine-2"></div>
        </div>

        <div className="gift-shadow"></div>
      </div>

      <div className="gift-click-hint">
        <span className="hand-icon">👆</span>
        <span>Tap to open your surprise</span>
      </div>
    </div>
  );
}

export default GiftBox;
