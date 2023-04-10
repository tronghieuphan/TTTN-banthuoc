import { Table, Button, Popconfirm, Tooltip, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataTH } from "../../slices/thuonghieudanhmucSlice";
import thuonghieuAPI from "../../services/thuonghieuAPI";
import ThuonghieuDetail from "./ThuonghieuDetail";
import { motion } from "framer-motion";
import { SearchOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { successDialog, deleteSuccess, exist } from "../../components/Dialog/Dialog";

function ThuonghieuList() {
    const [listTh, setList] = useState([]);
    
    const [keysearch, setValueSearch] = useState("");

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
  
    const getAllTh = async () => {
        try {
            setLoading(true);
            const response = await thuonghieuAPI.getAll();
            setList(response.data);
            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };
    //xulytim
    const getByName = async () => {
        setLoading(true);
        const data = await thuonghieuAPI.getByName(keysearch);
        setList(data.data);
        setLoading(false);
    };
    useEffect(() => {
        getAllTh();
    }, []);
    const handleChange = (e) => {
        setValueSearch(e.target.value);
    };
    const handleGetDataToCreate = (record) => {
        dispatch(setDataTH(record));
    };
    console.log("listth: ", listTh);



  //XỬ LÝ DELETE
  const handleDelete = async (record) => {
    
    const data = await thuonghieuAPI.delete(record.Tenth);
    console.log(data);
    if (data.data === "Have Product Belongs Thuong hieu") {
        Swal.fire({
            icon: "error",
            text: "Thương hiệu đang có sản phẩm!",
        });
    } else {
        deleteSuccess();
        getAllTh();
    }
};
 //THÊM
 const handleCreate = async (obj) => {
    const data = await thuonghieuAPI.create(obj);
    if (data.data.message === "Thuonghieu Exist") {
        exist();
    } else if (data.data.message === "Create Successfully") {
        successDialog();
        getAllTh();
    }
};
//SỬA
const handleUpdate = async (obj) => {
    const data = await thuonghieuAPI.update(obj);
    if (data.data.message === "Update ThuongHieu Successful") {
        successDialog();
        getAllTh();
    }
};
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            align: "center",
        },
        {
            title: "Tên Thương hiệu",
            dataIndex: "Tenth",
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
                <Button className="bg-light" onClick={() => handleGetDataToCreate(record)}>
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
                            <p className="fs-3 w-75">QUẢN LÝ THƯƠNG HIỆU</p>
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
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-7">
                                <Table columns={columns}
                                 dataSource={listTh}
                                  bordered={true}
                                  loading={loading}
                                />
                            </div>
                            <div className="col-md-5">
                                <ThuonghieuDetail 
                                handleCreate={handleCreate}
                                handleUpdate={handleUpdate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default ThuonghieuList;
