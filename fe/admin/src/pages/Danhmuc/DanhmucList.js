import { Table, Button, Popconfirm, Tooltip, Input } from "antd";
import Search from "antd/es/transfer/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataDM } from "../../slices/xuatxudanhmucSlice";
import danhMucAPI from "../../services/danhMucAPI";
import DanhmucDetail from "./DanhmucDetail";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { SearchOutlined } from "@ant-design/icons";
import { successDialog, deleteSuccess, exist } from "../../components/Dialog/Dialog";

function DanhmucList() {
    const [listDm, setList] = useState([]);
    const [keysearch, setValueSearch] = useState("");
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const getAllDm = async () => {
        try {
            setLoading(true);
            const response = await danhMucAPI.getAll();
            setList(response.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getByName = async () => {
        setLoading(true);
        const data = await danhMucAPI.getByName(keysearch);
        setList(data.data);
        setLoading(false);
    };
    useEffect(() => {
        getAllDm();
    }, []);
    console.log("listDm: ", listDm);

    const handleChange = (e) => {
        setValueSearch(e.target.value);
    };

    const handleGetDataToCreate = (record) => {
        dispatch(setDataDM(record));
    };

    //XÓA
    const handleDelete = async (record) => {
        // console.log(record)
        const data = await danhMucAPI.delete(record.Tendm);
        if (data.data === "Danh mục tồn tại loại sản phẩm") {
            Swal.fire({
                icon: "error",
                text: "Danh mục đang có loại sản phẩm!",
            });
        } else {
            deleteSuccess();
            getAllDm();
        }
    };
    //THÊM
    const handleCreate = async (obj) => {
        const data = await danhMucAPI.create(obj);
        if (data.data.message === "Danhmuc Exist") {
            exist();
        } else if (data.data.message === "Create Successfully") {
            successDialog();
            getAllDm();
        }
    };
    //SỬA
    const handleUpdate = async (obj) => {
        const data = await danhMucAPI.update(obj);
        if (data.data.message === "Update DanhMuc Successful") {
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
            title: "Tên danh mục",
            dataIndex: "Tendm",
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
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{opacity:0 , transition: {duration:0.8} }}  >
                <div className="m-4 ">
                    <div className="bd-radius bg-content p-4 text-muted fw-bold">
                        <div className="d-flex justify-content-between">
                            <p className="fs-3 w-75">QUẢN LÝ DANH MỤC</p>
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
                                    dataSource={listDm}
                                    bordered={true}
                                    loading={loading}
                                />
                            </div>
                            <div className="col-md-5">
                                <DanhmucDetail 
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

export default DanhmucList;
