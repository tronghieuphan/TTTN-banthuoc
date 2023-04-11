import axios from "axios";

const danhMucAPI = {
    getAll: () => {
        return axios.get(`http://localhost:9000/getall-danhmuc`);
    },
};

export default danhMucAPI;
