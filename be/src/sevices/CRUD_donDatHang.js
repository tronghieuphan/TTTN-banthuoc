import express from "express";
import db from "../models/index";
import randomId from "./randomId";
import { Op } from "sequelize";

//Hiển thị tất cả đơn đặt hàng
let getAllDonDatHang = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listDonDatHang = await db.donDatHang.findAll();
            let count = await db.donDatHang.count();
            if (count > 0) {
                resolve(listDonDatHang);
            } else {
                resolve("List null");
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Thêm đơn đặt hàng
let createDonDatHang = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dondathang = await db.donDatHang.create({
                id: randomId.randomId("DH"),
                Ngaydathang: data.Ngaydathang,
                Tongtien: data.Tongtien,
                Pttt: data.Pttt,
                Sdt: data.Sdt,
                Phuong: data.Phuong,
                Quan: data.Quan,
                Thanhpho: data.Thanhpho,
                Trangthai: data.Trangthai,
                Ghichu: data.Ghichu,
                Mand: data.Mand,
                Makm: data.Makm,
            });
            console.log(dondathang);

            resolve({ result: "Create Successfully" });
        } catch (e) {
            reject(e);
        }
    });
};
//Thêm đơn đặt hàng
let createChitiet = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let chitiet = await db.chiTietDonHang.create({
                Maddh: randomId.randomId("DH"),
                Ngaydathang: data.Ngaydathang,
                Tongtien: data.Tongtien,
                Pttt: data.Pttt,
                Sdt: data.Sdt,
                Phuong: data.Phuong,
                Quan: data.Quan,
                Thanhpho: data.Thanhpho,
                Trangthai: data.Trangthai,
                Ghichu: data.Ghichu,
                Mand: data.Mand,
                Makm: data.Makm,
            });
            console.log(dondathang);

            resolve({ result: "Create Successfully" });
        } catch (e) {
            reject(e);
        }
    });
};
//Xóa đơn đặt hàng
let deleteDonDatHang = async (madondathang) => {
    return new Promise(async (resolve, reject) => {
        try {
            let madon = await db.donDatHang.findOne({
                where: {
                    id: madondathang.madondathang,
                },
            });
            if (madon) {
                await madon.destroy();
                resolve("Delete Successful");
            } else {
                resolve("Dondathang not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Cập nhập đơn đặt hàng
let updateDonDatHang = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findDonDatHang = await db.donDatHang.findOne({
                where: {
                    id: data.Id,
                },
            });
            console.log("findDonDatHang: ", findDonDatHang);
            if (findDonDatHang) {
                let upDDH = await db.donDatHang.update(
                    {
                        Ngaydathang: data.Ngaydathang,
                        Tongtien: data.Tongtien,
                        Pttt: data.Pttt,
                        Sdt: data.Sdt,
                        Phuong: data.Phuong,
                        Quan: data.Quan,
                        Thanhpho: data.Thanhpho,
                        Trangthai: data.Trangthai,
                        Ghichu: data.Ghichu,
                        Mand: data.Mand,
                        Makm: data.Makm,
                    },
                    {
                        where: {
                            id: data.Id,
                        },
                    }
                );
                console.log(">>>", upDDH);
                resolve("Update DonDatHang Successful");
            } else {
                resolve("DonDatHang not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Tìm theo tên mình muốn
let findDonDatHang = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let donDatHangById = await db.donDatHang.findAll({
                where: {
                    [Op.or]: [{ id: data.datafind }, { Sdt: data.datafind }],
                },
                raw: true,
            });
            if (donDatHangById) {
                resolve(donDatHangById);
            } else {
                resolve("Not Found");
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createDonDatHang,
    getAllDonDatHang,
    deleteDonDatHang,
    updateDonDatHang,
    findDonDatHang,
};
