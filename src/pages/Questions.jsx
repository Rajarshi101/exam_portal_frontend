import "../styles/upload.css";

const Questions = () => {
  return (
    <>
      <h2>Question Bank</h2>

      <input type="file" accept=".csv,.xlsx" />

      <button>Upload</button>

      <p>Uploaded questions will appear here.</p>
    </>
  );
};

export default Questions;