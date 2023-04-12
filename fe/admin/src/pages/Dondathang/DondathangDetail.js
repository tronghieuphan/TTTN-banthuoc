import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dondathangAPI from "../../services/donDatHangAPI";
function DonDatHangDetail() {
    const { dondathang } = useSelector((state) => state.dataAdd);
    const [listchitiet, setChiTiet] = useState([]);
    let id = {
        id: dondathang.id,
    };

    let obj = {
        ...listchitiet.sanpham,
        Tensp: listchitiet.thongtin,
    };
    console.log("obj: ", obj);
    const getChitiet = async (id) => {
        const data = await dondathangAPI.getChiTietSanPham(id);
        setChiTiet(data.data);
    };
    useEffect(() => {
        getChitiet(id);
    }, [dondathang]);
    const columns = [
        {
            title: "Mã sản phẩm",
            dataIndex: "Masp",
        },
        {
            title: "Tên sản phẩm",
            dataIndex: "Tensp",
        },
        {
            title: "Số lượng",
            dataIndex: "Soluong",
        },
        {
            title: "Đơn giá",
            dataIndex: "Dongia",
        },
        {
            title: "Thành tiền",
            dataIndex: "Thanhtien",
        },
    ];
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="m-4 ">
                    <div className="bd-radius bg-content p-4 text-muted fw-bold">
                        <div className="d-flex justify-content-between">
                            <p className="fs-3 w-75">THÔNG TIN CHI TIẾT ĐƠN ĐẶT HÀNG</p>
                        </div>
                        <hr className="w-100 " />
                        <br />
                        <Table columns={columns} dataSource={[]} />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default DonDatHangDetail;
