import { useNavigate, useParams } from "react-router-dom";
import "../../styles/SystemCheck.css";

function SystemCheck() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="system-check">
      <h1>System Check</h1>

      <label>
        <input type="checkbox" /> Camera Permission Granted
      </label>

      <label>
        <input type="checkbox" /> Screen Share Permission Granted
      </label>

      <label>
        <input type="checkbox" /> I consent to proctoring
      </label>

      <button onClick={() => navigate(`/exam-interface/${id}`)}>
        Proceed
      </button>
    </div>
  );
}

export default SystemCheck;