import CRUD_loaiSanPham from "../sevices/CRUD_loaiSanPham";

let create_loaiSanPham = async (req, res) => {
    let loaisanpham = await CRUD_loaiSanPham.createLoaiSanPham(req.body);
    res.status(200).json(loaisanpham);
};

let getAll_loaiSanPham = async (req, res) => {
    let loaisanpham = await CRUD_loaiSanPham.getAllLoaiSanPham();
    res.status(200).json(loaisanpham);
};
let getName_loaiSanPham = async (req, res) => {
    let loaisanpham = await CRUD_loaiSanPham.getByNameLoaiSanPham(req.query);
    res.status(200).json(loaisanpham);
};
let get_loaiSanPhamByDanhMuc = async (req, res) => {
    let loaisanpham = await CRUD_loaiSanPham.getLoaiSanPhamByDanhMuc(req.body);
    res.status(200).json(loaisanpham);
};

let delete_loaiSanPham = async (req, res) => {
    let tenloaisanpham = req.params.tenloai;
    let loaisanpham = await CRUD_loaiSanPham.deleteLoaiSanPham(tenloaisanpham);
    res.status(200).json(loaisanpham);
};
let update_loaiSanPham = async (req, res) => {
    let loaisanpham = await CRUD_loaiSanPham.updateLoaiSanPham(req.body);
    res.status(200).json(loaisanpham);
};

module.exports = {
    create_loaiSanPham,
    getAll_loaiSanPham,
    delete_loaiSanPham,
    update_loaiSanPham,
    getName_loaiSanPham,
    get_loaiSanPhamByDanhMuc,
};
