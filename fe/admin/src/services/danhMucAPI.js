import axios from "axios";


const danhMucAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-danhmuc`);
    },
    getByName: (danhmuc_name) => {
        return axios.get(`http://localhost:9000/getbyName-danhmuc?datafind=${danhmuc_name}`);
    },
    create: (obj) => {
        return axios.post(`http://localhost:9000/create-danhmuc`, obj);
    },
    update: (obj) => {
        return axios.put(`http://localhost:9000/update-danhmuc`, obj);
    },
    delete: (danhmuc_name) => {
        return axios.delete(`http://localhost:9000/delete-danhmuc/${danhmuc_name}`);
    },
};

export default danhMucAPI;
