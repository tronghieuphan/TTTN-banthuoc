import {                                                                                                                                        Table, Button, Popconfirm } from "antd";
import Search from "antd/es/transfer/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import sanPhamAPI  from "../../services/sanPhamAPI";
import { motion } from "framer-motion";
import SanphamDetail from "./SanphamDetail";
function SanphamList() {
    const [listSp, setList] = useState([]);
    const getAllSp = async () => {
        try {
            const response = await sanPhamAPI.getAll();
            setList(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    useEffect(() => {
        getAllSp();
    }, []);
    console.log("listsp: ", listSp);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            align: "center",
        },
        {
            title: "Tên sản phẩm",
            dataIndex: "Tensp",
        },
        {
            title: "Đơn giá",
            dataIndex: "Dongia",
        },
        {
            title: "Đơn vị bán",
            dataIndex: "Donviban",
        },
        // {
        //     title: "Dạng bào chế",
        //     dataIndex: "Dangbaoche",
        // },
        {
            title: "Quy cách",
            dataIndex: "Quycach",
        },
        // {
        //     title: "Công dụng",
        //     dataIndex: "Congdung",
        // },
        {
            title: "Giá khuyến mãi",
            dataIndex: "Giakm",
        },
        {
            title: "Số lượng",
            dataIndex: "Soluongtk",
        },
        {
            title: "Mã loại",
            dataIndex: "Maloai",
        },
        {
            title: "Mã xuất xứ",
            dataIndex: "Maxx",
        },
        {
            title: "Thương hiệu",
            dataIndex: "Math",
        },
        {
            title: "Nhà cung cấp",
            dataIndex: "Mancc",
        },
        {
            title: "Thêm",
            align: "center",
            render: () => (
                <Button className="bg-light" onClick={()=>{}}>
                    <FontAwesomeIcon icon={faEdit} className="text-dark" />
                    
                </Button>
            ),
        },
        {
            title: "Xóa",
            dataIndex: "",
            align: "center",
            render: (_, record) => (
                <Popconfirm title="Bạn có muốn xóa?" onConfirm={() => console.log(record)}>
                    <Button className="bg-light">
                        <FontAwesomeIcon icon={faTrashAlt} className="text-dark" />
                    </Button>
                </Popconfirm>
            ),
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
            <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{opacity:0 , transition: {duration:0.8} }}  >
                <div className="m-4 ">
                    <div className="bd-radius bg-content p-4 text-muted fw-bold">
                        <div className="d-flex justify-content-between">
                            <p className="fs-3 w-75">QUẢN LÝ SẢN PHẨM</p>
                            <Search />
                        </div>
                        <br />
                        <Table columns={columns}
                         dataSource={listSp}
                          bordered={true}
                           />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default SanphamList;
