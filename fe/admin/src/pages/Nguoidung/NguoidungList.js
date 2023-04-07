import { Table, Button, Popconfirm } from "antd";
import Search from "antd/es/transfer/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import nhaCungCapAPI from "../../services/nhaCungCapAPI";
function NhacungcapList() {
    // const [listNcc, setList] = useState([]);
    // const getAllNcc = async () => {
    //     try {
    //         const response = await nhaCungCapAPI.getAll();
    //         setList(response.data);
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    // };
    // useEffect(() => {
    //     getAllNcc();
    // }, []);
    // console.log(">>>>", listNcc);
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            align: "center",
        },
        {
            title: "Tên nhà cung cấp",
            dataIndex: "Tenncc",
        },
        {
            title: "Email",
            dataIndex: "Email",
        },
        {
            title: "Số điện thoại",
            dataIndex: "Sdt",
        },
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
                        <p className="fs-3 w-75">QUẢN LÝ NHÀ SẢN XUẤT</p>
                        <Search />
                    </div>
                    <br />
                    <Table columns={columns} dataSource={[]} bordered={true} />
                </div>
            </div>
        </>
    );
}

export default NhacungcapList;
