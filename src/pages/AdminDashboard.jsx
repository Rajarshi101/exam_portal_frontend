import { useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminOverview from "../components/admin/AdminOverview";
import AdminExams from "../components/admin/AdminExams";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    if (activeTab === "overview") return <AdminOverview />;
    if (activeTab === "exams") return <AdminExams />;
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar setActiveTab={setActiveTab} />
      <div className="admin-content">{renderContent()}</div>
    </div>
  );
}

export default AdminDashboard;