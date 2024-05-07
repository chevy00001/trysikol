import Header from "@/components/header/header";
import Input from "@/components/input/input";
import styles from "./styles.module.css";
import Button from "@/components/button/button";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/logo.svg"
          width={179.97}
          height={144}
          className=""
          alt="Trysikol Logo"
        />
      </div>
      <div className={styles.appname}>
        Trysikol <span className={styles.copyright}>&#169;</span>
      </div>
      <div className={styles.subheader}>Book Your Safest Ride Ever!</div>
      <Input
        label={"Phone Number"}
        type={"text"}
        id={"phoneNumber"}
        name="phoneNumber"
      />

      <Input
        label={"Password"}
        type={"password"}
        id={"password"}
        name="password"
      />

      <div className={styles.authContainer}>
        <Button label={"Login"} />
        <div className={styles.helperLink}>
          <span>
            No account yet?{" "}
            <Link href="/auth/register" className={styles.authLink}>
              Sign-up
            </Link>{" "}
            |
          </span>
          <span className={styles.authLink}>Forgot Password</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
