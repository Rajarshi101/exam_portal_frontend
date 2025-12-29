const DashboardCard = ({ title, value }) => {
  return (
    <div className="card">
      <h5>{title}</h5>
      <p>{value}</p>
    </div>
  );
};

export default DashboardCard;