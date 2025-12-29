import "../styles/table.css";

const Students = () => {
  return (
    <>
      <h2>Students</h2>

      <button>Add Student</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Batch</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Batch A</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Students;