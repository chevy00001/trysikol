import Items from "@/components/items/items";
import React from "react";

const RecentBookings = () => {
  return (
    <>
      <Items bookingId={1001} clientName={"Antonio Luna"} />
      <Items bookingId={1002} clientName={"Tandang Sora"} />
    </>
  );
};

export default RecentBookings;
