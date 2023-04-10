import axios from "axios";

// const URL = process.env.REACT_LOCALHOST;

const hinhAnhAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-hinhAnh`);
    },
    create: (obj) => {
        return axios.post(`http://localhost:9000/create-hinhAnh`, obj);
    },
    update: (obj) => {
        return axios.put(`http://localhost:9000/update-hinhanh`, obj);
    },
    // delete: (hinhAnh_url) => {
    //     return axios.delete(`http://localhost:9000/delete-hinhAnh/${hinhAnh_url}`);
    // },
    delete: (hinhAnh_id) => {
        return axios.delete(`http://localhost:9000/delete-hinhAnhid/${hinhAnh_id}`);
    },

};

export default hinhAnhAPI;
