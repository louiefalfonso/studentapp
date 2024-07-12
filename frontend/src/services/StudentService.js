import axios from "axios";

const STUDENT_BASE_REST_API_URL = "http://localhost:8080/api/students";

const StudentService = {
  getAllStudents: async () => {
    return axios.get(STUDENT_BASE_REST_API_URL);
  },
  
  getStudentById(id) {
  return axios.get(`http://localhost:8080/api/students/${id}`);
  },

  updateCurrentStudent(currentStudent, id) {
    return axios.put(`http://localhost:8080/api/students/${id}`, currentStudent);
  }

};

export default StudentService;
