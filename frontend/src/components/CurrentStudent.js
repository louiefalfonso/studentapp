import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import StudentService from "../services/StudentService";

const CurrentStudent = () => {
  const params = useParams(); 
  const { id } = params; 

  const [currentStudent, setCurrentStudent] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentStudent = async () => {
      try {
        const response = await StudentService.getStudentById(id);
        setCurrentStudent(response.data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    };
    fetchCurrentStudent();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Render the current student's data */}
      <div className="container text-center">
        <div className="row">
          <h2 className="text-center">Student Details</h2>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Student Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>College</th>
                <th>Percentage</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{currentStudent.id}</td>
                <td>{currentStudent.firstName}</td>
                <td>{currentStudent.lastName}</td>
                <td>{currentStudent.email}</td>
                <td>{currentStudent.college}</td>
                <td>{currentStudent.percentage}</td>
                <td>
                  <Link className="btn btn-info" href={`/`}>
                    Back
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CurrentStudent;
