

function Button({ btnType, onClick, className }) {
  return (
    <>
      <button className={className} onClick={onClick}>
        {btnType}
      </button>
    </>
  );
}

export default Button;
