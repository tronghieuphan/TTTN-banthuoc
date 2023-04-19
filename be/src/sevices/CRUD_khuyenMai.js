import express from "express";
import db from "../models/index";
import randomId from "./randomId";

import { Op } from "sequelize";

//Hiển thị tất cả khuyến mãi
let getAllKhuyenMai = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listKhuyenMai = await db.khuyenMai.findAll();
            let count = await db.khuyenMai.count();
            if (count > 0) {
                resolve(listKhuyenMai);
            } else {
                resolve([]);
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

            if (khuyenmai[1]) {
                let nguoidung = await db.nguoiDung.findAll();
                nguoidung &&
                    nguoidung.map(async (a) => {
                        await db.chiTietKhuyenMai.create({
                            Makm: khuyenmai[0].id,
                            Mand: a.id,
                        });
                    });
                resolve({ message: "Create Successfully", data: khuyenmai[0] });
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
                    id: tenkm,
                },
            });
            let khuyenmainguoidung = await db.chiTietKhuyenMai.findAll({
                where: {
                    Makm: tenkm_delete.id,
                },
            });

            let khuyenmaidonhang = await db.donDatHang.findAll({
                where: {
                    Makm: tenkm_delete.id,
                },
            });
            if (khuyenmaidonhang.lenght > 0) {
                resolve("Have DonDatHang belongs KhuyenMai");
            } else if (khuyenmainguoidung.length > 0) {
                resolve("Have NguoiDung belongs KhuyenMai");
            } else {
                if (tenkm_delete) {
                    await tenkm_delete.destroy();
                    resolve("Delete Successful");
                } else {
                    resolve("KhuyenMai not exist");
                }
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
            let find = await db.donDatHang.findAll({
                where: {
                    Makm: data.id,
                },
            });
            if (find.length > 0) {
                resolve({ message: "KhuyenMai Belongs DonDatHang" });
            } else {
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
                resolve({ message: "Update KhuyenMai Successful", data: upKm });
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
                    Tenkm: {
                        [Op.substring]: data.datafind,
                    },
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
let getByIDKhuyenMai = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let khuyenMaiByName = await db.khuyenMai.findOne({
                where: {
                    id: data.id,
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
    getByIDKhuyenMai,
};
