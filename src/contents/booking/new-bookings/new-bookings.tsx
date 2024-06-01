import Items from "@/components/items/items";
import React from "react";

const NewBookings = () => {
  return (
    <>
      <Items bookingId={1003} clientName={"Gom Bur Za"} />
      <Items bookingId={1004} clientName={"Jose Rizal"} />
    </>
  );
};

export default NewBookings;
