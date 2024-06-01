import React from "react";
import styles from "./styles.module.css";
import Button from "../button/button";
const Items = ({ bookingId, clientName }) => {
  return (
    <div className={styles.items}>
      <span className={styles.itemContent}>{bookingId}</span>
      <span className={`${styles.flexGrow2} ${styles.itemContent}`}>
        {clientName}
      </span>
      <span className={styles.itemContent}>
        <Button
          label={"View"}
          className={"btnWarning"}
          width={80}
          height={30}
        />
      </span>
    </div>
  );
};

export default Items;
