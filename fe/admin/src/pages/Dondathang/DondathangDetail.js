import { Button, Table } from "antd";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEdit } from "@fortawesome/free-solid-svg-icons";
function DonDatHangDetail() {
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
        {
            title: "Sửa",
            dataIndex: "",
            align: "center",
            render: () => (
                <Button className="bg-light" onClick={[]}>
                    <FontAwesomeIcon icon={faEdit} className="text-dark" />
                </Button>
            ),
        },
    ];
    return (
        <>
            <div className="m-4 ">
                <div className="bd-radius bg-content p-4 text-muted fw-bold">
                    <div className="d-flex justify-content-between">
                        <p className="fs-3 w-75">THÔNG TIN CHI TIẾT ĐƠN ĐẶT HÀNG</p>
                    </div>
                    <hr className="w-100 " />
                    <br />
                    <Table columns={columns} dataSource={[]}/>
                </div>
            </div>
        </>
    );
}

export default DonDatHangDetail;
