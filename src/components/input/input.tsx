import InputLabel from "../inputlabel/input-label";
import styles from "./styles.module.css";
const Input = (props: any) => {
  return (
    <>
      <div className={styles.inputContainer}>
        <InputLabel label={props.label} />
        <input
          type={props.type}
          className={styles.input}
          id={props.id}
          name={props.name}
          min={props.min}
        />
      </div>
    </>
  );
};

export default Input;
