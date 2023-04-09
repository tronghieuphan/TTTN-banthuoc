import express from "express";
import db from "../models/index";
import bcrypt from "bcrypt";
import randomId from "./randomId";
import { Op } from "sequelize";
const salt = 10;

//Hiển thị tất cả người dùng
let getAllNguoiDung = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listNguoiDung = await db.nguoiDung.findAll();
            let count = await db.nguoiDung.count();
            if (count > 0) {
                resolve(listNguoiDung);
            } else {
                resolve("List null");
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Hie thi nguoi dung khuyen mai
let getAllNguoiDungKhuyenMai = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listChitiet = await db.chiTietKhuyenMai.findAll({
                where: {
                    Mand: "ND6D9CC",
                },
            });

            let count = await db.chiTietKhuyenMai.count();
            if (count > 0) {
                resolve(listChitiet);
            } else {
                resolve("List null");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Thêm người dùng
let createNguoiDung = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let mk = await hashPasswordUser(data.Matkhau);
            let nguoidung = await db.nguoiDung.findOrCreate({
                where: {
                    Tendangnhap: data.Tendangnhap,
                },
                defaults: {
                    id: randomId.randomId("ND"),
                    Holot: data.Holot,
                    Ten: data.Ten,
                    Sdt: data.Sdt,
                    Email: data.Email,
                    Matkhau: mk,
                    Loaind: data.Loaind,
                },
            });
            let khuyenmai = await db.khuyenMai.findAll();
            khuyenmai &&
                khuyenmai.map(async (a) => {
                    await db.chiTietKhuyenMai.create({
                        Makm: a.id,
                        Mand: nguoidung[0].id,
                    });
                });

            if (nguoidung[1]) {
                resolve({ message: "Create Successfull", data: nguoidung[0] });
            } else {
                resolve({ result: "NguoiDung Exist" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

//thêm nguoidung admin
let createNguoiDung_Admin = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data)
            let mk = await hashPasswordUser(data.Matkhau);
            console.log("mk: ", mk);

            let nguoidung = await db.nguoiDung.findOrCreate({
                where: {
                    Tendangnhap: data.Tendangnhap,
                },
                defaults: {
                    id: randomId.randomId("ND"),
                    Holot: data.Holot,
                    Ten: data.Ten,
                    Gioitinh: data.Gioitinh,
                    Ngaysinh: data.Ngaysinh,
                    Sdt: data.Sdt,
                    Email: data.Email,
                    Phuong: data.Phuong,
                    Quan: data.Quan,
                    Thanhpho: data.Thanhpho,
                    Tendangnhap: data.Tendangnhap,
                    Matkhau: mk,
                    Loaind: data.Loaind,
                },
            });
            console.log(nguoidung);
            if (nguoidung[1]) {
                resolve( { message:"Create Successfull",data:nguoidung[0]} );
            } else {
                resolve({ result: "NguoiDung Exist" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Xóa người dùng
let deleteNguoiDung = async (tendangnhap) => {
    return new Promise(async (resolve, reject) => {
        try {
            let tendn = await db.nguoiDung.findOne({
                where: {
                    Tendangnhap: tendangnhap.tendangnhap,
                },
            });
            if (tendn) {
                await tendn.destroy();
                resolve("Delete Successful");
            } else {
                resolve("Nguoidung not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Cập nhập người dùng
let updateNguoiDung = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findNguoiDung = await db.nguoiDung.findOne({
                where: {
                    Tendangnhap: data.Tendangnhap,
                },
            });
            console.log("findNguoiDung: ", findNguoiDung);
            if (findNguoiDung) {
                let upNd = await db.nguoiDung.update(
                    {
                        Holot: data.Holot,
                        Ten: data.Ten,
                        Gioitinh: data.Gioitinh,
                        Ngaysinh: data.Ngaysinh,
                        Sdt: data.Sdt,
                        Email: data.Email,
                        Phuong: data.Phuong,
                        Quan: data.Quan,
                        Thanhpho: data.Thanhpho,
                        Tendangnhap: data.Tendangnhap,
                        Matkhau: data.Matkhau,
                        Loaind: data.Loaind,
                    },
                    {
                        where: {
                            Tendangnhap: data.Tendangnhap,
                        },
                    }
                );
                console.log(">>>", upNd);
                resolve({ message: "Update Nguoidung Successful", data: upNd });
            } else {
                resolve("Nguoidung not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Tìm theo tendangnhap
let getByNameNguoiDung = (tendangnhap) => {
    return new Promise(async (resolve, reject) => {
        try {
            let nguoiDungByName = await db.nguoiDung.findAll({
                where: {
                    Tendangnhap: datafind,
                },
            });
            if (nguoiDungByName) {
                resolve(nguoiDungByName);
            } else {
                resolve("Not Found");
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Tìm theo tên mình muốn
let findNguoiDung = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let nguoiDungById = await db.nguoiDung.findAll({
                where: {
                    [Op.or]: [{ Tendangnhap: data.datafind }, { Sdt: data.datafind }],
                },
                raw: true,
            });
            if (nguoiDungById) {
                resolve(nguoiDungById);
            } else {
                resolve("Not Found");
            }
        } catch (e) {
            reject(e);
        }
    });
};

let loginNguoiDung = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let account = await db.nguoiDung.findOne({
                where: {
                    Tendangnhap: data.tendangnhap,
                },
            });
            if (account) {
                const mk = bcrypt.compareSync(data.matkhau, account.Matkhau);
                if (mk) {
                    resolve({ message: "Login Successfull", data: account });
                } else {
                    resolve("Fail Matkhau");
                }
            } else {
                resolve("Fail Login");
            }
        } catch (e) {
            reject(e);
        }
    });
};

let changePassword = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let mk = await hashPasswordUser(data.matkhau);
            let findNguoiDung = await db.nguoiDung.findOne({
                where: {
                    Tendangnhap: data.tendangnhap,
                },
            });
            console.log(">>>", findNguoiDung);
            if (findNguoiDung) {
                let changePa = await db.nguoiDung.update(
                    {
                        Matkhau: mk,
                    },
                    {
                        where: {
                            Tendangnhap: data.tendangnhap,
                        },
                    }
                );
                if (changePa) {
                    resolve("Change Succesfull");
                } else {
                    resolve("Change Fail");
                }
            } else {
                resolve("Not Exists ");
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Mã hóa mật khẩu
let hashPasswordUser = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hash(password, salt);
            console.log("password: ", hashPassword);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createNguoiDung,
    createNguoiDung_Admin,
    getAllNguoiDung,
    getAllNguoiDungKhuyenMai,
    deleteNguoiDung,
    updateNguoiDung,
    getByNameNguoiDung,
    findNguoiDung,
    loginNguoiDung,
    changePassword,
};
