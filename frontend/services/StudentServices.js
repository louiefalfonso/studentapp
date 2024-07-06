import axios from "axios";

const STUDENT_BASE_REST_API_URL = "http://localhost:8080/api/students";
class StudentServices {
    
  getAllStudents() {
    return axios.get(STUDENT_BASE_REST_API_URL);
  }

}

export default new StudentServices();
