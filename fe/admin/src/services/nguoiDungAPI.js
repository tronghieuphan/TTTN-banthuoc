import axios from "axios";

const nguoiDungAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-nguoidung`);
    },
    getByName: (nguoidung_name) => {
        return axios.get(`http://localhost:9000/find-nguoidung?datafind=${nguoidung_name}`);
    },
    create: (obj) => {
        return axios.post(`http://localhost:9000/create-nguoidung-admin`, obj);
    },
    update: (obj) => {
        return axios.put(`http://localhost:9000/update-nguoidung`, obj);
    },
    delete: (nguoidung_name) => {
        return axios.delete(`http://localhost:9000/delete-nguoidung/${nguoidung_name}`);
    },
    login: (obj) => {
        return axios.post(`http://localhost:9000/login-nguoidung`, obj);
    },
};

export default nguoiDungAPI;
