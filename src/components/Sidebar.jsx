import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">ExamPortal</h2>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/questions">Questions</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;