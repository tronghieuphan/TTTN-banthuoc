import axios from "axios";

const URL = process.env.REACT_LOCALHOST;

const danhMucAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-danhmuc`);
    },
    getByName: (danhmuc_name) => {
        return axios.get(`${URL}/getbyName-danhmuc?datafind=${danhmuc_name}`);
    },
    create: (obj) => {
        return axios.post(`${URL}/create-danhmuc`, obj);
    },
    update: (obj) => {
        return axios.put(`${URL}/update-danhmuc`, obj);
    },
    delete: (danhmuc_name) => {
        return axios.delete(`${URL}/delete-danhmuc/${danhmuc_name}`);
    },
};

export default danhMucAPI;
