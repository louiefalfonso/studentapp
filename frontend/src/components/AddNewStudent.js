import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import StudentService from "../services/StudentService";

const AddNewStudent = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [percentage, setPercentage] = useState("");
  const [activeStudent, setActiveStudent] = useState(false);
  const [error, setError] = useState(null);

  const addNewStudent = (e) => {
    e.preventDefault();
    const newStudent = { firstName, lastName, email, college, percentage, activeStudent };
    StudentService.addNewStudent(newStudent)
      .then(() => {
        router.push("/");
        console.log("Add New Student Complete!");
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  }

  useEffect(() => {
    const fetchNewStudent = async () => {
      try {
        const response = await StudentService.getStudentById(id);
        const newstudent = response.data;
        setFirstName(newstudent.firstName);
        setLastName(newstudent.lastName);
        setEmail(newstudent.email);
        setCollege(newstudent.college);
        setPercentage(newstudent.percentage);
        setActiveStudent(newstudent.activeStudent === "true");

      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    }
  }
  )


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card mt-5">
              <h3 className="text-center">Add Student Details</h3>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      data-testid="first-name"
                      placeholder="Enter First Name"
                      name="firstname"
                      className="form-control"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      placeholder="Enter Last Name"
                      data-testid="last-name"
                      name="lastname"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      placeholder="Add Email Address"
                      data-testid="email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">College</label>
                    <input
                      placeholder="Enter College or Department"
                      name="college"
                      data-testid="college"
                      className="form-control"
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Percentage</label>
                    <input
                      placeholder="Enter Percentage"
                      data-testid="percentage"
                      name="percentage"
                      className="form-control"
                      value={percentage}
                      onChange={(e) => setPercentage(e.target.value)}
                    />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">Active Student</label>
                    <input
                      className="form-check-input"
                      data-testid="active-student"
                      type="checkbox"
                      checked={activeStudent}
                      onChange={(e) => setActiveStudent(e.target.checked)} // Set to a boolean value
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    data-testid="submit-button"
                    onClick={addNewStudent}
                  >
                    Add New Student
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
    
};

export default AddNewStudent;
