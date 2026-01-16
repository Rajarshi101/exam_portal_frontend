// import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CandidateDashboard from "./pages/candidate/CandidateDashboard";
import ExamOverview from "./components/candidate/ExamOverview";
import SystemCheck from "./pages/candidate/SystemCheck";
import ExamInterface from "./pages/candidate/ExamInterface";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
      <Route path="/exam/:id" element={<ExamOverview />} />
      <Route path="/system-check/:id" element={<SystemCheck />} />
      <Route path="/exam-interface/:id" element={<ExamInterface />} />
    </Routes>
  );
}

export default App;

