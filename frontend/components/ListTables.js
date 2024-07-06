import React, { useState, useEffect } from "react";
import StudentServices from "@/services/StudentServices";

const ListTables = () => {

  //define student state
  const [students, setStudents] = useState([]);
  
  useEffect(() => {getAllStudents();}, []);

  const getAllStudents = () => {
    StudentServices.getAllStudents()
       //get response from the promise object
      .then((response) => {
        //set response data
        setStudents(response.data);
        //display data in console
        console.log(response.data);
      })
      .catch((error) => {
        //display error in console
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
            <th>Student Email Address</th>
            <th>College / Department</th>
            <th>Percentage</th>
            <th>Active Student</th>
          </tr>
        </thead>
        <tbody>

          {
            //call students state variable using map function
            students.map(
              //create an alias
              (student) => (
              // provide a unique key for each row  
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
