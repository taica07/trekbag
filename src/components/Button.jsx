const Button = ({ onClick, buttonType, label }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === 'secondary' ? 'btn--secondary' : ''}  `}
    >
      {label}
    </button>
  );
};

export default Button;
