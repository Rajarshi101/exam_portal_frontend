import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import CreateExamWizard from "../../components/admin/CreateExamWizard";
import "../../styles/AdminDashboard.css";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="admin-dashboard">
      <AdminSidebar setActiveTab={setActiveTab} />

      <div className="admin-content">
        {activeTab === "overview" && (
          <>
            <h1>Dashboard Overview</h1>
            <p>Welcome to the Admin Dashboard.</p>
          </>
        )}

        {activeTab === "exams" && (
          <>
            <h1>Create New Exam</h1>
            <CreateExamWizard />
          </>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;