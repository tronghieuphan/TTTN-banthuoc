import CRUD_hinhAnh from "../sevices/CRUD_hinhAnh";

let create_hinhAnh = async (req, res) => {
    let hinhanh = await CRUD_hinhAnh.createHinhAnh(req.body);
    res.status(200).json(hinhanh);
};

let getAll_hinhAnh = async (req, res) => {
    let hinhanh = await CRUD_hinhAnh.getAllHinhAnh();
    res.status(200).json(hinhanh);
};
let getName_hinhAnh = async (req, res) => {
    let hinhanh = await CRUD_hinhAnh.getByNameHinhAnh(req.query);
    res.status(200).json(hinhanh);
};

let delete_hinhAnh = async (req, res) => {
    let url = req.params.url;
    let hinhanh = await CRUD_hinhAnh.deleteHinhAnh(url);
    res.status(200).json(hinhanh);
};
let delete_hinhAnhid = async (req, res) => {
    let id = req.params.id;
    let hinhanh = await CRUD_hinhAnh.deleteHinhAnhid(id);
    res.status(200).json(hinhanh);
};

let update_hinhAnh = async (req, res) => {
    let hinhanh = await CRUD_hinhAnh.updateHinhAnh(req.body);
    res.status(200).json(hinhanh);
};

module.exports = {
    create_hinhAnh,
    getAll_hinhAnh,
    delete_hinhAnh,
    update_hinhAnh,
    getName_hinhAnh,
    delete_hinhAnhid,
};
