"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import StudentService from "@/services/StudentService";

const StudentTableList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await StudentService.getAllStudents();
        setStudents(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center"> Student List </h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Student Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>College</th>
            <th>Percentage</th>
            <th>Active Student</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id} </td>
              <td>{student.firstName} </td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.college}</td>
              <td>{student.percentage}</td>
              <td>{student.activeStudent ? "Yes" : "No"}</td>
              <td>
                <Link
                  className="btn btn-primary"
                  href={`/student/${student.id}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-secondary"
                  href={`/update-student/${student.id}`}
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTableList;
