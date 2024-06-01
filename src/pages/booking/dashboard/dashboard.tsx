import Header from "@/components/header/header";
import styles from "./styles.module.css";
import React, { useState } from "react";
import NewBookings from "@/contents/booking/new-bookings/new-bookings";
import ActiveBookings from "@/contents/booking/active-bookings/active-bookings";
import RecentBookings from "@/contents/booking/recent-bookings/recent-bookings";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="container">
        <div className="center">
          <div>
            <Header />
          </div>
          <div className={`${styles.tabs} `}>
            <span
              className={`${styles.tabLink} ${
                activeTab === 1 ? styles.active : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              New Bookings
            </span>
            <span
              className={`${styles.tabLink} ${
                activeTab === 2 ? styles.active : ""
              }`}
              onClick={() => handleTabClick(2)}
            >
              Active Bookings
            </span>
            <span
              className={`${styles.tabLink} ${
                activeTab === 3 ? styles.active : ""
              }`}
              onClick={() => handleTabClick(3)}
            >
              Recent Bookings
            </span>
          </div>
          <div className={styles.bookingHeader}>
            <span className={styles.tabLink}>Booking#</span>
            <span className={`${styles.tabLink} ${styles.tabLinkFlexGrow}`}>
              Active Booking
            </span>
            <span className={styles.tabLink}>Action</span>
          </div>
          {activeTab == 1 && (
            <div className={`${styles.bookingsContainer} `}>
              <NewBookings />
            </div>
          )}
          {activeTab == 2 && (
            <div className={styles.bookingsContainer}>
              <span>
                <ActiveBookings />
              </span>
            </div>
          )}
          {activeTab == 3 && (
            <div className={styles.bookingsContainer}>
              <span>
                <RecentBookings />
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
