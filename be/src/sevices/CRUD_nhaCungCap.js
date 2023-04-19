import express from "express";
import db from "../models/index";
import randomId from "./randomId";
import { Op } from "sequelize";

//Hiển thị tất cả nhà cung cấp
let getAllNhaCungCap = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listNhaCungCap = await db.nhaCungCap.findAll();
            let count = await db.nhaCungCap.count();
            if (count > 0) {
                resolve(listNhaCungCap);
            } else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Thêm nhà cung cấp
let createNhaCungCap = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let nhacungcap = await db.nhaCungCap.findOrCreate({
                where: {
                    Tenncc: data.Tenncc,
                },
                defaults: {
                    id: randomId.randomId("NC"),
                    Email: data.Email,
                    Sdt: data.Sdt,
                    Phuong: data.Phuong,
                    Quan: data.Quan,
                    Thanhpho: data.Thanhpho,
                },
            });

            if (nhacungcap[1]) {
                resolve({ message: "Create Successfully", data: nhacungcap[0] });
            } else {
                resolve({ message: "NhaCungCap Exist" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Xóa nhà cung cấp
let deleteNhaCungCap = async (tenncc) => {
    return new Promise(async (resolve, reject) => {
        try {
            let tenncc_delete = await db.nhaCungCap.findOne({
                where: {
                    Tenncc: tenncc,
                },
            });

            let sanpham = await db.sanPham.findAll({
                where: {
                    Mancc: tenncc_delete.id,
                },
            });
            if (sanpham.length > 0) {
                resolve("Have Product Belongs NhaCungCap");
            } else {
                if (tenncc_delete) {
                    await tenncc_delete.destroy();
                    resolve("Delete Successful");
                } else {
                    resolve("NhaCungCap not exist");
                }
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Cập nhập nhà cung cấp
let updateNhaCungCap = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findNhaCungCap = await db.nhaCungCap.findOne({
                where: {
                    id: data.id,
                },
            });

            if (findNhaCungCap) {
                let upncc = await db.nhaCungCap.update(
                    {
                        Tenncc: data.Tenncc,
                        Email: data.Email,
                        Sdt: data.Sdt,
                        Phuong: data.Phuong,
                        Quan: data.Quan,
                        Thanhpho: data.Thanhpho,
                    },
                    {
                        where: {
                            id: data.id,
                        },
                    }
                );

                resolve({ message: "Update NhaCungCap Successful", data: upncc });
            } else {
                resolve("NhaCungCap not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Tìm theo tên nhà cung cấp
let getByNameNhaCungCap = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let nhaCungCapByName = await db.nhaCungCap.findAll({
                where: {
                    Tenncc: {
                        [Op.substring]: data.datafind,
                    },
                },
            });
            if (nhaCungCapByName) {
                resolve(nhaCungCapByName);
            } else {
                resolve("Not Found");
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createNhaCungCap,
    getAllNhaCungCap,
    deleteNhaCungCap,
    updateNhaCungCap,
    getByNameNhaCungCap,
};
