import { Table, Button, Popconfirm } from "antd";
import Search from "antd/es/transfer/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import loaiSanPhamAPI from "../../services/loaiSanPhamAPI";
import LoaisanphamDetail from "./LoaisanphamDetail";
import { motion } from "framer-motion";

function LoaisanphamList() {
    const [listLoaisanpham, setList] = useState([]);
    const getAllDm = async () => {
        try {
            const response = await loaiSanPhamAPI.getAll();
            setList(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    useEffect(() => {
        getAllDm();
    }, []);
    console.log("listLoaisanpham: ", listLoaisanpham);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            align: "center",
        },
        {
            title: "Tên loại sản phẩm",
            dataIndex: "Tenloai",
        },
        {
            title: "Mã danh mục",
            dataIndex: "Madm",
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
            title: "Xem",
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
                            <p className="fs-3 w-75">QUẢN LÝ LOẠI SẢN PHẨM</p>
                            <Search />
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-7">
                                <Table columns={columns} dataSource={listLoaisanpham} bordered={true} />
                            </div>
                            <div className="col-md-5">
                                <LoaisanphamDetail />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default LoaisanphamList;
