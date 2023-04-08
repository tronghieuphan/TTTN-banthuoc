import { Table, Button, Popconfirm } from "antd";
import Search from "antd/es/transfer/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import xuatxuAPI from "../../services/xuatXuAPI";
import XuatxuDetail from "./XuatxuDetail";
function XuatxuList() {
    const [listXx, setList] = useState([]);
    const getAllXx = async () => {
        try {
            const response = await xuatxuAPI.getAll();
            setList(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    useEffect(() => {
        getAllXx();
    }, []);
    const onChange = (value) => console.log(value);

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
                <Popconfirm title="Bạn có muốn xóa?" onConfirm={() => []}>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="m-4 ">
                    <div className="bd-radius bg-content p-4 text-muted fw-bold">
                        <div className="d-flex justify-content-between">
                            <p className="fs-3 w-75">QUẢN LÝ XUẤT XỨ</p>
                            <form action="" method="">
                                <Search
                                    placeholder="input search text"
                                    onChange={onChange}
                                    enterButton
                                />
                            </form>
                        </div>
                        <br />
                    
                        <div className="row">
                            <div className="col-md-7">
                                <Table columns={columns} dataSource={listXx} bordered={true} />
                            </div>
                            <div className="col-md-5">
                                <XuatxuDetail />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default XuatxuList;
