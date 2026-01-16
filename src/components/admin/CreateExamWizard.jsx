import { useState } from "react";
import "../../styles/CreateExamWizard.css";

function CreateExamWizard() {
  const [step, setStep] = useState(1);

  const [examDetails, setExamDetails] = useState({
    title: "",
    description: "",
    startDateTime: "",
    endDateTime: "",
    duration: ""
  });

  const [marksPerQuestion, setMarksPerQuestion] = useState("");
  const [questions, setQuestions] = useState([]);

  // ---------------- STEP 1 ----------------
  const handleDetailsChange = (e) => {
    setExamDetails({
      ...examDetails,
      [e.target.name]: e.target.value
    });
  };

  const goToStep2 = () => {
    const values = Object.values(examDetails);
    if (values.some((v) => !v)) {
      alert("Please fill all exam details.");
      return;
    }
    setStep(2);
  };

  // ---------------- STEP 2 ----------------
  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = ({ target }) => {
      const rows = target.result.split("\n").slice(1);

      const parsed = rows
        .map((row) => row.split(","))
        .filter((row) => row.length >= 6)
        .map((cols, idx) => ({
          id: idx + 1,
          question: cols[0],
          options: [cols[1], cols[2], cols[3], cols[4]],
          correctAnswer: cols[5]?.trim()
        }));

      setQuestions(parsed);
    };

    reader.readAsText(file);
  };

  const goToStep3 = () => {
    if (!marksPerQuestion || questions.length === 0) {
      alert("Upload CSV and assign marks before proceeding.");
      return;
    }
    setStep(3);
  };

  return (
    <div className="wizard-container">
      {/* Step Indicator */}
      <div className="wizard-steps">
        <span className={step === 1 ? "active" : ""}>1. Exam Details</span>
        <span className={step === 2 ? "active" : ""}>2. Upload Questions</span>
        <span className={step === 3 ? "active" : ""}>3. Invite Students</span>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="wizard-step">
          <label>
            Exam Title
            <input name="title" onChange={handleDetailsChange} />
          </label>

          <label>
            Exam Description
            <textarea name="description" onChange={handleDetailsChange} />
          </label>

          <label>
            Exam Start Date & Time
            <input type="datetime-local" name="startDateTime" onChange={handleDetailsChange} />
          </label>

          <label>
            Exam End Date & Time
            <input type="datetime-local" name="endDateTime" onChange={handleDetailsChange} />
          </label>

          <label>
            Exam Duration (minutes)
            <input type="number" name="duration" onChange={handleDetailsChange} />
          </label>

          <button className="next-btn" onClick={goToStep2}>
            Next
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="wizard-step">
          <label>
            Upload Question CSV
            <input type="file" accept=".csv" onChange={handleCSVUpload} />
          </label>

          <label>
            Marks Per Question
            <input
              type="number"
              value={marksPerQuestion}
              onChange={(e) => setMarksPerQuestion(e.target.value)}
            />
          </label>

          {questions.length > 0 && (
            <div className="question-preview">
              <h3>Question Preview</h3>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Question</th>
                    <th>Correct</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((q) => (
                    <tr key={q.id}>
                      <td>{q.id}</td>
                      <td>{q.question}</td>
                      <td>{q.correctAnswer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <button className="next-btn" onClick={goToStep3}>
            Next
          </button>
        </div>
      )}

      {/* STEP 3 placeholder */}
      {step === 3 && (
        <div className="wizard-step">
          <h3>Invite Students (Coming Next)</h3>
        </div>
      )}
    </div>
  );
}

export default CreateExamWizard;