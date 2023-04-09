import { Table, Button, Popconfirm } from "antd";
import Search from "antd/es/transfer/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nhaCungCapAPI from "../../services/nhaCungCapAPI";
import { motion } from "framer-motion";
import { deleteSuccess } from "../../components/Dialog/Dialog";
import Swal from "sweetalert2";


function NhacungcapList() {
    const nhacungcapDetailPage = "/nhacungcap-detail";
    const [listNcc, setList] = useState([]);
    const getAllNcc = async () => {
        try {
            const response = await nhaCungCapAPI.getAll();
            setList(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    useEffect(() => {
        getAllNcc();
    }, []);
    const onChange = (value) => console.log(value);

    const handleDelete=async (record)=>{
        console.log('record: ', record.Tenncc);
        const data = await nhaCungCapAPI.delete(record.Tenncc);
        console.log('data: ', data.data);
        if (data.data === "Have Product Belongs NhaCungCap") {
            Swal.fire({
                icon: "error",
                text: "Nhà cung cấp đang có sản phẩm!",
            });
        } else {
            deleteSuccess();
            getAllNcc();
        }
    }
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
                <Popconfirm title="Bạn có muốn xóa?" onConfirm={() =>handleDelete(record)}>
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
                            <p className="fs-3 w-75">QUẢN LÝ NHÀ SẢN XUẤT</p>
                            <form action="" method="">
                                <Search
                                    placeholder="input search text"
                                    onChange={onChange}
                                    enterButton
                                />
                            </form>
                        </div>
                        <Link to={nhacungcapDetailPage}>
                            <Button className="mb-2">Thêm</Button>
                        </Link>
                        <br />
                        <Table columns={columns} dataSource={listNcc} bordered={true} />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default NhacungcapList;
