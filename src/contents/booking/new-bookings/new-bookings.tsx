import Items from "@/components/items/items";
import React from "react";

const NewBookings = () => {
  return (
    <>
      <Items bookingId={1001} clientName={"Gom Bur Za"} />
      <Items bookingId={1002} clientName={"Jose Rizal"} />
    </>
  );
};

export default NewBookings;
