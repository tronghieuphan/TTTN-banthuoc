import express from "express";
import db from "../models/index";
import randomId from "./randomId";

//Hiển thị tất cả loại sản phẩm
let getAllLoaiSanPham = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listLoaiSanPham = await db.loaiSanPham.findAll({
                include: [{ model: db.danhMuc }],
                raw: true,
                nest: true,
            }); // listLoaiSanPham.lenght() >0 trả ra list
            // console.log("listLoaiSanPham: ", listLoaiSanPham[0].danhMuc.Tendm);
            let count = await db.loaiSanPham.count();
            if (count > 0) {
                resolve(listLoaiSanPham);
            } else {
                resolve("List null");
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Thêm loại sản phẩm
let createLoaiSanPham = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(">>>", data.Tenloai);
            let loaisanpham = await db.loaiSanPham.findOrCreate({
                where: {
                    Tenloai: data.Tenloai,
                },
                defaults: {
                    id: randomId.randomId("L_"),
                    Madm: data.Madm,
                },
            });
            console.log(loaisanpham);
            if (loaisanpham[1]) {
                resolve({ result: "Create Successfully" });
            } else {
                resolve({ result: "LoaiSanPham Exist" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Xóa loại sản phẩm
let deleteLoaiSanPham = async (tenloai) => {
    return new Promise(async (resolve, reject) => {
        try {
            let tenloai_delete = await db.loaiSanPham.findOne({
                where: {
                    Tenloai: tenloai,
                },
            });
            if (tenloai_delete) {
                await tenloai_delete.destroy();
                resolve("Delete Successful");
            } else {
                resolve("LoaiSanPham not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Cập nhập loại sản phẩm
let updateLoaiSanPham = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findLoaiSanPham = await db.loaiSanPham.findOne({
                where: {
                    id: data.id,
                },
            });
            console.log("findLoaiSanPham: ", findLoaiSanPham);
            if (findLoaiSanPham) {
                let uploai = await db.loaiSanPham.update(
                    {
                        Tendm: data.Tenloai,
                        Madm: data.Madm,
                    },
                    {
                        where: {
                            id: data.id,
                        },
                    }
                );
                console.log(">>>", uploai);
                resolve("Update LoaiSanPham Successful");
            } else {
                resolve("LoaiSanPham not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Tìm theo tên loại sản phẩm
let getByNameLoaiSanPham = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let loaiSanPhamByName = await db.loaiSanPham.findAll({
                include: [
                    {
                        model: db.danhMuc,
                        // where: {
                        //     Tendm: data.datafind,
                        // },
                    },
                ],
                where: {
                    Tenloai: data.datafind,
                },
                raw: true,
                nest: true,
            });
            if (loaiSanPhamByName) {
                resolve(loaiSanPhamByName);
            } else {
                resolve("Not Found");
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createLoaiSanPham,
    getAllLoaiSanPham,
    deleteLoaiSanPham,
    updateLoaiSanPham,
    getByNameLoaiSanPham,
};
