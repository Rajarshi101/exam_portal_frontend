import DashboardCard from "../components/DashboardCard";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="card-grid">
        <DashboardCard title="Active Exams" value="12" />
        <DashboardCard title="Today's Sessions" value="5" />
      </div>

      <section className="activity">
        <h4>Recent Activity</h4>
        <ul>
          <li>10:30 AM – User completed exam</li>
          <li>09:45 AM – New exam created</li>
        </ul>
      </section>
    </>
  );
};

export default Dashboard;
