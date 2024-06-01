import styles from "./styles.module.css";
const Button = (props) => {
  let className = `${styles.btnPrimary}`;
  if (props.className === "btnPrimary") {
    className = `${styles.btnPrimary}`;
  }
  if (props.className === "btnSecondary") {
    className = `${styles.btnSecondary}`;
  }
  if (props.className === "btnDanger") {
    className = `${styles.btnDanger}`;
  }
  if (props.className === "btnWarning") {
    className = `${styles.btnWarning}`;
  }

  return (
    <>
      <span>
        <button
          className={className}
          style={{ width: props.width, height: props.height }}
        >
          {props.label}
        </button>
      </span>
    </>
  );
};

export default Button;
