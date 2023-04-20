import axios from "axios";

const donDatHangAPI = {
    getAllSdt: (Sdt) => {
        return axios.get(`http://localhost:9000/find-dondathang?datafind=${Sdt}`);
    },
    getChiTiet: (id) => {
        return axios.post(`http://localhost:9000/getchitiet-dondathang`, id);
    },
    create: (obj) => {
        return axios.post(`http://localhost:9000/create-dondathang`, obj);
    },
};

export default donDatHangAPI;
