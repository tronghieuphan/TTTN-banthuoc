import { Table, Button, Popconfirm } from "antd";
import Search from "antd/es/transfer/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nguoiDungAPI from "../../services/nguoiDungAPI";
import { motion } from "framer-motion";
function NguoidungList() {
    const [listNd, setList] = useState([]);
    const nguoidungDetailPage = "/nguoidung-detail";
    const getAllNd = async () => {
        try {
            const response = await nguoiDungAPI.getAll();
            setList(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    useEffect(() => {
        getAllNd();
    }, []);
    const onChange = (value) => console.log(value);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            align: "center",
            fixed: "left",
        },
        {
            title: "Họ lót",
            dataIndex: "Holot",
            fixed: "left",
        },
        {
            title: "Tên",
            dataIndex: "Ten",
            fixed: "left",
        },
        {
            title: "Giới tính",
            dataIndex: "Gioitinh",
        },
        {
            title: "Ngày sinh",
            dataIndex: "Ngaysinh",
        },
        {
            title: "Số điện thoại",
            dataIndex: "Sdt",
        },
        {
            title: "Email",
            dataIndex: "Email",
        },
        ,
        {
            title: "Phường/xã",
            dataIndex: "Phuong",
        },
        {
            title: "Quận/huyện",
            dataIndex: "Quan",
        },
        {
            title: "Thành phố/tỉnh",
            dataIndex: "Thanhpho",
        },
        {
            title: "Tên đăng nhập",
            dataIndex: "Tendangnhap",
        },
        {
            title: "Loại người dùng",
            dataIndex: "Loaind",
        },
        {
            title: "Xóa",
            dataIndex: "",
            align: "center",
            fixed: "right",
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
            fixed: "right",
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="m-4 ">
                    <div className="bd-radius bg-content p-4 text-muted fw-bold">
                        <div className="d-flex justify-content-between">
                            <p className="fs-3 w-75">QUẢN LÝ NGƯỜI DÙNG</p>
                            <form action="" method="">
                                <Search
                                    placeholder="input search text"
                                    onChange={onChange}
                                    enterButton
                                />
                            </form>
                        </div>
                        <Link to={nguoidungDetailPage}>
                            <Button className="mb-2">Thêm</Button>
                        </Link>
                        <br />
                        <Table
                            columns={columns}
                            dataSource={listNd}
                            bordered={true}
                            scroll={{ x: true }}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default NguoidungList;
