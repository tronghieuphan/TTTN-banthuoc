import { Table, Button, Input, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nguoiDungAPI from "../../services/nguoiDungAPI";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setDataNd } from "../../slices/dataAdd";
import address from "../../services/addressAPI";
function NguoidungList() {
    const [listNd, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [keysearch, setValueSearch] = useState("");
    const [city, listCity] = useState([]);

    const getAllNd = async () => {
        try {
            setLoading(true);
            const response = await nguoiDungAPI.getAll();
            setList(response.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        getAllNd();
    }, []);
    const getAllCity = async () => {
        try {
            const response = await address.getAll_Province();
            listCity(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    useEffect(() => {
        getAllCity();
    }, []);
    let arraycity = [];
    city.map((values, index) => arraycity.push({ name: values.name, code: values.code }));
    const onChange = (value) => console.log(value);
    const handleAddStore = (record) => {
        dispatch(setDataNd(record));
    };
    const getByName = async () => {
        setLoading(true);
        const data = await nguoiDungAPI.getByName(keysearch);
        setList(data.data);
        setLoading(false);
    };
    const handleChange = (e) => {
        setValueSearch(e.target.value);
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            align: "center",
            fixed: "left",
        },
        {
            title: "Họ lót",
            dataIndex: "Holot",
            fixed: "left",
        },
        {
            title: "Tên",
            dataIndex: "Ten",
            fixed: "left",
        },
        {
            title: "Giới tính",
            dataIndex: "Gioitinh",
            render: (Gioitinh) => (
                <div
                    style={{
                        width: "50px",
                    }}
                >
                    {Gioitinh === true ? "Nữ" : "Nam"}
                </div>
            ),
        },
        {
            title: "Ngày sinh",
            dataIndex: "Ngaysinh",
            render: (Ngaysinh) => (
                <div
                    style={{
                        width: "120px",
                    }}
                >
                    {Ngaysinh}
                </div>
            ),
        },
        {
            title: "Số điện thoại",
            dataIndex: "Sdt",
        },
        {
            title: "Email",
            dataIndex: "Email",
        },
        ,
        {
            title: "Phường/xã",
            dataIndex: "Phuong",
            render: (Phuong) => (
                <div
                    style={{
                        width: "120px",
                    }}
                >
                    {Phuong}
                </div>
            ),
        },
        {
            title: "Quận/huyện",
            dataIndex: "Quan",
            render: (Quan) => (
                <div
                    style={{
                        width: "120px",
                    }}
                >
                    {Quan}
                </div>
            ),
        },
        {
            title: "Thành phố/tỉnh",
            dataIndex: "Thanhpho",
            render: (Thanhpho) => (
                <div
                    style={{
                        width: "160px",
                    }}
                >
                    {Thanhpho}
                </div>
            ),
        },
        {
            title: "Tên đăng nhập",
            dataIndex: "Tendangnhap",
        },
        {
            title: "Loại người dùng",
            dataIndex: "Loaind",
        },
        {
            title: "Xem",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (record) => (
                <Link to="/nguoidung-detail">
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
                            <p className="fs-3" style={{ width: "30%" }}>
                                QUẢN LÝ NGƯỜI DÙNG
                            </p>
                            <form action="" method="">
                                <div className="d-flex">
                                    <p className="fst-italic fw-lighter">
                                        Mình có thể tìm theo tên hoặc theo số điện thoại (*)
                                    </p>
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
                                            style={{ marginTop: "12px" }}
                                        />
                                    </Tooltip>
                                </div>
                            </form>
                        </div>
                        <Link to="/nguoidung-detail">
                            <Button className="mb-2">Thêm</Button>
                        </Link>
                        <br />
                        <Table
                            columns={columns}
                            dataSource={listNd}
                            bordered={true}
                            scroll={{ x: true }}
                            loading={loading}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default NguoidungList;
