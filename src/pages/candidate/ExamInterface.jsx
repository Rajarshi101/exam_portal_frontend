import "../../styles/ExamInterface.css";

function ExamInterface() {
  return (
    <div className="exam-interface">
      <aside className="question-sidebar">
        <p>Q1</p>
        <p>Q2</p>
        <p>Q3</p>
      </aside>

      <main className="question-area">
        <h2>Question will appear here</h2>
        <button>Previous</button>
        <button>Next</button>
        <button>Submit</button>
      </main>

      <div className="timer">Time Left: 01:30:00</div>
    </div>
  );
}

export default ExamInterface;