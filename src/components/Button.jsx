import "./button.scss";

export const Button = ({ name, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="button">
        {name}
      </button>
    </>
  );
};
