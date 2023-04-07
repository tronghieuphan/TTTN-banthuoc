import express from "express";
import db from "../models/index";
import randomId from "./randomId";

//Hiển thị tất cả nhà cung cấp
let getAllNhaCungCap = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listNhaCungCap = await db.nhaCungCap.findAll();
            let count = await db.nhaCungCap.count();
            if (count > 0) {
                resolve(listNhaCungCap);
            } else {
                resolve("List null");
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
            console.log(">>>", data);
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
            console.log(nhacungcap);
            if (nhacungcap[1]) {
                resolve({ result: "Create Successfully" });
            } else {
                resolve({ result: "NhaCungCap Exist" });
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

            if (tenncc_delete) {
                await tenncc_delete.destroy();
                resolve("Delete Successful");
            } else {
                resolve("NhaCungCap not exist");
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
            console.log("findNhaCungCap: ", findNhaCungCap);
            if (findNhaCungCap) {
                let updm = await db.nhaCungCap.update(
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
                console.log(">>>", updm);
                resolve("Update NhaCungCap Successful");
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
                    Tenncc: data.datafind,
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
