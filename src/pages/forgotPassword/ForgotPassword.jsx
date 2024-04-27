import styles from "./forgot.module.css";

import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className={styles.ForgotPasswordContainer}>
      <h1>ForgotPassword</h1>
      <Link to="/login">Go back</Link>
    </div>
  );
};
export default ForgotPassword;
