import express from "express";
import db from "../models/index";
import randomId from "./randomId";

//Hiển thị tất cả danh mục
let getAllHinhAnh = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listDanhMuc = await db.hinhAnh.findAll();
            let count = await db.hinhAnh.count();
            if (count > 0) {
                resolve(listDanhMuc);
            } else {
                resolve("List null");
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Thêm danh mục
let createHinhAnh = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(">>>", data.Url);
            let hinhanh = await db.hinhAnh.findOrCreate({
                where: {
                    Url: data.Url,
                },
                defaults: {
                    id: randomId.randomId("HA"),
                    Masp:data.Masp
                },
            });
            console.log(hinhanh);
            if (hinhanh[1]) {
                resolve({ result: "Create Successfully" });
            } else {
                resolve({ result: "HinhAnh Exist" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Xóa danh mục
let deleteHinhAnh = async (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            let url_delete = await db.hinhAnh.findOne({
                where: {
                    Url: url,
                },
            });

            if (url_delete) {
                await url_delete.destroy();
                resolve("Delete Successful");
            } else {
                resolve("HinhAnh not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Cập nhập danh mục
let updateHinhAnh = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findHinhAnh = await db.hinhAnh.findOne({
                where: {
                    id: data.Id,
                },
            });
            console.log("findHinhAnh: ", findHinhAnh);
            if (findHinhAnh) {
                let updm = await db.hinhAnh.update(
                    {
                        id: data.Id,
                        Masp:data.Masp

                    },
                    {
                        where: {
                            Url: data.Url,

                        },
                    }
                );
                console.log(">>>", updm);
                resolve("Update HinhAnh Successful");
            } else {
                resolve("HinhAnh not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Tìm theo tên danh mục
let getByNameHinhAnh = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hinhanhByName = await db.hinhAnh.findAll({
                where: {
                    Url: data.datafind,
                },
            });
            if (hinhanhByName) {
                resolve(hinhanhByName);
            } else {
                resolve("Not Found");
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createHinhAnh,
    getAllHinhAnh,
    deleteHinhAnh,
    updateHinhAnh,
    getByNameHinhAnh,
};
