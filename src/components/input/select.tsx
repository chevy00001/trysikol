import styles from "./styles.module.css";
import InputLabel from "../inputlabel/input-label";

const Select = (props: any) => {
  return (
    <>
      <div className={styles.inputContainer}>
        <InputLabel label={props.label} />
        <select className={styles.input} id={props.id} name={props.name}>
          <option>Bao-Bao</option>
          <option>Payong-payong</option>
          <option>Close Cab</option>
        </select>
      </div>
    </>
  );
};

export default Select;
