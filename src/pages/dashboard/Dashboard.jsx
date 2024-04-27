import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h1>Hello Dashboard</h1>
      <Link to="/login">Go back</Link>
    </div>
  );
};
export default Dashboard;
