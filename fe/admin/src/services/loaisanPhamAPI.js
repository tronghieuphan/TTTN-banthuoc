import axios from "axios";

// const URL = process.env.REACT_LOCALHOST;

const sanphamAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-loaisanpham`);
    },
    getByName: (sanpham_name) => {
        return axios.get(`http://localhost:9000/getbyName-sanpham?datafind=${sanpham_name}`);
    },
    create: (obj) => {
        return axios.post(`http://localhost:9000/create-loaisanpham`, obj);
    },
    update: (sanpham_id, obj) => {
        return axios.put(`http://localhost:9000//update-loaisanpham/${sanpham_id}`, obj);
    },
    delete: (sanpham_name) => {
        return axios.delete(`http://localhost:9000//delete-loaisanpham/${sanpham_name}`);
    },
};

export default sanphamAPI;
