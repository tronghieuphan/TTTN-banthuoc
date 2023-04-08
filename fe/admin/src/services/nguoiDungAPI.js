import axios from "axios";

const URL = process.env.REACT_LOCALHOST;

const nguoiDungAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-nguoidung`);
    },
    getByName: (nguoidung_name) => {
        return axios.get(`${URL}/getbyName-nguoidung?datafind=${nguoidung_name}`);
    },
    create: (obj) => {
        return axios.post(`${URL}/create-nguoidung`, obj);
    },
    update: (obj) => {
        return axios.put(`${URL}/update-nguoidung`, obj);
    },
    delete: (nguoidung_name) => {
        return axios.delete(`${URL}/delete-nguoidung/${nguoidung_name}`);
    },
    login:(obj)=>{
        return axios.post(`http://localhost:9000/login-nguoidung`,obj);
    }
};

export default nguoiDungAPI;