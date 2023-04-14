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
    getSanPhamLienQuan: (obj) => {
        return axios.post(`http://localhost:9000/getrandom-sanpham`, obj);
    },
    getSanPhamTrungBay: () => {
        return axios.get(`http://localhost:9000/gettrungbay-sanpham`);
    },
    getSanPhamChiTiet: (id) => {
        return axios.post(`http://localhost:9000/getchitiet-sanpham`, id);
    },
};

export default sanPhamAPI;
