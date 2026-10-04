function Button({ children, onClick, className = "" }) {
  return (
    <button
      className={`main-btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;