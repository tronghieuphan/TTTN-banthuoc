import CRUD_nguoiDung from "../sevices/CRUD_nguoiDung";

let create_nguoiDung = async (req, res) => {
    let nguoidung = await CRUD_nguoiDung.createNguoiDung(req.body);
    res.status(200).json(nguoidung);
};

let create_nguoiDung_Admin = async (req, res) => {
    let nguoidung = await CRUD_nguoiDung.createNguoiDung_Admin(req.body);
    res.status(200).json(nguoidung);
};

let getAll_nguoiDung = async (req, res) => {
    let nguoidung = await CRUD_nguoiDung.getAllNguoiDung();
    res.status(200).json(nguoidung);
};
let getAll_nguoiDungKhuyenMai = async (req, res) => {
    let nguoidung = await CRUD_nguoiDung.getAllNguoiDungKhuyenMai();
    res.status(200).json(nguoidung);
};
let getName_nguoiDung = async (req, res) => {
    let tendangnhap = req.params.tendangnhap;
    let nguoidung = await CRUD_nguoiDung.getByIdNguoiDung(tendangnhap);
    res.status(200).json(nguoidung);
};
let find_nguoiDung = async (req, res) => {
    console.log(req.query);
    let nguoidung = await CRUD_nguoiDung.findNguoiDung(req.query);
    res.status(200).json(nguoidung);
};
let delete_nguoiDung = async (req, res) => {
    let tendangnhap = req.params;
    let nguoidung = await CRUD_nguoiDung.deleteNguoiDung(tendangnhap);
    res.status(200).json(nguoidung);
};
let update_nguoiDung = async (req, res) => {
    let nguoidung = await CRUD_nguoiDung.updateNguoiDung(req.body);
    res.status(200).json(nguoidung);
};
let login_nguoiDung = async (req, res) => {
    let nguoidung = await CRUD_nguoiDung.loginNguoiDung(req.body);
    res.status(200).json(nguoidung);
};
let changePass_nguoiDung = async (req, res) => {
    let nguoidung = await CRUD_nguoiDung.changePassword(req.body);
    res.status(200).json(nguoidung);
};
let nguoiDung_Discount = async (req, res) => {
    let nguoidung = await CRUD_nguoiDung.nguoiDungDiscount(req.body);
    res.status(200).json(nguoidung);
};


module.exports = {
    create_nguoiDung,
    create_nguoiDung_Admin,
    getAll_nguoiDung,
    getAll_nguoiDungKhuyenMai,
    delete_nguoiDung,
    update_nguoiDung,
    getName_nguoiDung,
    find_nguoiDung,
    login_nguoiDung,
    changePass_nguoiDung,
    nguoiDung_Discount
};
