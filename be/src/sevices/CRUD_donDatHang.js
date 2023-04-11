import express from "express";
import db from "../models/index";
import randomId from "./randomId";
import { Op } from "sequelize";

//Hiển thị tất cả đơn đặt hàng
let getAllDonDatHang = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listDonDatHang = await db.donDatHang.findAll();
            if (listDonDatHang.length > 0) {
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
            // console.log(data);
            const Maddh = await randomId.randomId("DH");
            let donhang = await db.donDatHang.create({
                id: Maddh,
                Ngaydathang: data.Ngaydathang,
                Tongtien: data.Tongtien,
                Pttt: data.Pttt,
                Trangthai: data.Trangthai,
                Sdt: data.Sdt,
                Phuong: data.Phuong,
                Quan: data.Quan,
                Thanhpho: data.Thanhpho,
                Ghichu: data.Ghichu,
                Mand: data.Mand,
                Makm: data.Makm,
            });
            console.log(donhang);
            let listSp = data.ListSP;
            console.log("listSp : ", listSp);
            listSp &&
                listSp.map(async (a) => {
                    console.log("a: ", a);
                    await db.chiTietDonDatHang.create({
                        Maddh: Maddh,
                        Masp: a.Masp,
                        Soluong: a.Soluong,
                        Thanhtien: a.Thanhtien,
                    });
                });
            resolve({ message: "Create Successfully" });
        } catch (e) {
            reject(e);
        }
    });
};

let getChiTietDDH = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data);
            const chitietddh = await db.donDatHang.findOne({
                include: [{ model: db.sanPham}],
                rest: true,
                where: {
                    id: data.id,
                },
            });
            resolve(chitietddh.sanPhams);
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
                resolve({ message: "Update DonDatHang Successful", data: upDDH });
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
    updateDonDatHang,
    findDonDatHang,
    getChiTietDDH,
};
