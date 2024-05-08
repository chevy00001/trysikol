import Header from "@/components/header/header";
import styles from "./styles.module.css";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import Link from "next/link";

const Register = () => {
  const isLocationEnabled = false;

  return (
    <>
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
            label={"Phone Number"}
            type={"number"}
            id={"phoneNumber"}
            name={"phoneNumber"}
          />
          <Input
            label={"First Name"}
            type={"text"}
            id={"firstName"}
            name={"firstName"}
          />
          <Input
            label={"Last Name"}
            type={"text"}
            id={"lastName"}
            name={"lastName"}
          />
          <Input label={"Age"} type={"text"} id={"age"} name="age" />
          <Input
            label={"Password"}
            type={"password"}
            id={"password"}
            name={"password"}
          />
          <Input
            label={"Confirm Password"}
            type={"password"}
            id={"confirmPassword"}
            name={"confirmPassword"}
          />
          <div className="helperLink">
            <input type="checkbox" />
            <span>Already read the terms and conditions?</span>
          </div>

          <div className="pt-16">
            <Button label={"Register"} className={"btnPrimary"} />
          </div>

          <div className="helperLink">
            <span>
              Already have an account?{" "}
              <Link href="/auth/login" className="authLink">
                Sign-in
              </Link>{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
