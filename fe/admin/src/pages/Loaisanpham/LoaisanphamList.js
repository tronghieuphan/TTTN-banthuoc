import { Table, Button, Popconfirm, Tooltip, Input } from "antd";
import Search from "antd/es/transfer/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataLSP } from "../../slices/loaisanphamdanhmucSlice";
import LoaisanphamDetail from "./LoaisanphamDetail";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import loaiSanPhamAPI from "../../services/loaiSanPham";
import { SearchOutlined } from "@ant-design/icons";
import { successDialog, deleteSuccess, exist } from "../../components/Dialog/Dialog";

function LoaisanphamList() {
    const [listLoaisanpham, setList] = useState([]);
    const [keysearch, setValueSearch] = useState("");
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const getAllDm = async () => {
        try {
            setLoading(true);
            const response = await loaiSanPhamAPI.getAll();
            setList(response.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getByName = async () => {
        setLoading(true);
        const data = await loaiSanPhamAPI.getByName(keysearch);
        setList(data.data);
        setLoading(false);
    };
    useEffect(() => {
        getAllDm();
    }, []);

    const handleChange = (e) => {
        setValueSearch(e.target.value);
    };

    const handleGetDataToCreate = (record) => {
        dispatch(setDataLSP(record));
    };

    //XÓA
    const handleDelete = async (record) => {
        // console.log(record)
        const data = await loaiSanPhamAPI.delete(record.Tenloai);
        if (data.data === "Loại sản phẩm tồn tại sản phẩm") {
            Swal.fire({
                icon: "error",
                text: "Loại sản phẩm đang có sản phẩm!",
            });
        } else {
            deleteSuccess();
            getAllDm();
        }
    };
    //THÊM
    const handleCreate = async (obj) => {
        const data = await loaiSanPhamAPI.create(obj);
        if (data.data.message === "LoaiSanPham Exist") {
            exist();
        } else if (data.data.message === "Create Successfully") {
            successDialog();
            getAllDm();
        }
    };
    //SỬA
    const handleUpdate = async (obj) => {
        const data = await loaiSanPhamAPI.update(obj);
        if (data.data.message === "Update LoaiSanPham Successful") {
            successDialog();
            getAllDm();
        }
    };

    //ĐỊNH DẠNG TABLE
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
                <Popconfirm title="Bạn có muốn xóa?" onConfirm={() => handleDelete(record)}>
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
            render: (record) => (
                <Button className="bg-light" onClick={() => handleGetDataToCreate(record)}>
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
                            <p className="fs-3 w-75">QUẢN LÝ LOẠI SẢN PHẨM</p>
                            <form action="" method="">
                                <div className="d-flex">
                                    <Input
                                        className="mx-2"
                                        placeholder="Nhập tìm kiếm"
                                        value={keysearch}
                                        onChange={handleChange}
                                    />
                                    <Tooltip title="search">
                                        <Button
                                            type="primary"
                                            shape="circle"
                                            icon={<SearchOutlined />}
                                            onClick={getByName}
                                        />
                                    </Tooltip>
                                </div>
                            </form>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-7">
                                <Table
                                    columns={columns}
                                    dataSource={listLoaisanpham}
                                    bordered={true}
                                    loading={loading}
                                />
                            </div>
                            <div className="col-md-5">
                                <LoaisanphamDetail
                                    handleCreate={handleCreate}
                                    handleUpdate={handleUpdate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default LoaisanphamList;
