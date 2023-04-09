import { Table, Button, Popconfirm, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import sanPhamAPI from "../../services/sanPhamAPI";
import { motion } from "framer-motion";
function SanphamList() {
    const [listSp, setList] = useState([]);
    const getAllSp = async () => {
        try {
            const response = await sanPhamAPI.getAll();
            setList(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    useEffect(() => {
        getAllSp();
    }, []);
    console.log("listsp: ", listSp);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            align: "center",
            fixed: "left",
        },
        {
            title: "Tên sản phẩm",
            dataIndex: "Tensp",
            fixed: "left",
            render: (Tensp) => (
                <Tooltip placement="topLeft" title={Tensp}>
                    <div
                        style={{
                            overflow:"hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            width:"100px"
                        }}
                    >
                        {Tensp}
                    </div>
                 </Tooltip>
            ),
        },
        {
            title: "Đơn giá",
            dataIndex: "Dongia",
        },
        {
            title: "Đơn vị bán",
            dataIndex: "Donviban",
        },
        {
            title: "Dạng bào chế",
            dataIndex: "Dangbaoche",
        },
        {
            title: "Quy cách",
            dataIndex: "Quycach",
            render: (Quycach) => (
                    <div
                        style={{
                    
                            width:"120px"
                        }}
                    >
                        {Quycach}
                    </div>
            ),
        },
        {
            title: "Công dụng",
            dataIndex: "Congdung",
            render: (Congdung) => (
                <Tooltip placement="topLeft" title={Congdung}>
                    <div
                        style={{
                            overflow:"hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            width:"150px"
                        }}
                    >
                        {Congdung}
                    </div>
                 </Tooltip>
            ),
        },
        {
            title: "Giá khuyến mãi",
            dataIndex: "Giakm",
        },
        {
            title: "Số lượng",
            dataIndex: "Soluongtk",
        },
        {
            title: "Mã loại",
            dataIndex: "Maloai",
        },
        {
            title: "Mã xuất xứ",
            dataIndex: "Maxx",
        },
        {
            title: "Thương hiệu",
            dataIndex: "Math",
        },
        {
            title: "Nhà cung cấp",
            dataIndex: "Mancc",
        },
        {
            title: "Thêm",
            align: "center",
            fixed: "right",
            render: () => (
                <Button className="bg-light" onClick={() => {}}>
                    <FontAwesomeIcon icon={faEdit} className="text-dark" />
                </Button>
            ),
        },
        {
            title: "Xóa",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (_, record) => (
                <Popconfirm title="Bạn có muốn xóa?" onConfirm={() => console.log(record)}>
                    <Button className="bg-light">
                        <FontAwesomeIcon icon={faTrashAlt} className="text-dark" />
                    </Button>
                </Popconfirm>
            ),
        },
        {
            title: "Sửa",
            dataIndex: "",
            align: "center",
            fixed: "right",
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
                            <p className="fs-3 w-75">QUẢN LÝ SẢN PHẨM</p>
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
                                            style={{ marginTop: "12px" }}
                                        />
                                    </Tooltip>
                                </div>
                            </form>{" "} */}
                        </div>
                        <br />
                        <Table
                            columns={columns}
                            dataSource={listSp}
                            bordered={true}
                            scroll={{ x: true }}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default SanphamList;
