import axios from "axios";

// const URL = process.env.REACT_LOCALHOST;

const thuonghieuAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-thuonghieu`);
    },
    getByName: (thuonghieu_name) => {
        return axios.get(`http://localhost:9000/getbyName-thuonghieu?datafind=${thuonghieu_name}`);
    },
    create: (obj) => {
        return axios.post(`http://localhost:9000/create-thuonghieu`, obj);
    },
    update: (thuonghieu_id, obj) => {
        return axios.put(`http://localhost:9000/update/${thuonghieu_id}`, obj);
    },
    delete: (thuonghieu_name) => {
        return axios.delete(`http://localhost:9000/delete-thuonghieu/${thuonghieu_name}`);
    },

};

export default thuonghieuAPI;
