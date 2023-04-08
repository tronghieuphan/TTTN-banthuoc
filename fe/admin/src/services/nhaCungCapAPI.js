import axios from "axios";

const URL = process.env.REACT_LOCALHOST;

const nhaCungCapAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-nhacungcap`);
    },
    getByName: (nhacungcap_name) => {
        return axios.get(`${URL}/getbyName-nhacungcap/datafind=${nhacungcap_name}`);
    },
    create: (obj) => {
        return axios.post(`${URL}/create-nhacungcap`, obj);
    },
    update: (obj) => {
        return axios.put(`${URL}/update`, obj);
    },
    delete: (nhacungcap_name) => {
        return axios.delete(`${URL}/delete-sanpham/${nhacungcap_name}`);
    },
};

export default nhaCungCapAPI;
