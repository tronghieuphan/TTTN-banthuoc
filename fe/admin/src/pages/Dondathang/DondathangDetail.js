import { Button, Table, Tooltip } from "antd";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
            render: (Tensp) => (
                <Tooltip placement="topLeft" title={Tensp}>
                    <div
                        style={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            width: "500px",
                        }}
                    >
                        {Tensp}
                    </div>
                </Tooltip>
            ),
        },
        {
            title: "Số lượng",
            dataIndex: "Soluong",
            align: "center",
        },
        {
            title: "Đơn giá",
            dataIndex: "Dongia",
            align: "center",
        },
        {
            title: "Giá ưu đãi",
            dataIndex: "Giakm",
            align: "center",
        },
        {
            title: "Thành tiền",
            dataIndex: "Thanhtien",
            align: "center",
            render: (Thanhtien) => (
                <div
                    style={{
                        width: "120px",
                    }}
                >
                    {Thanhtien}
                </div>
            ),
        },
    ];
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <Link to="/dondathang-list" className="m-4">
                    <Button>Quay lại</Button>
                </Link>
                <div className="m-4 ">
                    <div className="bd-radius bg-content p-4 text-muted fw-bold">
                        <div className="d-flex justify-content-between">
                            <p className="fs-3 w-75">THÔNG TIN CHI TIẾT ĐƠN ĐẶT HÀNG</p>
                        </div>
                        <hr className="w-100 " />
                        <br />
                        <Table columns={columns} dataSource={listchitiet} scroll={{ x: true }} />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default DonDatHangDetail;
