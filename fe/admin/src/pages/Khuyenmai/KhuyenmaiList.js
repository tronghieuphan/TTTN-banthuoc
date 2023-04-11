import { Table, Button, Popconfirm } from "antd";
import Search from "antd/es/transfer/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import khuyenMaiAPI from "../../services/khuyenMaiAPI";
import KhuyenmaiDetail from "./KhuyenmaiDetail";
import { motion } from "framer-motion";

function KhuyenmaiList() {
    const [listKhuyenmai, setList] = useState([]);
    const getAllDm = async () => {
        try {
            const response = await khuyenMaiAPI.getAll();
            setList(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    useEffect(() => {
        getAllDm();
    }, []);
    console.log("listKhuyenmai: ", listKhuyenmai);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            align: "center",
        },
        {
            title: "Tên mã khuyến mãi",
            dataIndex: "Tenkm",
        },
        {
            title: "Mã khuyến mãi",
            dataIndex: "Code",
        },
        {
          title: "Phần trăm giảm",
          dataIndex: "Phantram",
        },
        {
            title: "Ngày bắt đầu",
            dataIndex: "Ngaybd",
        },
        {
          title: "Ngày kết thúc",
          dataIndex: "Ngaykt",
        },
        {
          title: "Điều khoản",
          dataIndex: "Dieukhoan",
        },
        {
          title: "Trạng thái",
          dataIndex: "Trangthai",
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
                            <p className="fs-3 w-75">QUẢN LÝ MÃ KHUYẾN MÃI</p>
                            <Search />
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-7">
                                <Table columns={columns} dataSource={listKhuyenmai} bordered={true} />
                            </div>
                            <div className="col-md-5">
                                <KhuyenmaiDetail />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default KhuyenmaiList;
