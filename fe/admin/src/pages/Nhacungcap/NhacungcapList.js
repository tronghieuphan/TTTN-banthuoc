import { Table, Button, Popconfirm, Input, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nhaCungCapAPI from "../../services/nhaCungCapAPI";
import { motion } from "framer-motion";
import { deleteSuccess } from "../../components/Dialog/Dialog";
import Swal from "sweetalert2";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setDataNcc } from "../../slices/dataAdd";
function NhacungcapList() {
    const nhacungcapDetailPage = "/nhacungcap-detail";
    const [listNcc, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [keysearch, setValueSearch] = useState("");

    const dispatch = useDispatch();
    const getAllNcc = async () => {
        try {
            setLoading(true);
            const response = await nhaCungCapAPI.getAll();
            setList(response.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getByName = async () => {
        setLoading(true);
        const data = await nhaCungCapAPI.getByName(keysearch);
        setList(data.data);
        setLoading(false);
    };
    useEffect(() => {
        getAllNcc();
    }, []);
    const onChange = (value) => console.log(value);

    const handleDelete = async (record) => {
        console.log("record: ", record.Tenncc);
        const data = await nhaCungCapAPI.delete(record.Tenncc);
        console.log("data: ", data.data);
        if (data.data === "Have Product Belongs NhaCungCap") {
            Swal.fire({
                icon: "error",
                text: "Nhà cung cấp đang có sản phẩm!",
            });
        } else {
            deleteSuccess();
            getAllNcc();
        }
    };
    const handleAddStore = (record) => {
        dispatch(setDataNcc(record));
    };
    const handleChange = (e) => {
        setValueSearch(e.target.value);
    };

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
            render: (Email) => (
                <Tooltip placement="topLeft" title={Email}>
                    <div
                        style={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            width: "100px",
                        }}
                    >
                        {Email}
                    </div>
                </Tooltip>
            ),
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
                <Link to="/nhacungcap-detail">
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
                            <p className="fs-3 w-75">QUẢN LÝ NHÀ CUNG CẤP</p>
                            {/* <form action="" method="">
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
                            </form> */}
                        </div>
                        <Link to={nhacungcapDetailPage}>
                            <Button className="mb-2">Thêm</Button>
                        </Link>
                        <br />
                        <Table
                            columns={columns}
                            dataSource={listNcc}
                            bordered={true}
                            loading={loading}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default NhacungcapList;
