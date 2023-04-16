import axios from "axios";

const loaiSanPhamAPI = {
    getLoaiByDanhMuc: (obj) => {
        return axios.get(`http://localhost:9000/get-loaisanphambydanhmuc`,obj);
    },
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-loaisanpham`);
    },
};

export default loaiSanPhamAPI;
