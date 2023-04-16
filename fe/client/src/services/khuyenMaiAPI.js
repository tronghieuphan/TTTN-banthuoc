import axios from "axios";

const khuyenMaiAPI = {
    getKhuyenMai: (id) => {
        return axios.post(`http://localhost:9000/getbyId-khuyenMai`, id);
    },
};

export default khuyenMaiAPI;
