import styles from "./styles.module.css";
const Button = (props) => {
  let className = `${styles.btnPrimary}`;
  if (props.className === "btnPrimary") {
    className = `${styles.btnPrimary}`;
  }
  if (props.className === "btnSecondary") {
    className = `${styles.btnSecondary}`;
  }

  return (
    <>
      <span>
        <button className={className}>{props.label}</button>
      </span>
    </>
  );
};

export default Button;
