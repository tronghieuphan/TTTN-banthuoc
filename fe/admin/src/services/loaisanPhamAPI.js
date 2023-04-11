import axios from "axios";

// const URL = process.env.REACT_LOCALHOST;

const loaiSanPhamAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-loaisanpham`);
    },
    getByName: (loaisanpham_name) => {
        return axios.get(`http://localhost:9000/getbyName-loaisanpham?datafind=${loaisanpham_name}`);
    },
    create: (obj) => {
        return axios.post(`http://localhost:9000/create-loaisanpham`, obj);
    },
    update: (obj) => {
        return axios.put(`http://localhost:9000/update-loaisanpham/`, obj);
    },
    delete: (loaisanpham_name) => {
        return axios.delete(`http://localhost:9000/delete-loaisanpham/${loaisanpham_name}`);
    },
};

export default loaiSanPhamAPI;
