import CRUD_nguoiDung from "../sevices/CRUD_nguoiDung";

let create_nguoiDung = async (req, res) => {
    let nguoidung = await CRUD_nguoiDung.createNguoiDung(req.body);
    console.log("req.body: ", req.body);
    res.status(200).json(nguoidung);
};

let create_nguoiDung_Admin = async (req, res) => {
    let nguoidung = await CRUD_nguoiDung.createNguoiDung_Admin(req.body);
    console.log("req.body: ", req.body);
    res.status(200).json(nguoidung);
};

let getAll_nguoiDung = async (req, res) => {
    let nguoidung = await CRUD_nguoiDung.getAllNguoiDung();
    console.log(nguoidung);
    res.status(200).json(nguoidung);
};
let getName_nguoiDung = async (req, res) => {
    let tendangnhap = req.params.tendangnhap;
    let nguoidung = await CRUD_nguoiDung.getByIdNguoiDung(tendangnhap);
    res.status(200).json(nguoidung);
};
let find_nguoiDung = async (req, res) => {
    let dieukien1 = req.query;
    console.log(dieukien1);
    let nguoidung = await CRUD_nguoiDung.findNguoiDung(dieukien1);
    res.status(200).json(nguoidung);
};
let delete_nguoiDung = async (req, res) => {
    let tendangnhap = req.params;
    let nguoidung = await CRUD_nguoiDung.deleteNguoiDung(tendangnhap);
    res.status(200).json(nguoidung);
};
let update_nguoiDung = async (req, res) => {
    let tendangnhap = req.params;
    let nguoidung = await CRUD_nguoiDung.updateNguoiDung(tendangnhap, req.body);
    res.status(200).json(nguoidung);
};

module.exports = {
    create_nguoiDung,
    create_nguoiDung_Admin,
    getAll_nguoiDung,
    delete_nguoiDung,
    update_nguoiDung,
    getName_nguoiDung,
    find_nguoiDung,
};
