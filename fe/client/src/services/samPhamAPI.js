import axios from "axios";

const sanPhamAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-sanpham`);
    },
    getSanPhamKhuyenMai: () => {
        return axios.get(`http://localhost:9000/getkhuyenmai-sanpham`);
    },
    getSanPhamMoi: () => {
        return axios.get(`http://localhost:9000/getnew-sanpham`);
    },
    getSanPhamLienQuan: () => {
        return axios.get(`http://localhost:9000/getrandom-sanpham`);
    },
    getSanPhamTrungBay: () => {
        return axios.get(`http://localhost:9000/gettrungbay-sanpham`);
    },
};

export default sanPhamAPI;
