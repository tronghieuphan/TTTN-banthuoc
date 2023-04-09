import { Table, Button, Popconfirm, Tooltip, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setDataXX } from "../../slices/xuatxudanhmucSlice";
import XuatxuDetail from "./XuatxuDetail";
import xuatXuAPI from "../../services/xuatXuAPI";
import Swal from "sweetalert2";
import { SearchOutlined } from "@ant-design/icons";
import { successDialog, deleteSuccess, exist } from "../../components/Dialog/Dialog";

function XuatxuList() {
    const [listXx, setList] = useState([]);
    const [keysearch, setValueSearch] = useState("");

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const getAllXx = async () => {
        try {
            setLoading(true);
            const response = await xuatXuAPI.getAll();
            setList(response.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getByName = async () => {
        setLoading(true);
        const data = await xuatXuAPI.getByName(keysearch);
        setList(data.data);
        setLoading(false);
    };

    useEffect(() => {
        getAllXx();
    }, []);

    const handleChange = (e) => {
        setValueSearch(e.target.value);
    };
    const handleGetDataToCreate = (record) => {
        dispatch(setDataXX(record));
    };

    //XÓA
    const handleDelete = async (record) => {
        const data = await xuatXuAPI.delete(record.Tenxx);

        if (data.data === "Have Product Belongs Xuat Xu") {
            Swal.fire({
                icon: "error",
                text: "Xuất xứ đang có sản phẩm!",
            });
        } else {
            deleteSuccess();
            getAllXx();
        }
    };
    //THÊM
    const handleCreate = async (obj) => {
        const data = await xuatXuAPI.create(obj);
        if (data.data.message === "Xuatxu Exist") {
            exist();
        } else if (data.data.message === "Create Successfully") {
            successDialog();
            getAllXx();
        }
    };
    //SỬA
    const handleUpdate = async (obj) => {
        const data = await xuatXuAPI.update(obj);
        if (data.data.message === "Update XuatXu Successful") {
            successDialog();
            getAllXx();
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
            title: "Tên xuất xứ",
            dataIndex: "Tenxx",
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
                            <p className="fs-3 w-75">QUẢN LÝ XUẤT XỨ</p>
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
                                    dataSource={listXx}
                                    bordered={true}
                                    loading={loading}
                                />
                            </div>
                            <div className="col-md-5">
                                <XuatxuDetail
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

export default XuatxuList;
