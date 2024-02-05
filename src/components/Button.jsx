import "./button.scss";

export const Button = ({ name, onClick, disabled }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick} className="button">
        {name}
      </button>
    </>
  );
};
