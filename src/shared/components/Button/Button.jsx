import style from "./button.module.css";

const Button = ({ type, text, onClick }) => {
  return (
    <button className={style.button} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: "submit",
  text: "no text",
  onClick: () => {},
};

export default Button;
