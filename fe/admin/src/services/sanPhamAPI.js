import axios from "axios";

// const URL = process.env.REACT_LOCALHOST;

const sanphamAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-sanpham`);
    },
    getByName: (sanpham_name) => {
        return axios.get(`http://localhost:9000/find-sanpham?datafind=${sanpham_name}`);
    },
    create: (obj) => {
        return axios.post(`http://localhost:9000/create-sanpham`, obj);
    },
    update: ( obj) => {
        return axios.put(`http://localhost:9000/update-sanpham/`, obj);
    },
    delete: (sanpham_name) => {
        return axios.delete(`http://localhost:9000/delete-sanpham/${sanpham_name}`);
    },
};

export default sanphamAPI;
