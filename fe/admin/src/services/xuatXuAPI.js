import axios from "axios";

const URL = process.env.REACT_LOCALHOST;

const xuatXuAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-xuatXu`);
    },
    getByName: (xuatXu_name) => {
        return axios.get(`${URL}/getbyName-xuatXu${xuatXu_name}`);
    },
    create: (obj) => {
        return axios.post(`${URL}/create-xuatXu`, obj);
    },
    update: (xuatXu_id, obj) => {
        return axios.put(`${URL}/update/${xuatXu_id}`, obj);
    },
    delete: (xuatXu_name) => {
        return axios.delete(`${URL}/delete-sanpham/${xuatXu_name}`);
    },
};

export default xuatXuAPI;
