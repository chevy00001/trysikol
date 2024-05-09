import Header from "@/components/header/header";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Button from "@/components/button/button";

const FoundDriver = () => {
  return (
    <div className="container">
      <div className="center">
        <Header />
      </div>
      <div className={styles.diverInfoContainer}>
        <div className={`${styles.flex2} mb8`}>
          <div className={styles.driverPhoto}>
            <Image
              src="/profile-pic.svg"
              width={111}
              height={106}
              className=""
              alt="Profile Placeholder"
            />
          </div>
          <div className={styles.driverProfile}>
            <div className={styles.name}>Juan Dela Cruz</div>
            <div className={styles.info}>
              <span>Phone#: 09999998989</span>
            </div>
            <div className={styles.info}>
              <span>Lic#: 09909099263565</span>
            </div>
            <div className={styles.info}>
              <span>Plate#: LX 4560</span>
            </div>
            <div className={styles.info}>
              <span>Body#: 8550</span>
            </div>
          </div>
        </div>
        <div className={`${styles.flex2} mb16`}>
          <div className={styles.driverProfile}>
            <div className={styles.info}>
              <span>Fair Price: 15.00</span>
            </div>
            <div className={styles.info}>
              <span>Distance: 1.7Km</span>
            </div>
            <div className={`${styles.info} mb16`}>
              <span>Passengers: 4</span>
            </div>
            <div className={styles.mb101}>
              <span className="h4 fw-700">Total ₱60.00 </span>
            </div>
          </div>
          <div className={styles.driverPhoto}>
            <Image
              src="/images/baobao.png"
              width={111}
              height={106}
              className=""
              alt="Profile Placeholder"
            />
          </div>
        </div>

        <div className={styles.address}>
          <span className="fw-500">Pickup Address</span>
          <span className="mb16">Japan St., Lubogan, Davao City</span>
          <span className="fw-500">Destination Address</span>
          <span>Public Market., Toril, Davao City</span>
        </div>
        <div className="mt18 mb18">
          {" "}
          <Image
            src="/images/map.png"
            width={283}
            height={250}
            className=""
            alt="Profile Placeholder"
          />
        </div>
        <div className="center">
          <Button label={"Ride"} additionalClass={"w100"} />
        </div>
      </div>
    </div>
  );
};

export default FoundDriver;
