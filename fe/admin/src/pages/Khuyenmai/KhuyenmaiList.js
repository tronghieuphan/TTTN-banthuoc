import { Table, Button, Popconfirm, Input, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import khuyenMaiAPI from "../../services/khuyenMaiAPI";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { setDataKM } from "../../slices/dataAdd";
import {deleteSuccess} from "../../components/Dialog/Dialog";
function KhuyenmaiList() {
    const [listKhuyenmai, setList] = useState([]);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [keysearch, setValueSearch] = useState("");


    const getAllKm = async () => {
        try {
            setLoading(true)
            const response = await khuyenMaiAPI.getAll();
            setList(response.data);
            setLoading(false)
        } catch (err) {
            throw new Error(err);
        }
    };
    useEffect(() => {
        getAllKm();
    }, []);
    const handleAddStore = (record) => {
        console.log(record);
        dispatch(setDataKM(record));
    };
    const getByName = async () => {
        setLoading(true);
        const data = await khuyenMaiAPI.getByName(keysearch);
        console.log("keysearch: ", keysearch);
        console.log("data.data: ", data.data);
        setList(data.data);
        setLoading(false);
    };
    const handleChange = (e) => {
        setValueSearch(e.target.value);
    };

    console.log("listKhuyenmai: ", listKhuyenmai);
      //XỬ LÝ DELETE
  const handleDelete = async (record) => {
    console.log(record);
    const data = await khuyenMaiAPI.delete(record.Tenkm);
    console.log(data);
    if (data.data === "Have DonDatHang belongs KhuyenMai" ) {
        Swal.fire({
            icon: "error",
            text: "Khuyến mãi có đơn đang sử dụng!",
        });
    } else if (data.data === "Have NguoiDung belongs KhuyenMai") {
        Swal.fire({
            icon: "error",
            text: "Khuyến mãi có người dùng sở hữa!",
        });
    }
    else{
        deleteSuccess();
        getAllKm();
    }
};


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
                <Link to="/khuyenmai-detail">
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
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                exit={{opacity:0 , transition: {duration:0.8} }}  >
                <div className="m-4 ">
                    <div className="bd-radius bg-content p-4 text-muted fw-bold">
                        <div className="d-flex justify-content-between">
                            <p className="fs-3 w-75">QUẢN LÝ MÃ KHUYẾN MÃI</p>
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
                                            style={{ marginTop: "12px" }}
                                        />
                                    </Tooltip>
                                </div>
                        </div>
                        <br />
                        <Link to="/khuyenmai-detail">
                            <Button className="mb-2">Thêm</Button>
                        </Link>
                        <div className="row">
                            <div>
                                <Table columns={columns}
                                 dataSource={listKhuyenmai}
                                  bordered={true}
                                  loading={loading}
                                  />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default KhuyenmaiList;
