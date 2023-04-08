import express from "express";
import db from "../models/index";
import randomId from "./randomId";

// import { Op } from "sequelize";

//Hiển thị tất cả khuyến mãi
let getAllKhuyenMai = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listKhuyenMai = await db.khuyenMai.findAll();
            let count = await db.khuyenMai.count();
            if (count > 0) {
                resolve(listKhuyenMai);
            } else {
                resolve("List null");
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Thêm khuyến mãi
let createKhuyenMai = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("data: ", randomId.randomId("KM"));

            let khuyenmai = await db.khuyenMai.findOrCreate({
                where: {
                    Tenkm: data.Tenkm,
                },
                defaults: {
                    id: randomId.randomId("KM"),
                    Code: data.Code,
                    Phantram: data.Phantram,
                    Ngaybd: data.Ngaybd,
                    Ngaykt: data.Ngaykt,
                    Dieukhoan: data.Dieukhoan,
                    Trangthai: data.Trangthai,
                },
            });
            console.log(khuyenmai);
            if (khuyenmai[1]) {
                resolve({ message: "Create Successfully",data:khuyenmai[0] });
            } else {
                resolve({ message: "KhuyenMai Exist" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Xóa khuyến mãi
let deleteKhuyenMai = async (tenkm) => {
    return new Promise(async (resolve, reject) => {
        try {
            let tenkm_delete = await db.khuyenMai.findOne({
                where: {
                    Tenkm: tenkm,
                },
            });
            if (tenkm_delete) {
                await tenkm_delete.destroy();
                resolve("Delete Successful");
            } else {
                resolve("KhuyenMai not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Cập nhập khuyến mãi
let updateKhuyenMai = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findKhuyenMai = await db.khuyenMai.findOne({
                where: {
                    id: data.Id,
                },
            });
            if (findKhuyenMai) {
                let upKm = await db.khuyenMai.update(
                    {
                        Tenkm: data.Tenkm,
                        Code: data.Code,
                        Phantram: data.Phantram,
                        Ngaybd: data.Ngaybd,
                        Ngaykt: data.Ngaykt,
                        Dieukhoan: data.Dieukhoan,
                        Trangthai: data.Trangthai,
                    },
                    {
                        where: {
                            id: data.id,
                        },
                    }
                );
                console.log(">>>", upKm);
                resolve({message:"Update KhuyenMai Successful",data:upKm});
            } else {
                resolve("KhuyenMai not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Tìm theo tên khuyến mãi
let getByNameKhuyenMai = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let khuyenMaiByName = await db.khuyenMai.findAll({
                where: {
                    Tenkm: data.datafind,
                },
            });
            if (khuyenMaiByName) {
                resolve(khuyenMaiByName);
            } else {
                resolve("Not Found");
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createKhuyenMai,
    getAllKhuyenMai,
    deleteKhuyenMai,
    updateKhuyenMai,
    getByNameKhuyenMai,
};
