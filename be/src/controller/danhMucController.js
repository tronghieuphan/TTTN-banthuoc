import CRUD_danhMuc from "../sevices/CRUD_danhMuc";

let create_danhMuc = async (req, res) => {
    let danhmuc = await CRUD_danhMuc.createDanhMuc(req.body);
    res.status(200).json(danhmuc);
};

let getAll_danhMuc = async (req, res) => {
    let danhmuc = await CRUD_danhMuc.getAllDanhMuc();

    res.status(200).json(danhmuc);
};
let getName_danhMuc = async (req, res) => {
    let danhmuc = await CRUD_danhMuc.getByNameDanhMuc(req.query);
    res.status(200).json(danhmuc);
};

let delete_danhMuc = async (req, res) => {
    let tendanhmuc = req.params.tendm;
    let danhmuc = await CRUD_danhMuc.deleteDanhMuc(tendanhmuc);
    res.status(200).json(danhmuc);
};
let update_danhMuc = async (req, res) => {
    let danhmuc = await CRUD_danhMuc.updateDanhMuc(req.body);
    res.status(200).json(danhmuc);
};

module.exports = {
    create_danhMuc,
    getAll_danhMuc,
    delete_danhMuc,
    update_danhMuc,
    getName_danhMuc,
};
