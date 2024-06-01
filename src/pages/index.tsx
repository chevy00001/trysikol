import Header from "@/components/header/header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="center">
          <Header />
          <div>Links</div>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/booking/dashboard">Driver Booking Dashboard</Link>
          <Link href="/found-driver">Found Driver</Link>
          <Link href="/register-vehicle">Register Vehicle</Link>
        </div>
      </div>
    </>
  );
}
