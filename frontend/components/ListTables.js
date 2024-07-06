import React, { useState, useEffect } from "react";
import StudentServices from "@/services/StudentServices";

const ListTables = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {getAllStudents();}, []);

  const getAllStudents = () => {
    StudentServices.getAllStudents()
      .then((response) => {
        setStudents(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center"> Student List</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Student Id </th>
            <th>Student First Name </th>
            <th>Student Last Name </th>
            <th>Student Email Id </th>
            <th>College</th>
            <th>Percentage</th>
            <th>Active Student</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id} </td>
              <td> {student.firstName} </td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.college}</td>
              <td>{student.percentage}</td>
              <td>{student.activeStudent.toString().toUpperCase()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTables;
