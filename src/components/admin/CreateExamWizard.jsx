import { useState } from "react";
import "../../styles/CreateExamWizard.css";

function CreateExamWizard() {
  const [step, setStep] = useState(1);

  // STEP 1
  const [examDetails, setExamDetails] = useState({
    title: "",
    description: "",
    startDateTime: "",
    endDateTime: "",
    duration: ""
  });

  // STEP 2
  const [marksPerQuestion, setMarksPerQuestion] = useState("");
  const [questions, setQuestions] = useState([]);

  // STEP 3
  const [inviteMethod, setInviteMethod] = useState("individual");
  const [emails, setEmails] = useState([""]);
  const [bulkEmails, setBulkEmails] = useState([]);

  /* ---------------- STEP 1 ---------------- */
  const handleDetailsChange = (e) => {
    setExamDetails({ ...examDetails, [e.target.name]: e.target.value });
  };

  const goToStep2 = () => {
    if (Object.values(examDetails).some((v) => !v)) {
      alert("Fill all exam details.");
      return;
    }
    setStep(2);
  };

  /* ---------------- STEP 2 ---------------- */
  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = ({ target }) => {
      const rows = target.result.split("\n").slice(1);
      const parsed = rows
        .map((row) => row.split(","))
        .filter((r) => r.length >= 6)
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
      alert("Upload questions and assign marks.");
      return;
    }
    setStep(3);
  };

  /* ---------------- STEP 3 ---------------- */
  const addEmailField = () => {
    setEmails([...emails, ""]);
  };

  const updateEmail = (index, value) => {
    const updated = [...emails];
    updated[index] = value;
    setEmails(updated);
  };

  const removeEmailField = (index) => {
    const updated = emails.filter((_, i) => i !== index);
    setEmails(updated);
  };

  const handleBulkCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = ({ target }) => {
      const rows = target.result.split("\n").slice(1);
      setBulkEmails(rows.map((r) => r.trim()).filter(Boolean));
    };
    reader.readAsText(file);
  };

  const finishCreatingExam = () => {
    const inviteList =
      inviteMethod === "individual"
        ? emails.filter((e) => e)
        : bulkEmails;

    if (inviteList.length === 0) {
      alert("Add at least one email to invite.");
      return;
    }

    // MOCK FINAL ACTION
    console.log("Exam Details:", examDetails);
    console.log("Questions:", questions);
    console.log("Marks per question:", marksPerQuestion);
    console.log("Invited Emails:", inviteList);

    alert("Exam created and invitations sent!");
  };

  return (
    <div className="wizard-container">
      {/* STEPS HEADER */}
      <div className="wizard-steps">
        <span className={step === 1 ? "active" : ""}>1. Exam Details</span>
        <span className={step === 2 ? "active" : ""}>2. Upload Questions</span>
        <span className={step === 3 ? "active" : ""}>3. Invite Students</span>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="wizard-step">
          <input name="title" placeholder="Exam Title" onChange={handleDetailsChange} />
          <textarea name="description" placeholder="Description" onChange={handleDetailsChange} />
          <input type="datetime-local" name="startDateTime" onChange={handleDetailsChange} />
          <input type="datetime-local" name="endDateTime" onChange={handleDetailsChange} />
          <input type="number" name="duration" placeholder="Duration (minutes)" onChange={handleDetailsChange} />
          <button className="next-btn" onClick={goToStep2}>Next</button>
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
                    <th>Correct Answer</th>
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

      {/* STEP 3 */}
      {step === 3 && (
        <div className="wizard-step">

            <h3 className="section-title">Invitation Method</h3>

            {/* Radio buttons in one row */}
            <div className="invite-method-row">
            <label className="radio-option">
                <input
                type="radio"
                name="inviteMethod"
                value="individual"
                checked={inviteMethod === "individual"}
                onChange={() => setInviteMethod("individual")}
                />
                Individual_Invite
            </label>

            <label className="radio-option">
                <input
                type="radio"
                name="inviteMethod"
                value="bulk"
                checked={inviteMethod === "bulk"}
                onChange={() => setInviteMethod("bulk")}
                />
                Bulk_Invite
            </label>
            </div>

            {/* INDIVIDUAL INVITE */}
            {inviteMethod === "individual" && (
            <div className="invite-section">
                <label>Candidate Email IDs</label>

                {emails.map((email, index) => (
                <div className="email-row" key={index}>
                    <input
                    type="email"
                    placeholder="Candidate Email ID"
                    value={email}
                    onChange={(e) => updateEmail(index, e.target.value)}
                    />
                    {emails.length > 1 && (
                    <button
                        type="button"
                        className="delete-btn"
                        onClick={() => removeEmailField(index)}
                        title="Remove"
                    >
                        🗑
                    </button>
                    )}
                </div>
                ))}

                <button
                type="button"
                className="secondary-btn"
                onClick={addEmailField}
                >
                + Add Email
                </button>
            </div>
            )}

            {/* BULK INVITE */}
            {inviteMethod === "bulk" && (
            <div className="invite-section">
                <label>Upload CSV with Email IDs</label>
                <input type="file" accept=".csv" onChange={handleBulkCSV} />
            </div>
            )}

            <button className="finish-btn" onClick={finishCreatingExam}>
            Finish Creating
            </button>
        </div>
      )}
    </div>
  );
}

export default CreateExamWizard;