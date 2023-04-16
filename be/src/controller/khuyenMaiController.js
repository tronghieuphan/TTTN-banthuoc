import CRUD_khuyenMai from "../sevices/CRUD_khuyenMai";

let create_khuyenMai = async (req, res) => {
    let khuyenmai = await CRUD_khuyenMai.createKhuyenMai(req.body);
    res.status(200).json(khuyenmai);
};

let getAll_khuyenMai = async (req, res) => {
    let khuyenmai = await CRUD_khuyenMai.getAllKhuyenMai();
    res.status(200).json(khuyenmai);
};
let getName_khuyenMai = async (req, res) => {
    let khuyenmai = await CRUD_khuyenMai.getByNameKhuyenMai(req.query);
    res.status(200).json(khuyenmai);
};

let delete_khuyenMai = async (req, res) => {
    let tenkhuyenmai = req.params.tenkm;
    let khuyenmai = await CRUD_khuyenMai.deleteKhuyenMai(tenkhuyenmai);
    res.status(200).json(khuyenmai);
};
let update_khuyenMai = async (req, res) => {
    let khuyenmai = await CRUD_khuyenMai.updateKhuyenMai(req.body);
    res.status(200).json(khuyenmai);
};
let getID_khuyenMai = async (req, res) => {
    console.log(req.body);
    let khuyenmai = await CRUD_khuyenMai.getByIDKhuyenMai(req.body);
    res.status(200).json(khuyenmai);
};

module.exports = {
    create_khuyenMai,
    getAll_khuyenMai,
    delete_khuyenMai,
    update_khuyenMai,
    getName_khuyenMai,
    getID_khuyenMai,
};
