import Header from "@/components/header/header";
import React from "react";
import styles from "./styles.module.css";
import Input from "@/components/input/input";
import Select from "@/components/input/select";
import Button from "@/components/button/button";
const RegisterVehicle = () => {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div className={styles.documentHeader}>
        <span className={styles.documentLabel}>Add additional documents</span>
      </div>
      <Input
        type={"file"}
        label={"Upload your photo"}
        id={"userPhoto"}
        name={"userPhoto"}
      />
      <Input
        label={"License Number"}
        type={"text"}
        id={"licenseNumber"}
        name={"licenseNumber"}
      />
      <Input
        type={"file"}
        label={"Upload your license"}
        id={"license"}
        name={"license"}
      />
      <Input
        label={"Plate Number"}
        type={"text"}
        id={"plateNumber"}
        name={"plateNumber"}
      />
      <Input
        label={"Body Number"}
        type={"text"}
        id={"bodyNumber"}
        name={"bodyNumber"}
      />
      <Select label={"Type of vehicle"} />
      <Input
        type={"file"}
        label={"Upload tricycle photo"}
        id={"tricyclePhoto"}
        name={"tricyclePhoto"}
      />
      <Input
        label={"Toda Name (Optional)"}
        type={"text"}
        id={"bodyNumber"}
        name={"bodyNumber"}
      />
      <div className={styles.documentHeader}>
        <span className={styles.documentLabel}>Address</span>
      </div>
      <Input
        label={"Province"}
        type={"text"}
        id={"province"}
        name={"province"}
      />
      <Input label={"City"} type={"text"} id={"city"} name={"city"} />
      <Input
        label={"Barangay"}
        type={"text"}
        id={"barangay"}
        name={"barangay"}
      />
      <Input
        label={"Street Address, House Number"}
        type={"text"}
        id={"streetAddress"}
        name={"streetAddress"}
      />

      <div className="pt-16">
        <Button label={"Register"} className={"btnPrimary"} />
      </div>
    </div>
  );
};

export default RegisterVehicle;
