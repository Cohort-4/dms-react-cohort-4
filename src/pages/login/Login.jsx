import styles from "./login.module.css"
import Logo from "../../images/Logo.svg";
import BikeMan from "../../images/bike-man.svg";
import { Link } from "react-router-dom"



const Login = () => {
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
            <h2>You’re Welcome Back!</h2>
            <p>Enter the following information below</p>
          </section>
          <section className={styles.formContainer}>
            <form className={styles.form}>
              <input type="email" placeholder="Company Email Address" />
              <input type="password" placeholder="Password" />
            </form>
            <Link to="/forgotpassword">
              <p className={styles.forgotPassword}>Forgot Password?</p>
            </Link>
            <section className={styles.account}>
              <p>
                Just joining us here? <Link to="/">Register Now</Link>
              </p>
              <Link to="/dashboard">
                <button className={styles.btn}>Login</button>
              </Link>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};
export default Login;
