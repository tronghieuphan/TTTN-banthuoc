import CRUD_donDatHang from "../sevices/CRUD_donDatHang";

let create_donDatHang = async (req, res) => {
    let dondathang = await CRUD_donDatHang.createDonDatHang(req.body);
    res.status(200).json(dondathang);
};

let getAll_donDatHang = async (req, res) => {
    let dondathang = await CRUD_donDatHang.getAllDonDatHang();
    res.status(200).json(dondathang);
};
let find_donDatHang = async (req, res) => {
    let dondathang = await CRUD_donDatHang.findDonDatHang(req.query);
    res.status(200).json(dondathang);
};
let delete_donDatHang = async (req, res) => {
    let madondathang = req.params;
    let dondathang = await CRUD_donDatHang.deleteDonDatHang(madondathang);
    res.status(200).json(dondathang);
};
let update_donDatHang = async (req, res) => {
    let dondathang = await CRUD_donDatHang.updateDonDatHang(req.body);
    res.status(200).json(dondathang);
};
let getChiTiet_donDatHang = async (req, res) => {
    let dondathang = await CRUD_donDatHang.getChiTietDDH(req.body);
    res.status(200).json(dondathang);
};
module.exports = {
    create_donDatHang,
    getAll_donDatHang,
    delete_donDatHang,
    update_donDatHang,
    find_donDatHang,
    getChiTiet_donDatHang,
};
