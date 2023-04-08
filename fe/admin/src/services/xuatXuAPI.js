import axios from "axios";

const URL = process.env.REACT_LOCALHOST;

const xuatXuAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-xuatxu`);
    },
    getByName: (xuatxu_name) => {
        return axios.get(`${URL}/getbyName-xuatxu?datafind=${xuatxu_name}`);
    },
    create: (obj) => {
        return axios.post(`${URL}/create-xuatxu`, obj);
    },
    update: (obj) => {
        return axios.put(`${URL}/update-xuatxu`, obj);
    },
    delete: (xuatxu_name) => {
        return axios.delete(`${URL}/delete-xuatxu/${xuatxu_name}`);
    },
};

export default xuatXuAPI;
