import { Table, Button, Popconfirm } from "antd";
import Search from "antd/es/transfer/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import xuatXuAPI from "../../services/xuatXuAPI";
import XuatxuDetail from "./XuatxuDetail";
function XuatxuList() {
    const [listXx, setList] = useState([]);
    const getAllDm = async () => {
        try {
            const response = await xuatXuAPI.getAll();
            setList(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    useEffect(() => {
        getAllDm();
    }, []);
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
            <div className="m-4 ">
                <div className="bd-radius bg-content p-4 text-muted fw-bold">
                    <div className="d-flex justify-content-between">
                        <p className="fs-3 w-75">QUẢN LÝ XUẤT XỨ</p>
                        <Search />
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-7">
                            <Table columns={columns} dataSource={[listXx]} bordered={true} />
                        </div>
                        <div className="col-md-5">
                            <XuatxuDetail />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default XuatxuList;
