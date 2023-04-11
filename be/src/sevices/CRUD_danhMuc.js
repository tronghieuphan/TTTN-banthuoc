import express from "express";
import db from "../models/index";
import randomId from "./randomId";

//Hiển thị tất cả danh mục
let getAllDanhMuc = async () => {
    return new Promise(async (resolve, reject) => {
        try {
                let listDanhMuc = await db.danhMuc.findAll();
                let count = await db.danhMuc.count();
                if (count > 0) {
                    resolve(listDanhMuc);
                } else {
                    resolve("List null");
                }
        } catch (e) {
            reject(e);
        }
    });
};

//Thêm danh mục
let createDanhMuc = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(">>>", data.Tendm);
            let danhmuc = await db.danhMuc.findOrCreate({
                where: {
                    Tendm: data.Tendm,
                },
                defaults: {
                    id: randomId.randomId("DM"),
                },
            });
            console.log(danhmuc);
            if (danhmuc[1]) {
                resolve({ message: "Create Successfully", data: danhmuc[0] });
            } else {
                resolve({ message: "Danhmuc Exist" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Xóa danh mục
let deleteDanhMuc = async (tendm) => {
    return new Promise(async (resolve, reject) => {
        try {
            let tendm_delete = await db.danhMuc.findOne({
                where: {
                    Tendm: tendm,
                },
            });
            console.log("tendm_delete: ", tendm_delete.id);
            let loaisanpham = await db.loaiSanPham.findAll({
                where: {
                    Madm: tendm_delete.id,
                },
            });
            if (loaisanpham.length > 0) {
                resolve("Danh mục tồn tại loại sản phẩm");
            } else {
                if (tendm_delete) {
                    await tendm_delete.destroy();
                    resolve("Xóa thành công");
                } else {
                    resolve("Danhmuc không tồn tại");
                }
            }
            
        } catch (e) {
            reject(e);
        }
    });
};
//Cập nhập danh mục
let updateDanhMuc = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findDanhMuc = await db.danhMuc.findOne({
                where: {
                    id: data.id,
                },
            });
            console.log("findDanhMuc: ", findDanhMuc);
            if (findDanhMuc) {
                let updm = await db.danhMuc.update(
                    {
                        Tendm: data.Tendm,
                    },
                    {
                        where: {
                            id: data.id,
                        },
                    }
                );
                console.log(">>>", updm);
                resolve({ message: "Update DanhMuc Successful", data: updm });
            } else {
                resolve("DanhMuc not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Tìm theo tên danh mục
let getByNameDanhMuc = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let danhMucByName = await db.danhMuc.findAll({
                where: {
                    Tendm: data.datafind,
                },
            });
            if (danhMucByName) {
                resolve(danhMucByName);
            } else {
                resolve("Not Found");
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createDanhMuc,
    getAllDanhMuc,
    deleteDanhMuc,
    updateDanhMuc,
    getByNameDanhMuc,
};
