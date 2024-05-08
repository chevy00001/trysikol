import Button from "@/components/button/button";
import Header from "@/components/header/header";
import Input from "@/components/input/input";
import Select from "@/components/input/select";
import Link from "next/link";
import React from "react";

const Booking = () => {
  const isLocationEnabled = false;
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div className="inputContainer">
        {isLocationEnabled ? (
          <span>Map</span>
        ) : (
          <Button label={"Enable Location"} className={"btnSecondary"} />
        )}
        <Input
          label={"Pick up address"}
          type={"text"}
          id={"pickupAddress"}
          name={"pickupAddress"}
        />
        <Input
          label={"Destination address"}
          type={"text"}
          id={"destinationAddress"}
          name={"destinationAddress"}
        />
        <Input
          label={"Number of Passengers"}
          type={"number"}
          id={"numberOfPassengers"}
          name={"numberOfPassengers"}
          min={1}
        />
        <Select label={"Type of vehicle"} />
      </div>
      <div className="pt-16">
        <Button label={"Start Booking"} />
      </div>
      <div className="helperLink">
        <span>
          Want to be a rider?{" "}
          <Link href="/register-vehicle" className="authLink">
            Register Here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Booking;
