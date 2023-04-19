import express from "express";
import nguoiDungController from "../controller/nguoiDungController";
import thuongHieuController from "../controller/thuongHieuController";
import xuatXuController from "../controller/xuatXuController";
import danhMucController from "../controller/danhMucController";
import loaiSanPhamController from "../controller/loaiSanPhamController";
import khuyenMaiController from "../controller/khuyenMaiController";
import hinhAnhController from "../controller/hinhAnhController";
import nhaCungCapController from "../controller/nhaCungCapController";
import sanPhamController from "../controller/sanPhamController";
import donDatHangController from "../controller/donDatHangController";

let router = express.Router();

let initWebRotes = (app) => {
    router.get("/", (req, res) => {
        res.send("Backend TTTN Web");
    });
    //CRUD___NguoiDung
    router.post("/create-nguoidung", nguoiDungController.create_nguoiDung);
    router.post("/create-nguoidung-admin", nguoiDungController.create_nguoiDung_Admin);
    router.get("/getall-nguoidung", nguoiDungController.getAll_nguoiDung);
    router.get("/getall-nguoidungkhuyenmai", nguoiDungController.getAll_nguoiDungKhuyenMai);
    router.get("/getbyName-nguoidung/:tendangnhap", nguoiDungController.getName_nguoiDung);
    router.get("/find-nguoidung", nguoiDungController.find_nguoiDung);
    router.delete("/delete-nguoidung/:tendangnhap", nguoiDungController.delete_nguoiDung);
    router.put("/update-nguoidung", nguoiDungController.update_nguoiDung);
    router.post("/login-nguoidung", nguoiDungController.login_nguoiDung);
    router.post("/changepass-nguoidung", nguoiDungController.changePass_nguoiDung);
    router.post("/nguoidung-discount", nguoiDungController.nguoiDung_Discount);

    //CRUD___ThuongHieu
    router.post("/create-thuonghieu", thuongHieuController.create_thuongHieu);
    router.get("/getall-thuonghieu", thuongHieuController.getAll_thuongHieu);
    router.get("/getbyName-thuonghieu", thuongHieuController.getName_thuongHieu);
    router.delete("/delete-thuonghieu/:tenth", thuongHieuController.delete_thuongHieu);
    router.put("/update-thuonghieu", thuongHieuController.update_thuongHieu);

    //CRUD___Xuatxu
    router.post("/create-xuatxu", xuatXuController.create_xuatXu);
    router.get("/getall-xuatxu", xuatXuController.getAll_xuatXu);
    router.get("/getbyName-xuatxu", xuatXuController.getName_xuatXu);
    router.delete("/delete-xuatxu/:tenxx", xuatXuController.delete_xuatXu);
    router.put("/update-xuatxu", xuatXuController.update_xuatXu);

    //CRUD___Danhmuc
    router.post("/create-danhmuc", danhMucController.create_danhMuc);
    router.get("/getall-danhmuc", danhMucController.getAll_danhMuc);
    router.get("/getbyName-danhmuc", danhMucController.getName_danhMuc);
    router.delete("/delete-danhmuc/:tendm", danhMucController.delete_danhMuc);
    router.put("/update-danhmuc", danhMucController.update_danhMuc);

    //CRUD___Loaisanpham
    router.post("/create-loaisanpham", loaiSanPhamController.create_loaiSanPham);
    router.get("/getall-loaisanpham", loaiSanPhamController.getAll_loaiSanPham);
    router.get("/getbyName-loaisanpham", loaiSanPhamController.getName_loaiSanPham);
    router.delete("/delete-loaisanpham/:tenloai", loaiSanPhamController.delete_loaiSanPham);
    router.put("/update-loaisanpham", loaiSanPhamController.update_loaiSanPham);
    router.get("/get-loaisanphambydanhmuc", loaiSanPhamController.get_loaiSanPhamByDanhMuc);
    router.get("/get-loaisanphamtpcn", loaiSanPhamController.getLSP_TPCN);
    router.get("/get-loaisanphamdmp", loaiSanPhamController.getLSP_DMP);
    router.get("/get-loaisanphamt", loaiSanPhamController.getLSP_T);
    router.get("/get-loaisanphamcscn", loaiSanPhamController.getLSP_CSCN);
    router.get("/get-loaisanphamtbit", loaiSanPhamController.getLSP_TBIT);
    router.get("/get-loaisanphamnoibat", loaiSanPhamController.getLoaiSP_NoiBat);

    //CRUD___khuyenMai
    router.post("/create-khuyenMai", khuyenMaiController.create_khuyenMai);
    router.get("/getall-khuyenMai", khuyenMaiController.getAll_khuyenMai);
    router.get("/getbyName-khuyenMai", khuyenMaiController.getName_khuyenMai);
    router.post("/getbyId-khuyenMai", khuyenMaiController.getID_khuyenMai);
    router.delete("/delete-khuyenMai/:tenkm", khuyenMaiController.delete_khuyenMai);
    router.put("/update-khuyenMai", khuyenMaiController.update_khuyenMai);

    //CRUD___hinhAnh
    router.post("/create-hinhAnh", hinhAnhController.create_hinhAnh);
    router.get("/getall-hinhAnh", hinhAnhController.getAll_hinhAnh);
    router.get("/getbyName-hinhAnh", hinhAnhController.getName_hinhAnh);
    //router.delete("/delete-hinhAnh/:url", hinhAnhController.delete_hinhAnh);
    router.delete("/delete-hinhAnhid/:id", hinhAnhController.delete_hinhAnhid);
    router.put("/update-hinhAnh", hinhAnhController.update_hinhAnh);

    //CRUD___nhaCungCap
    router.post("/create-nhacungcap", nhaCungCapController.create_nhaCungCap);
    router.get("/getall-nhacungcap", nhaCungCapController.getAll_nhaCungCap);
    router.get("/getbyName-nhacungcap", nhaCungCapController.getName_nhaCungCap);
    router.delete("/delete-nhacungcap/:tenncc", nhaCungCapController.delete_nhaCungCap);
    router.put("/update-nhacungcap", nhaCungCapController.update_nhaCungCap);

    //CRUD___sanPham
    router.post("/create-sanpham", sanPhamController.create_sanPham);
    router.get("/getall-sanpham", sanPhamController.getAll_sanPham);
    router.delete("/delete-sanpham/:tensp", sanPhamController.delete_sanPham);
    router.put("/update-sanpham", sanPhamController.update_sanPham);
    router.get("/find-sanpham", sanPhamController.find_sanPham);
    router.get("/find-sanphambyname", sanPhamController.find_sanPhamByName);
    router.get("/getnew-sanpham", sanPhamController.getNew_sanPham);
    router.get("/getkhuyenmai-sanpham", sanPhamController.getKhuyenMai_sanPham);
    router.post("/getrandom-sanpham", sanPhamController.getRandom_sanPham);
    router.get("/gettrungbay-sanpham", sanPhamController.getRandom_sanPhamTrungBay);
    router.post("/getchitiet-sanpham", sanPhamController.getchiTiet_SanPham);
    router.get("/getsanpham-cungloai", sanPhamController.getsanpham_cungloai);
    router.get("/getsanpham-id", sanPhamController.getsanpham_id);

    //CRUD___donDatHang
    router.post("/create-dondathang", donDatHangController.create_donDatHang);
    router.post("/getchitiet-dondathang", donDatHangController.getChiTiet_donDatHang);
    router.get("/getall-dondathang", donDatHangController.getAll_donDatHang);
    router.delete("/delete-dondathang/:madondathang", donDatHangController.delete_donDatHang);
    router.put("/update-dondathang", donDatHangController.update_donDatHang);
    router.get("/find-dondathang", donDatHangController.find_donDatHang);

    return app.use("/", router);
};

export default initWebRotes;
