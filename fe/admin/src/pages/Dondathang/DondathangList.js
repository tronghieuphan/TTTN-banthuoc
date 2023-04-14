import { Table, Button, Tooltip } from "antd";
import Search from "antd/es/transfer/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dondathangAPI from "../../services/donDatHangAPI";
import { useDispatch} from "react-redux";
import { motion } from "framer-motion";

import { setDataDDH } from "../../slices/dataAdd";
function DondathangList() {
    const [listddh, setDDH] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const getAllDDH = async () => {
        setLoading(true);
        const data = await dondathangAPI.getAll();
        setDDH(data.data);
        setLoading(false);
    };
    const handleAccept = async (record) => {
        if (record.Trangthai === false) {
            const Trangthai = record.Trangthai;
            let obj = {
                ...record,
                Trangthai: true,
            };
            await dondathangAPI.update(obj);
            getAllDDH();
        }
    };
    useEffect(() => {
        getAllDDH();
    }, []);
    const handleAddStore=(record)=>{
        dispatch(setDataDDH(record))
        localStorage.setItem("DONDATHANG",JSON.stringify(record))
    }
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            align: "center",
            fixed: "left",
        },
        {
            title: "Số điện thoại",
            dataIndex: "Sdt",
            render: (Sdt) => (
                <div
                    style={{
                        width: "120px",
                    }}
                >
                    {Sdt}
                </div>
            ),
            fixed: "left",
        },
        {
            title: "Ngày đặt hàng",
            dataIndex: "Ngaydathang",
            render: (Ngaydathang) => (
                <div
                    style={{
                        width: "120px",
                    }}
                >
                    {Ngaydathang}
                </div>
            ),
        },
        {
            title: "Tổng tiền",
            dataIndex: "Tongtien",
            render: (Tongtien) => (
                <div
                    style={{
                        width: "100px",
                    }}
                >
                    {Tongtien}
                </div>
            ),
        },
        {
            title: "PTTT",
            dataIndex: "Pttt",
            render: (Pttt) => (
                <div
                    style={{
                        width: "120px",
                    }}
                >
                    {Pttt}
                </div>
            ),
        },
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
                        width: "120px",
                    }}
                >
                    {Thanhpho}
                </div>
            ),
        },
        {
            title: "Ghi chú",
            dataIndex: "Ghichu",
            render: (Ghichu) => (
                <Tooltip placement="topLeft" title={Ghichu}>
                    <div
                        style={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            width: "150px",
                        }}
                    >
                        {Ghichu}
                    </div>
                </Tooltip>
            ),
        },

        {
            title: "Mã khuyến mãi",
            dataIndex: "Makm",
        },
        {
            title: "Mã người dùng",
            dataIndex: "Mand",
        },

        {
            title: "Trạng thái",
            dataIndex: "Trangthai",
            align: "center",
            render: (Trangthai, record) => (
                <div
                    style={{
                        width: "120px",
                    }}
                >
                    {Trangthai ? (
                        <Button className="bg-light" disabled>
                            Đã xác nhận
                        </Button>
                    ) : (
                        <Button type="primary" onClick={() => handleAccept(record)}>
                            Chờ xác nhận
                        </Button>
                    )}
                </div>
            ),
            fixed: "right",
        },
        {
            title: "Xem",
            dataIndex: "",
            align: "center",
            render: (record) => (
                <Link to="/dondathang-detail">
                    <Button className="bg-light" onClick={()=>handleAddStore(record)}>
                        <FontAwesomeIcon icon={faEdit} className="text-dark" />
                    </Button>
                </Link>
            ),
            fixed: "right",
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
                        <p className="fs-3 w-75">QUẢN LÝ ĐƠN ĐẶT HÀNG</p>
                        <Search />
                    </div>
                    <br />
                    <Table
                        columns={columns}
                        dataSource={listddh}
                        bordered={true}
                        loading={loading}
                        scroll={{ x: true }}
                    />
                </div>
            </div></motion.div>
        </>
    );
}

export default DondathangList;
