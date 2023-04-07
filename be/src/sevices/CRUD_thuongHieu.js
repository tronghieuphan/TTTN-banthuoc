import express from "express";
import db from "../models/index";
import randomId from "./randomId";

// import { Op } from "sequelize";

//Hiển thị tất cả thương hiệu
let getAllThuongHieu = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listThuongHieu = await db.thuongHieu.findAll();
            let count = await db.thuongHieu.count();
            if (count > 0) {
                resolve(listThuongHieu);
            } else {
                resolve("List null");
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Thêm thương hiệu
let createThuongHieu = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(">>>", data.Tenth);
            let thuonghieu = await db.thuongHieu.findOrCreate({
                where: {
                    Tenth: data.Tenth,
                },
                defaults: {
                    id: randomId.randomId("TH"),
                },
            });
            console.log(thuonghieu);
            if (thuonghieu[1]) {
                resolve({ result: "Create Successfully" });
            } else {
                resolve({ result: "Thuonghieu Exist" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Xóa thương hiệu
let deleteThuongHieu = async (tenth) => {
    return new Promise(async (resolve, reject) => {
        try {
            let tenth_delete = await db.thuongHieu.findOne({
                where: {
                    Tenth: tenth,
                },
            });
            if (tenth_delete) {
                await tenth_delete.destroy();
                resolve("Delete Successful");
            } else {
                resolve("Thuonghieu not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Cập nhập thương hiệu
let updateThuongHieu = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findThuongHieu = await db.thuongHieu.findOne({
                where: {
                    id: data.id,
                },
            });
            console.log("findThuongHieu: ", findThuongHieu);
            if (findThuongHieu) {
                let upTh = await db.thuongHieu.update(
                    {
                        Tenth: data.Tenth,
                    },
                    {
                        where: {
                            id: data.id,
                        },
                    }
                );
                console.log(">>>", upTh);
                resolve("Update ThuongHieu Successful");
            } else {
                resolve("ThuongHieu not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Tìm theo tên thương hiệu
let getByNameThuongHieu = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let thuongHieuByName = await db.thuongHieu.findAll({
                where: {
                    Tenth: data.datafind,
                },
            });
            if (thuongHieuByName) {
                resolve(thuongHieuByName);
            } else {
                resolve("Not Found");
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createThuongHieu,
    getAllThuongHieu,
    deleteThuongHieu,
    updateThuongHieu,
    getByNameThuongHieu,
};
