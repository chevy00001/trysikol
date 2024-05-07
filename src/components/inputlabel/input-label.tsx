import styles from "./styles.module.css";

const InputLabel = (props) => {
  return (
    <>
      <span className={styles.label}>{props.label}</span>
    </>
  );
};

export default InputLabel;
