import Items from "@/components/items/items";
import React from "react";

const ActiveBookings = () => {
  return (
    <>
      <Items bookingId={1005} clientName={"Maria Clara"} />
      <Items bookingId={1006} clientName={"Juan Dela Cruz"} />
    </>
  );
};

export default ActiveBookings;
