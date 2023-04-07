import axios from "axios";

const URL = process.env.REACT_LOCALHOST;

const danhMucAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-danhmuc`);
    },
    getByName: (danhmuc_name) => {
        return axios.get(`${URL}/getbyName-danhmuc${danhmuc_name}`);
    },
    create: (obj) => {
        return axios.post(`${URL}/create-danhmuc`, obj);
    },
    update: (danhmuc_id, obj) => {
        return axios.put(`${URL}/update/${danhmuc_id}`, obj);
    },
    delete: (danhmuc_name) => {
        return axios.delete(`${URL}/delete-sanpham/${danhmuc_name}`);
    },
};

export default danhMucAPI;
