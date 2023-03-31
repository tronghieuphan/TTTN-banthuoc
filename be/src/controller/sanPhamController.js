import CRUD_sanPham from "../sevices/CRUD_sanPham";

let create_sanPham = async (req, res) => {
    let sanpham = await CRUD_sanPham.createSanPham(req.body);
    console.log("req.body: ", req.body);
    res.status(200).json(sanpham);
};

let getAll_sanPham = async (req, res) => {
    let sanpham = await CRUD_sanPham.getAllSanPham();
    console.log(sanpham);
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

module.exports = {
    create_sanPham,
    getAll_sanPham,
    delete_sanPham,
    update_sanPham,
    find_sanPham,
    find_sanPhamByName,
};
