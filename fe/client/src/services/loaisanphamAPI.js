import axios from "axios";

const loaiSanPhamAPI = {
    getLoaiByDanhMuc: (obj) => {
        return axios.get(`http://localhost:9000/get-loaisanphambydanhmuc`, obj);
    },
    getLoaiByT: () => {
        return axios.get(`http://localhost:9000/get-loaisanphamt`);
    },
    getLoaiByCSCN: () => {
        return axios.get(`http://localhost:9000/get-loaisanphamcscn`);
    },
    getLoaiByTPCN: () => {
        return axios.get(`http://localhost:9000/get-loaisanphamtpcn`);
    },
    getLoaiByTBIT: () => {
        return axios.get(`http://localhost:9000/get-loaisanphamtbit`);
    },
    getLoaiByDMP: () => {
        return axios.get(`http://localhost:9000/get-loaisanphamdmp`);
    },
    getLoai: () => {
        return axios.get(`http://localhost:9000/get-loaisanphamnoibat`);
    },

};

export default loaiSanPhamAPI;
