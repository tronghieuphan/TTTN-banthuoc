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
                resolve([]);
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
            const Maddh = await randomId.randomId("DH");
            let donhang = await db.donDatHang.create({
                id: Maddh,
                Ngaydathang: data.Ngaydathang,
                Tongtien: data.Tongtien,
                Pttt: data.Pttt,
                Trangthai: 0,
                Sdt: data.Sdt,
                Phuong: data.Phuong,
                Sonha: data.Sonha,
                Quan: data.Quan,
                Thanhpho: data.Thanhpho,
                Ghichu: data.Ghichu,
                Mand: data.Mand,
                Makm: data.Makm,
            });
            await db.chiTietKhuyenMai.destroy({
                where: {
                    [Op.and]: [{ Mand: data.Mand }, { Makm: data.Makm }],
                },
            });
            let listSp = data.ListSP;
            listSp &&
                listSp.map(async (a) => {
                    await db.chiTietDonDatHang.create({
                        Maddh: Maddh,
                        Masp: a.id,
                        Soluong: a.Soluong,
                        Thanhtien: a.Thanhtien,
                    });
                    let find = await db.sanPham.findOne({
                        where: {
                            id: a.id,
                        },
                    });
                    await db.sanPham.update(
                        {
                            Soluongtk: find.Soluongtk - a.Soluong,
                        },
                        {
                            where: {
                                id: a.id,
                            },
                        }
                    );
                });

            resolve({ message: "Create Successfully", data: donhang });
        } catch (e) {
            reject(e);
        }
    });
};

//
let getChiTietDDH = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const chitietddh1 = await db.chiTietDonDatHang.findAll({
                where: {
                    Maddh: data.id,
                },
                raw: true,
            });
            const danhsach = Promise.all(
                await chitietddh1.map(async (e) => {
                    const a = await db.sanPham.findOne({
                        where: {
                            id: e.Masp,
                        },
                        raw: true,
                        attributes: ["Tensp", "Dongia", "Giakm"],
                    });
                    let km = 0;
                    if (a.Giakm === null) {
                        km = a.Dongia;
                    } else {
                        km = a.Giakm;
                    }
                    console.log(km);
                    const b = {
                        ...a,
                        Masp: e.Masp,
                        Soluong: e.Soluong,
                        Thanhtien: e.Soluong * km,
                    };
                    return b;
                })
            );
            resolve(danhsach);
        } catch (e) {
            reject(e);
        }
    });
};

//Cập nhập đơn đặt hàng
let updateDonDatHang = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
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
                        id: data.id,
                    },
                }
            );
            resolve({ message: "Update DonDatHang Successful", data: upDDH });
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
                include: [{ model: db.khuyenMai, attributes: ["Phantram"] }],
                where: {
                    [Op.or]: [{ id: data.datafind }, { Sdt: data.datafind }],
                },
                nest: true,
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
