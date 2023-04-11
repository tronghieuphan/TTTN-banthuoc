import axios from "axios";

const URL = process.env.REACT_LOCALHOST;

const khuyenMaiAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-khuyenMai`);
    },
    getByName: (khuyenMai_name) => {
        return axios.get(`http://localhost:9000/getbyName-khuyenMai?datafind=${khuyenMai_name}`);
    },
    create: (obj) => {
        return axios.post(`http://localhost:9000/create-khuyenMai`, obj);
    },
    update: (obj) => {
        return axios.put(`http://localhost:9000/update-khuyenMai`, obj);
    },
    delete: (khuyenMai_name) => {
        return axios.delete(`http://localhost:9000/delete-khuyenMai/${khuyenMai_name}`);
    },
};

export default khuyenMaiAPI;
