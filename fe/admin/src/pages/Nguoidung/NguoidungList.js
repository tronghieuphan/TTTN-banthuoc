import { Table, Button, Popconfirm } from "antd";
import Search from "antd/es/transfer/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nguoiDungAPI from "../../services/nguoiDungAPI";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setDataNd } from "../../slices/dataAdd";
function NguoidungList() {
    const [listNd, setList] = useState([]);
    const nguoidungDetailPage = "/nguoidung-detail";
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const getAllNd = async () => {
        try {
            setLoading(true);
            const response = await nguoiDungAPI.getAll();
            setList(response.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };
    useEffect(() => {
        getAllNd();
    }, []);
    const onChange = (value) => console.log(value);
    const handleAddStore = (record) => {
        console.log(record);
        dispatch(setDataNd(record));
    };
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
            title: "Xem",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (record) => (
                <Link to="/nguoidung-detail">
                    <Button className="bg-light" onClick={() => handleAddStore(record)}>
                        <FontAwesomeIcon icon={faEdit} className="text-dark" />
                    </Button>
                </Link>
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
                        <Link to="/nguoidung-detail">
                            <Button className="mb-2">Thêm</Button>
                        </Link>
                        <br />
                        <Table
                            columns={columns}
                            dataSource={listNd}
                            bordered={true}
                            scroll={{ x: true }}
                            loading={loading}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default NguoidungList;
