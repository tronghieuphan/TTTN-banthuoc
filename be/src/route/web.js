import express from "express";
import nguoiDungController from "../controller/nguoiDungController";
import thuongHieuController from "../controller/thuongHieuController";
import xuatXuController from "../controller/xuatXuController";

let router = express.Router();

let initWebRotes = (app) => {
    router.get("/", (req, res) => {
        res.send("Backend TTTN Web");
    });
    //CRUD___NguoiDung
    router.post("/create-nguoidung", nguoiDungController.create_nguoiDung);
    router.post("/create-nguoidung-admin", nguoiDungController.create_nguoiDung_Admin);
    router.get("/getall-nguoidung", nguoiDungController.getAll_nguoiDung);
    router.get("/getbyName-nguoidung/:tendangnhap", nguoiDungController.getName_nguoiDung);
    router.get("/find-nguoidung", nguoiDungController.find_nguoiDung);
    router.delete("/delete-nguoidung/:tendangnhap", nguoiDungController.delete_nguoiDung);
    router.put("/update-nguoidung/:tendangnhap", nguoiDungController.update_nguoiDung);

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
    //
    return app.use("/", router);
};

export default initWebRotes;
