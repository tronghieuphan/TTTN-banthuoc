import { Table, Button, Popconfirm } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import hinhAnhAPI from "../../services/hinhAnhAPI";
import HinhanhDetail from "./HinhanhDetail";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { successDialog, deleteSuccess, exist } from "../../components/Dialog/Dialog";
import { setDataHa } from "../../slices/dataAdd";
function HinhanhList() {
    const [listHa, setList] = useState([]);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const getAllHa = async () => {
        try {
            setLoading(true);
            const response = await hinhAnhAPI.getAll();
            setList(response.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };
    useEffect(() => {
        getAllHa();
    }, []);

    const handleAddStore = (record) => {
        dispatch(setDataHa(record));
        getAllHa();
    };

    // dellete
    const handleDelete = async (record) => {
        const data = await hinhAnhAPI.delete(record.id);
        if (data.data === "Delete Successful") {
            deleteSuccess();
            getAllHa();
        }
    };
    //THÊM
    const handleCreate = async (obj) => {
        const data = await hinhAnhAPI.create(obj);
        if (data.data.message === "HinhAnh Exist") {
            exist();
        } else if (data.data.message === "Create Successfully") {
            successDialog();
            getAllHa();
        }
    };
    //SỬA
    const handleUpdate = async (obj) => {
        const data = await hinhAnhAPI.update(obj);
        if (data.data.message === "Update HinhAnh Successful") {
            successDialog();
            getAllHa();
        }
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            align: "center",
        },
        {
            title: "Đường dẫn",
            dataIndex: "Url",
            render: (Url) => (
                <div
                    style={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        width: "130px",
                    }}
                >
                    {Url}
                </div>
            ),
        },
        {
            title: "Mã sản phẩm",
            dataIndex: "Masp",
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
                <Button className="bg-light" onClick={() => handleAddStore(record)}>
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
                            <p className="fs-3 w-75">QUẢN LÝ HÌNH ẢNH</p>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-7">
                                <Table
                                    columns={columns}
                                    dataSource={listHa}
                                    bordered={true}
                                    loading={loading}
                                />
                            </div>
                            <div className="col-md-5">
                                <HinhanhDetail
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

export default HinhanhList;
