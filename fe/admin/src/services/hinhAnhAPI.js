import axios from "axios";

// const URL = process.env.REACT_LOCALHOST;

const hinhAnhAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-hinhAnh`);
    },
    create: (obj) => {
        return axios.post(`http://localhost:9000/create-hinhAnh`, obj);
    },
    update: (hinhAnh_id, obj) => {
        return axios.put(`http://localhost:9000/update/${hinhAnh_id}`, obj);
    },
    delete: (hinhAnh_url) => {
        return axios.delete(`http://localhost:9000/delete-hinhAnh/${hinhAnh_url}`);
    },

};

export default hinhAnhAPI;
