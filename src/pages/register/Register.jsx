import styles from "./register.module.css";
import Logo from "../../images/Logo.svg";
import BikeMan from "../../images/bike-man.svg";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={styles.registerContainer}>
      <header className={styles.logoContainer}>
        <img src={Logo} alt="dms logo" className={styles.logo} />
        <h3 className={styles.logoText}>dms</h3>
      </header>

      <section className={styles.registerContent}>
        <section className={styles.leftContainter}>
          <img src={BikeMan} alt="Bike Man" />
          <h3 className={styles.title}>
            Let’s help you manage your riders and delivery systems.
          </h3>
          <p className={styles.desc}>
            Every logistics company whether it’s a multi-national branding
            corporation or a regular local deserves the basic standard
            necessities in achieving a high service delivery
          </p>
          <Link to="/">
            <button className={styles.btn}>Get Started</button>
          </Link>
        </section>
        <section className={styles.rightContainter}>
          <progress
            className={styles.progressBar}
            max={100}
            value={70}
          ></progress>
          <section className={styles.formInfo}>
            <h2>Basic Information</h2>
            <p>Enter the following information below</p>
          </section>
          <section className={styles.formContainer}>
            <form className={styles.form}>
              <section className={styles.nameInput}>
                <input type="text" placeholder="Company Name" />
                <input type="text" placeholder="Last Name" />
              </section>
              <input type="text" placeholder="Company Address" />
              <input type="tel" placeholder="Phone Number" />
              <input type="email" placeholder="Company Email Address" />
              <input type="password" placeholder="Password" />
            </form>
            <p className={styles.termAndCondition}>
              By clicking "Next" you agree to our Terms of Service, Privacy
              Policy, and to receive marketing communications from Envoy.
            </p>
            <section className={styles.account}>
              <p>
                Got an account? <Link to="/login">Sign in</Link>{" "}
              </p>
              <Link to="/login">
                <button className={styles.btn}>Register</button>
              </Link>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};
export default Register;
