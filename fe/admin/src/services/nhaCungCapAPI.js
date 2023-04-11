import axios from "axios";


const nhaCungCapAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-nhacungcap`);
    },
    getByName: (nhacungcap_name) => {
        return axios.get(`http://localhost:9000/getbyName-nhacungcap/datafind=${nhacungcap_name}`);
    },
    create: (obj) => {
        return axios.post(`http://localhost:9000/create-nhacungcap`, obj);
    },
    update: (obj) => {
        return axios.put(`http://localhost:9000/update`, obj);
    },
    delete: (nhacungcap_name) => {
        return axios.delete(`http://localhost:9000/delete-sanpham/${nhacungcap_name}`);
    },
};

export default nhaCungCapAPI;
