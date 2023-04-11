import axios from "axios";

const loaiSanPhamAPI = {
    getLoaiByDanhMuc: (obj) => {
        return axios.get(`http://localhost:9000/get-loaisanphambydanhmuc`,obj);
    },
};

export default loaiSanPhamAPI;
