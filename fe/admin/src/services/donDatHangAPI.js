import axios from "axios";

const dondathangAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getAll-dondathang`);
    },
    getChiTietSanPham: (id_donhang) => {
        return axios.post(`http://localhost:9000/getchitiet-dondathang`, id_donhang);
    },
  
    update: (obj) => {
        return axios.put(`http://localhost:9000/update-dondathang`, obj);
    },
};

export default dondathangAPI;
