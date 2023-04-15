import axios from "axios";

const donDatHangAPI = {
    getAllSdt: (Sdt) => {
        return axios.get(`http://localhost:9000/find-dondathang?datafind=${Sdt}`);
    },
};
export default donDatHangAPI;
