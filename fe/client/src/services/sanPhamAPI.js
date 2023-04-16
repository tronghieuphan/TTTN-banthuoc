import axios from "axios";

const sanPhamAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-sanpham`);
    },
    getByName: (sanpham_name) => {
        return axios.get(`http://localhost:9000/find-sanphambyname?datafind=${sanpham_name}`);
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
    getByMaLoai: (sanpham_maloai) => {
        return axios.get(`http://localhost:9000/getsanpham-cungloai?datafind=${sanpham_maloai}`);
    },
};

export default sanPhamAPI;
