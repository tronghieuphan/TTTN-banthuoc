import { Table, Button } from "antd";
import Search from "antd/es/transfer/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function DondathangList() {
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            align: "ngaydathang",
        },
        {
            title: "Ngày đặt hàng",
            dataIndex: "Ngaydathang",
        },
        {
            title: "Tổng tiền",
            dataIndex: "Tongtien",
        },
        {
            title: "PTTT",
            dataIndex: "Pttt",
        },
        {
            title: "Số điện thoại",
            dataIndex: "Sdt",
        },
        {
            title: "Trạng thái",
            dataIndex: "Trangthai",
        },
        {
            title: "Phường/xã",
            dataIndex: "phuong",
        },
        {
            title: "Quận/huyện",
            dataIndex: "quan",
        },
        {
            title: "Thành phố/tỉnh",
            dataIndex: "thanhpho",
        },
        {
            title: "Ghi chú",
            dataIndex: "Ghichu",
        },
        {
            title: "Mã người dùng",
            dataIndex: "Mand",
        },
        {
            title: "Mã khuyến mãi",
            dataIndex: "Makm",
        },
        {
            title: "Xem",
            dataIndex: "",
            align: "center",
            render: () => (
                <Link to="/dondathang-detail">
                    <Button className="bg-light" onClick={[]}>
                        <FontAwesomeIcon icon={faEdit} className="text-dark" />
                    </Button>
                </Link>
            ),
        },
    ];
    return (
        <>
            <div className="m-4 ">
                <div className="bd-radius bg-content p-4 text-muted fw-bold">
                    <div className="d-flex justify-content-between">
                        <p className="fs-3 w-75">QUẢN LÝ ĐƠN ĐẶT HÀNG</p>
                        <Search />
                    </div>
                    <br />
                    <Table columns={columns} dataSource={[]} bordered={true} />
                </div>
            </div>
        </>
    );
}

export default DondathangList;
