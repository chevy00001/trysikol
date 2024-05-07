import Image from "next/image";
import styles from "./mystyles.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          {" "}
          <Image
            src="/logo.svg"
            width={71}
            height={57}
            className=""
            alt="Trysikol Logo"
          />
        </div>
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            Trysikol <span className={styles.copyright}>&#169;</span>
          </div>
          <div className={styles.subheader}>Book Your Safest Ride Ever!</div>
        </div>
      </div>
    </>
  );
};

export default Header;
