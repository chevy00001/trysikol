import Items from "@/components/items/items";
import React from "react";

const ActiveBookings = () => {
  return (
    <>
      <Items bookingId={1001} clientName={"Maria Clara"} />
      <Items bookingId={1002} clientName={"Juan Dela Cruz"} />
    </>
  );
};

export default ActiveBookings;
