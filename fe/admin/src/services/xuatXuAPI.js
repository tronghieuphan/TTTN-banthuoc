import axios from "axios";


const xuatXuAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-xuatxu`);
    },
    getByName: (xuatxu_name) => {
        return axios.get(`http://localhost:9000/getbyName-xuatxu?datafind=${xuatxu_name}`);
    },
    create: (obj) => {
        return axios.post(`http://localhost:9000/create-xuatxu`, obj);
    },
    update: (obj) => {
        return axios.put(`http://localhost:9000/update-xuatxu`, obj);
    },
    delete: (xuatxu_name) => {
        return axios.delete(`http://localhost:9000/delete-xuatxu/${xuatxu_name}`);
    },
};

export default xuatXuAPI;
