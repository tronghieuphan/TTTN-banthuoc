import express from "express";
import db from "../models/index";
import randomId from "./randomId";

//Hiển thị tất cả dxuất xứ
let getAllXuatXu = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listXuatXu = await db.xuatXu.findAll();
            let count = await db.xuatXu.count();
            if (count > 0) {
                resolve(listXuatXu);
            } else {
                resolve("List null");
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Thêm xuất xứ
let createXuatXu = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(">>>", data.Tenxx);
            let xuatxu = await db.xuatXu.findOrCreate({
                where: {
                    Tenxx: data.Tenxx,
                },
                defaults: {
                    id: randomId.randomId("XX"),
                },
            });
            console.log(">>>", xuatxu);
            if (xuatxu[1]) {
                resolve({ message: "Create Successfully", data: xuatxu[0] });
            } else {
                resolve({ message: "Xuatxu Exist" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Xóa xuất xứ
let deleteXuatXu = async (Tenxx) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Tenxx_delete = await db.xuatXu.findOne({
                where: {
                    Tenxx: Tenxx,
                },
            });
            console.log("Tenxx_delete: ", Tenxx_delete.id);
            let sanpham = await db.sanPham.findAll({
                where: {
                    Maxx: Tenxx_delete.id,
                },
            });
            if (sanpham.length > 0) {
                resolve("Have Product Belongs Xuat Xu");
            } else {
                if (Tenxx_delete) {
                    await Tenxx_delete.destroy();
                    resolve("Delete Successful");
                } else {
                    resolve("Xuatxu not exist");
                }
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Cập nhập xuất xứ
let updateXuatXu = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findXuatXu = await db.xuatXu.findOne({
                where: {
                    id: data.id,
                },
            });
            console.log("findXuatXu: ", findXuatXu);
            if (findXuatXu) {
                let upTh = await db.xuatXu.update(
                    {
                        Tenxx: data.Tenxx,
                    },
                    {
                        where: {
                            id: data.id,
                        },
                    }
                );
                console.log(">>>", upTh);
                resolve({ message: "Update XuatXu Successful", data: upTh });
            } else {
                resolve("XuatXu not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Tìm theo theo tên dxuất xứ
let getByNameXuatXu = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let xuatXuByName = await db.xuatXu.findAll({
                where: {
                    Tenxx: data.datafind,
                },
            });
            if (xuatXuByName) {
                resolve(xuatXuByName);
            } else {
                resolve("Not Found");
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createXuatXu,
    getAllXuatXu,
    deleteXuatXu,
    updateXuatXu,
    getByNameXuatXu,
};
