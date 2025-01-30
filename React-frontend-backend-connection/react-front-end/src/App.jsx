import "./App.css";
import * as React from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = React.useState([]);
  const [formData, setFormData] = React.useState({
    seriesId: "",
    studentName: "",
    fatherName: "",
    studentRegNo: "",
    batch: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/students", formData);
      alert("Form submitted successfully!");

      setFormData({
        seriesId: "",
        studentName: "",
        fatherName: "",
        studentRegNo: "",
        batch: "",
      });

      await callTheServer();
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("There was an error submitting the form.");
    }
  };

  const callTheServer = async () => {
    const result = await axios.get("http://localhost:3000/students");

    setStudents(result.data);
  };

  React.useEffect(() => {
    callTheServer();
  }, []);

  return (
    <div>
      <header>
        <h1>Student Records</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Series ID</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Student Reg No</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.seriesId}>
                <td>{item.seriesId}</td>
                <td>{item.studentName}</td>
                <td>{item.fatherName}</td>
                <td>{item.studentRegNo}</td>
                <td>{item.batch}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <div className="container">
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="seriesId"
            onChange={handleChange}
            value={formData.seriesId}
            placeholder="Series ID"
            required
          />
          <input
            name="studentName"
            onChange={handleChange}
            value={formData.studentName}
            placeholder="Student Name"
            required
          />
          <input
            name="fatherName"
            onChange={handleChange}
            value={formData.fatherName}
            placeholder="Father's Name"
            required
          />
          <input
            name="studentRegNo"
            onChange={handleChange}
            value={formData.studentRegNo}
            placeholder="Registration No"
            required
          />
          <input
            name="batch"
            onChange={handleChange}
            value={formData.batch}
            placeholder="Batch"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;