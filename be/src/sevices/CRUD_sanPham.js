import express from "express";
import db from "../models/index";
import randomId from "./randomId";
var Sequelize = require("sequelize");
import { Op, where } from "sequelize";

//Hiển thị tất cả sản phẩm
let getAllSanPham = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listSanPham = await db.sanPham.findAll({
                include: [
                    { model: db.thuongHieu },
                    { model: db.nhaCungCap },
                    { model: db.loaiSanPham },
                    { model: db.xuatXu },
                ],
                raw: true,
                nest: true,
            });
            let count = await db.sanPham.count();
            if (count > 0) {
                resolve(listSanPham);
            } else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Thêm sản phẩm
let createSanPham = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let sanpham = await db.sanPham.findOrCreate({
                where: {
                    Tensp: data.Tensp,
                },
                defaults: {
                    id: randomId.randomId("SP"),
                    Dongia: data.Dongia,
                    Donviban: data.Donviban,
                    Dangbaoche: data.Dangbaoche,
                    Quycach: data.Quycach,
                    Congdung: data.Congdung,
                    Giakm: data.Giakm,
                    Soluongtk: data.Soluong,
                    Gianhap: data.Gianhap,
                    Trangthai: data.Trangthai,
                    Ghichu: data.Ghichu,
                    Math: data.Math,
                    Mancc: data.Mancc,
                    Maloai: data.Maloai,
                    Maxx: data.Maxx,
                },
            });
            if (sanpham[1]) {
                resolve({ message: "Create Successfully", data: sanpham[0] });
            } else {
                resolve({ message: "SanPham Exist" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Xóa sản phẩm
let deleteSanPham = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let tensp_delete = await db.sanPham.findOne({
                where: {
                    id: id,
                },
            });
            let hinhanh = await db.hinhAnh.findAll({
                where: {
                    Masp: tensp_delete.id,
                },
            });
            if (hinhanh.length > 0) {
                resolve("Have Product Belongs Hinh ảnh");
            } else {
                if (tensp_delete) {
                    await tensp_delete.destroy();
                    resolve("Delete Successful");
                } else {
                    resolve("SanPham not exist");
                }
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Cập nhập sản phẩm
let updateSanPham = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findSanPham = await db.sanPham.findOne({
                where: {
                    id: data.id,
                },
            });
            if (findSanPham) {
                let upSp = await db.sanPham.update(
                    {
                        Tensp: data.Tensp,
                        Dongia: data.Dongia,
                        Donviban: data.Donviban,
                        Dangbaoche: data.Dangbaoche,
                        Quycach: data.Quycach,
                        Congdung: data.Congdung,
                        Giakm: data.Giakm,
                        Soluongtk: data.Soluongtk,
                        Gianhap: data.Gianhap,
                        Trangthai: data.Trangthai,
                        Ghichu: data.Ghichu,
                        Math: data.Math,
                        Mancc: data.Mancc,
                        Maloai: data.Maloai,
                        Maxx: data.Maxx,
                    },
                    {
                        where: {
                            id: data.id,
                        },
                    }
                );
                resolve({ message: "Update SanPham Successful", data: upSp });
            } else {
                resolve("SanPham not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//
let findSanPhamByName = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let name = await db.sanPham.findAll({
                include: [{ model: db.hinhAnh }],
                nest: true,
                where: {
                    Tensp: {
                        [Op.substring]: data.datafind,
                    },
                },
            });
            if (name) {
                resolve(name);
            } else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Tìm theo loại sản phẩm
let getByMaLoai = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let maloai = await db.sanPham.findAll({
                where: {
                    Maloai: data.datafind,
                },
                include: { model: db.hinhAnh },
                nest: true,
            });
            if (maloai) {
                resolve(maloai);
            } else {
                resolve("Not Found");
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Tìm theo id sản phẩm
let getByID = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let id = await db.sanPham.findAll({
                where: {
                    id: data.datafind,
                },
                raw: true,
            });
            if (id) {
                resolve(id);
            } else {
                resolve("Not Found");
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Tìm theo sản phẩm
let findSanPham = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let id = await db.thuongHieu.findOne({
                where: {
                    Tenth: data.datafind,
                },
                raw: true,
            });
            if (!id) {
                id = await db.xuatXu.findOne({
                    where: {
                        Tenxx: data.datafind,
                    },
                    raw: true,
                });
                if (!id) {
                    id = await db.loaiSanPham.findOne({
                        where: {
                            Tenloai: data.datafind,
                        },
                        raw: true,
                    });
                }
            }
            let find = await db.sanPham.findAll({
                include: [
                    { model: db.thuongHieu },
                    { model: db.xuatXu },
                    { model: db.loaiSanPham },
                ],
                where: {
                    [Op.or]: [{ Math: id.id }, { Maxx: id.id }, { Maloai: id.id }],
                },
                raw: true,
                nest: true,
            });
            if (find) {
                resolve(find);
            } else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    });
};

let getNewSanPham = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let sanpham = await db.sanPham.findAll({
                include: { model: db.hinhAnh },
                nest: true,
                limit: 12,
                order: [["createdAt", "DESC"]],
            });
            resolve(sanpham);
        } catch (e) {
            reject(e);
        }
    });
};
let getSanPhamKhuyenMai = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let sanpham = await db.sanPham.findAll({
                include: { model: db.hinhAnh },
                nest: true,
                limit: 5,
                where: { Giakm: { [Op.not]: null } },
                order: [[Sequelize.literal("RAND()")]],
            });
            resolve(sanpham);
        } catch (e) {
            reject(e);
        }
    });
};
let getRandomSanPham = (maloai) => {
    return new Promise(async (resolve, reject) => {
        try {
            let sanpham = await db.sanPham.findAll({
                order: [[Sequelize.literal("RAND()")]],
                include: { model: db.hinhAnh },
                nest: true,
                limit: 5,
                where: {
                    Maloai: maloai.Maloai,
                },
            });
            resolve(sanpham);
        } catch (e) {
            reject(e);
        }
    });
};
let getRandomSanPhamTrungBay = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let sanpham = await db.sanPham.findAll({
                include: { model: db.hinhAnh },
                nest: true,
                order: [[Sequelize.literal("RAND()")]],
                limit: 12,
            });
            resolve(sanpham);
        } catch (e) {
            reject(e);
        }
    });
};

