import CRUD_sanPham from "../sevices/CRUD_sanPham";

let create_sanPham = async (req, res) => {
    let sanpham = await CRUD_sanPham.createSanPham(req.body);
    res.status(200).json(sanpham);
};

let getAll_sanPham = async (req, res) => {
    let sanpham = await CRUD_sanPham.getAllSanPham();
    res.status(200).json(sanpham);
};
let find_sanPham = async (req, res) => {
    let sanpham = await CRUD_sanPham.findSanPham(req.query);
    res.status(200).json(sanpham);
};

let find_sanPhamByName = async (req, res) => {
    let sanpham = await CRUD_sanPham.findSanPhamByName(req.query);
    res.status(200).json(sanpham);
};
let delete_sanPham = async (req, res) => {
    let tensanpham = req.params.tensp;
    let sanpham = await CRUD_sanPham.deleteSanPham(tensanpham);
    res.status(200).json(sanpham);
};
let update_sanPham = async (req, res) => {
    let sanpham = await CRUD_sanPham.updateSanPham(req.body);
    res.status(200).json(sanpham);
};
let getNew_sanPham = async (req, res) => {
    let sanpham = await CRUD_sanPham.getNewSanPham();
    res.status(200).json(sanpham);
};
let getKhuyenMai_sanPham = async (req, res) => {
    let sanpham = await CRUD_sanPham.getSanPhamKhuyenMai();
    res.status(200).json(sanpham);
};
let getRandom_sanPham = async (req, res) => {
    let sanpham = await CRUD_sanPham.getRandomSanPham(req.body);
    res.status(200).json(sanpham);
};
let getRandom_sanPhamTrungBay = async (req, res) => {
    let sanpham = await CRUD_sanPham.getRandomSanPhamTrungBay();
    res.status(200).json(sanpham);
};
let getchiTiet_SanPham = async (req, res) => {
    let sanpham = await CRUD_sanPham.getChiTietSanPham(req.body);
    res.status(200).json(sanpham);
};
module.exports = {
    create_sanPham,
    getAll_sanPham,
    delete_sanPham,
    update_sanPham,
    find_sanPham,
    find_sanPhamByName,
    getNew_sanPham,
    getKhuyenMai_sanPham,
    getRandom_sanPham,
    getRandom_sanPhamTrungBay,
    getchiTiet_SanPham

};
