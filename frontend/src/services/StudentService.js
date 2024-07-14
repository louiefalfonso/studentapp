import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_DEV_API_BASE_URL;

const StudentService = {
  getAllStudents: async () => {
    return axios.get(API_BASE_URL);
  },

  getStudentById(id) {
    return axios.get(`${API_BASE_URL}/${id}`);
  },

  updateCurrentStudent(currentStudent, id) {
    return axios.put(`${API_BASE_URL}/${id}`, currentStudent);
  },

  addNewStudent(id){
    return axios.post(API_BASE_URL,id);
  },

  deleteStudent(id){
    return axios.delete(`${API_BASE_URL}/${id}`);
  }

};

export default StudentService;
