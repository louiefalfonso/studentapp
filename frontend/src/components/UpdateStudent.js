import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import StudentService from "../services/StudentService";

const UpdateStudent = () => {
  
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

const updateCurrentStudent = (e) => {
    e.preventDefault();
    const currentStudent = { firstName, lastName, email, college, percentage, activeStudent };
    StudentService.updateCurrentStudent(currentStudent, id)
      .then(() => {
        router.push("/");
        console.log("Update Current Student Complete!");
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };

  useEffect(() => {
    const fetchCurrentStudent = async () => {
      try {
        const response = await StudentService.getStudentById(id);
        const update = response.data;
        setFirstName(update.firstName);
        setLastName(update.lastName);
        setEmail(update.email);
        setCollege(update.college);
        setPercentage(update.percentage);
        setActiveStudent(update.activeStudent === "true");

      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    };
    fetchCurrentStudent();
  }, [id]);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card mt-5">
              <h3 className="text-center">Update Student Details</h3>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      placeholder="First Name"
                      name="firstname"
                      className="form-control"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      placeholder="Last Name"
                      name="lastname"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">College</label>
                    <input
                      placeholder="College"
                      name="college"
                      className="form-control"
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Percentage</label>
                    <input
                      placeholder="Percentage"
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
                      type="checkbox"
                      checked={activeStudent}
                      onChange={(e) => setActiveStudent(e.target.checked)} // Set to a boolean value
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={updateCurrentStudent}
                  >
                    Update Details
                  </button>
                  <Link className="btn btn-info" href={`/`}>
                    Back
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateStudent;
