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

//Thêm dxuất xứ
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
                resolve({ result: "Create Successfully" });
            } else {
                resolve({ result: "Xuatxu Exist" });
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
            if (Tenxx_delete) {
                await Tenxx_delete.destroy();
                resolve("Delete Successful");
            } else {
                resolve("Xuatxu not exist");
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
                    id: data.Id,
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
                            id: data.Id,
                        },
                    }
                );
                console.log(">>>", upTh);
                resolve("Update XuatXu Successful");
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
                    Tenxx: data.Tenxx,
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
