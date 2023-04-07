import axios from "axios";

const URL= process.env.REACT_LOCALHOST;

const address={
    getAll_Province:()=>{
        return axios.get(`https://provinces.open-api.vn/api/`)
    },  
    getAll_District:()=>{
        return axios.get(`https://provinces.open-api.vn/api/d/`)
    },
    getAll_Ward:()=>{
        return axios.get(`https://provinces.open-api.vn/api/w/`)
    }
}

export default address