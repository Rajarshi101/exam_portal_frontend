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

  const handleChange = (e) => {
    setExamDetails({
      ...examDetails,
      [e.target.name]: e.target.value
    });
  };

  const goNext = () => {
    // basic validation
    const { title, description, startDateTime, endDateTime, duration } =
      examDetails;

    if (!title || !description || !startDateTime || !endDateTime || !duration) {
      alert("Please fill all fields before proceeding.");
      return;
    }

    setStep(2);
  };

  return (
    <div className="wizard-container">
      <div className="wizard-steps">
        <span className={step === 1 ? "active" : ""}>1. Exam Details</span>
        <span className={step === 2 ? "active" : ""}>2. Upload Questions</span>
        <span className={step === 3 ? "active" : ""}>3. Invite Students</span>
      </div>

      {step === 1 && (
        <div className="wizard-step">
          <label>
            Exam Title
            <input
              type="text"
              name="title"
              value={examDetails.title}
              onChange={handleChange}
            />
          </label>

          <label>
            Exam Description
            <textarea
              name="description"
              value={examDetails.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Exam Start Date & Time
            <input
              type="datetime-local"
              name="startDateTime"
              value={examDetails.startDateTime}
              onChange={handleChange}
            />
          </label>

          <label>
            Exam End Date & Time
            <input
              type="datetime-local"
              name="endDateTime"
              value={examDetails.endDateTime}
              onChange={handleChange}
            />
          </label>

          <label>
            Exam Duration (minutes)
            <input
              type="number"
              name="duration"
              value={examDetails.duration}
              onChange={handleChange}
            />
          </label>

          <button onClick={goNext} className="next-btn">
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="wizard-step">
          <h3>Question Upload (Coming Next)</h3>
        </div>
      )}
    </div>
  );
}

export default CreateExamWizard;