let getChiTietSanPham = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let sanpham = await db.sanPham.findOne({
                where: {
                    id: data.id,
                },
                include: [
                    { model: db.thuongHieu },
                    { model: db.nhaCungCap },
                    { model: db.loaiSanPham },
                    { model: db.xuatXu },
                ],
                raw: true,
                nest: true,
            });
            let danhmuc = await db.loaiSanPham.findOne({
                where: {
                    id: sanpham.loaiSanPham.id,
                },
                include: [{ model: db.danhMuc }],
            });
            console.log(danhmuc);
            let obj = {
                id: sanpham.id,
                Tensp: sanpham.Tensp,
                Tenth: sanpham.thuongHieu.Tenth,
                Dongia: sanpham.Dongia,
                Donviban: sanpham.Donviban,
                Tendm: danhmuc.danhMuc.Tendm,
                Giakm: sanpham.Giakm,
                Loai: sanpham.loaiSanPham.Tenloai,
                Tenxx: sanpham.xuatXu.Tenxx,
                Quycach: sanpham.Quycach,
                Tenncc: sanpham.nhaCungCap.Tenncc,
                Congdung: sanpham.Congdung,
            };
            resolve(obj);
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createSanPham,
    getAllSanPham,
    deleteSanPham,
    updateSanPham,
    findSanPham,
    findSanPhamByName,
    getNewSanPham,
    getSanPhamKhuyenMai,
    getRandomSanPham,
    getRandomSanPhamTrungBay,
    getChiTietSanPham,
    getByMaLoai,
    getByID,
};
