import express from "express";
import db from "../models/index";
import randomId from "./randomId";

import { Op, where } from "sequelize";

//Hiển thị tất cả sản phẩm
let getAllSanPham = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let listSanPham = await db.sanPham.findAll({
                include: [
                    { model: db.thuongHieu },
                    { model: db.nhaCungCap },
                    { model: db.loaiSanPham },
                    { model: db.xuatXu },
                ],
                raw: true,
                nest: true,
            });
            let count = await db.sanPham.count();
            if (count > 0) {
                resolve(listSanPham);
            } else {
                resolve("List null");
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Thêm sản phẩm
let createSanPham = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let sanpham = await db.sanPham.findOrCreate({
                where: {
                    Tensp: data.Tensp,
                },
                defaults: {
                    id: randomId.randomId("SP"),
                    Dongia: data.Dongia,
                    Donviban: data.Donviban,
                    Dangbaoche: data.Dangbaoche,
                    Quycach: data.Quycach,
                    Congdung: data.Congdung,
                    Giakm: data.Giakm,
                    Soluongtk: data.Soluong,
                    Gianhap: data.Gianhap,
                    Trangthai: data.Trangthai,
                    Ghichu: data.Ghichu,
                    Math: data.Math,
                    Mancc: data.Mancc,
                    Maloai: data.Maloai,
                    Maxx: data.Maxx,
                },
            });
            console.log(sanpham);
            if (sanpham[1]) {
                resolve({ message: "Create Successfully" ,data:sanpham[0]});
            } else {
                resolve({ message: "SanPham Exist" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

//Xóa sản phẩm
let deleteSanPham = async (tensp) => {
    return new Promise(async (resolve, reject) => {
        try {
            let tensp_delete = await db.sanPham.findOne({
                where: {
                    Tensp: tensp,
                },
            });
            if (tensp_delete) {
                await tensp_delete.destroy();
                resolve("Delete Successful");
            } else {
                resolve("SanPham not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Cập nhập sản phẩm
let updateSanPham = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let findSanPham = await db.sanPham.findOne({
                where: {
                    id: data.id,
                },
            });
            if (findSanPham) {
                let upSp = await db.sanPham.update(
                    {
                        Tensp: data.Tensp,
                        Dongia: data.Dongia,
                        Donviban: data.Donviban,
                        Dangbaoche: data.Dangbaoche,
                        Quycach: data.Quycach,
                        Congdung: data.Congdung,
                        Giakm: data.Giakm,
                        Soluongtk: data.Soluong,
                        Gianhap: data.Gianhap,
                        Trangthai: data.Trangthai,
                        Ghichu: data.Ghichu,
                        Math: data.Math,
                        Mancc: data.Mancc,
                        Maloai: data.Maloai,
                        Maxx: data.Maxx,
                    },
                    {
                        where: {
                            id: data.id,
                        },
                    }
                );
                console.log(">>>", upSp);
                resolve({message:"Update SanPham Successful",data:upSp});
            } else {
                resolve("SanPham not exist");
            }
        } catch (e) {
            reject(e);
        }
    });
};
//
let findSanPhamByName=(data)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            let name=await db.sanPham.findAll(
                {
                    where:{
                        Tensp:data.datafind
                    },
                    raw:true
                }     
            ) 
            if (name) {
                    resolve(name);
                } else {
                    resolve("Not Found");
                }
        }
        catch(e){
            reject(e);
        }
    })
}
//Tìm theo sản phẩm
let findSanPham = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let id = await db.thuongHieu.findOne({
                where: {
                    Tenth: data.datafind,
                },
                raw: true,
            });
            console.log(id);
            if (!id) {
                console.log(1);
                id = await db.xuatXu.findOne({
                    where: {
                        Tenxx: data.datafind,
                    },
                    raw: true,
                });
                if (!id) {
                    console.log(2);
                    id = await db.loaiSanPham.findOne({
                        where: {
                            Tenloai: data.datafind,
                        },
                        raw: true,
                    });
                }
            }
            let find = await db.sanPham.findAll({
                include: [
                    { model: db.thuongHieu },
                    { model: db.xuatXu },
                    { model: db.loaiSanPham },
                ],
                where: {
                    [Op.or]: [
                        { Math: id.id },
                        { Maxx: id.id },
                        { Maloai: id.id },
                    ],
                },
                raw: true,
                nest: true,
            });
            // console.log(find[0]);
            if (find) {
                resolve(find);
            } else {
                resolve("Not Found");
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createSanPham,
    getAllSanPham,
    deleteSanPham,
    updateSanPham,
    findSanPham,
    findSanPhamByName
};
