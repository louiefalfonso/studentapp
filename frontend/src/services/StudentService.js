import axios from "axios";

const STUDENT_BASE_REST_API_URL = "http://localhost:8080/api/students";

const StudentService = {
  
  getAllStudents: async () => {
    return axios.get(STUDENT_BASE_REST_API_URL);
  },

  getStudentById(studentId) {
    return axios.get(`${STUDENT_BASE_REST_API_URL}/${studentId}`);
  },
};

export default StudentService;
