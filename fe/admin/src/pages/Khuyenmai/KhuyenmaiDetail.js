import { Select, Input, Button, Form } from "antd";
import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import khuyenMaiAPI from "../../services/khuyenMaiAPI";
import { useSelector, useDispatch } from "react-redux";
import { exist, successDialog } from "../../components/Dialog/Dialog";
import { Link } from "react-router-dom";
import { setDataKM } from "../../slices/dataAdd";

function KhuyenmaiDetail() {
    const { khuyenmai } = useSelector((state) => state.dataAdd);
    console.log("khuyenmai: ", khuyenmai);
    const dispatch = useDispatch();

    //them
    const handleCreate = async (obj) => {
        const data = await khuyenMaiAPI.create(obj);
        console.log(data.data);
        if (data.data.message === "KhuyenMai Exist") {
            exist();
        } else if (data.data.message === "Create Successfully") {
            successDialog();
        }
    };
    //SỬA
    const handleUpdate = async (obj) => {
        console.log(obj);
        const data = await khuyenMaiAPI.update(obj);
        console.log("data.data.message: ", data.data.message);
        if (data.data.message === "KhuyenMai Belongs DonDatHang") {
            Swal.fire({
                icon: "error",
                title: "Lỗi",
                text: "Mã khuyến mãi này đang được áp dụng ",
            });
        } else if (data.data.message === "Update KhuyenMai Successful") {
            successDialog();
        }
    };
    // XỬ LÝ THÊM SỬA
    const handleSubmit = (e) => {
        console.log(e);
        Swal.fire({
            title: "BẠN CÓ MUỐN LƯU THÔNG TIN?",
            confirmButtonText: "Lưu",
            showCancelButton: true,
            cancelButtonText: "Hủy",
            customClass: {
                title: "fs-5 text-dark",
                confirmButton: "bg-primary shadow-none",
                cancelButton: "bg-warning shadow-none",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // UPDATE
                if (khuyenmai.id) {
                    handleUpdate(e);
                }
                //CREATE
                else {
                    handleCreate(e);
                }
            }
        });
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const deleteStore = () => {
        dispatch(setDataKM([]));
    };
    const handleReset = () => {
        dispatch(setDataKM([]));
        const obj = {
            Tenkm: "",
            Code: "",
            Phantram: "",
            Ngaybd: "",
            Ngaykt: "",
        };
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <Link to="/khuyenmai-list" className="m-4">
                    <Button onClick={deleteStore}>Quay lại</Button>
                </Link>
                <div className="m-4 ">
                    <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
                        <div>
                            <div className="d-flex justify-content-between">
                                <p className="fs-3">THÔNG TIN CHI TIẾT KHUYẾN MÃI</p>
                            </div>
                            <hr className="w-100 " />
                            <Form onFinish={handleSubmit} layout="vertical">
                                {khuyenmai.id ? (
                                    <Form.Item name="id" label="Id:" initialValue={khuyenmai.id}>
                                        <Input disabled />
                                    </Form.Item>
                                ) : (
                                    ""
                                )}
                                <div className="d-flex flex-wrap justify-content-between">
                                    <div className=" mt-4 justify-content-between w-30 ">
                                        <Form.Item
                                            className=" w-33"
                                            name="Tenkm"
                                            label="Tên Khuyến mãi"
                                            initialValue={khuyenmai.Tenkm}
                                        >
                                            <Input
                                                className=" w-100"
                                                label="Tên Khuyến mãi"
                                                type="text"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className=" mt-4 justify-content-between w-30 ">
                                        <Form.Item
                                            className=" w-33"
                                            name="Code"
                                            label="Mã Khuyến mãi"
                                            initialValue={khuyenmai.Code}
                                        >
                                            <Input className=" w-100" type="text" />
                                        </Form.Item>
                                    </div>
                                    <div className=" mt-4 justify-content-between w-30 ">
                                        <Form.Item
                                            className=" w-33"
                                            name="Phantram"
                                            label="Phần trăm khuyến mãi"
                                            initialValue={khuyenmai.Phantram}
                                        >
                                            <Input className=" w-100" type="text" />
                                        </Form.Item>
                                    </div>

                                    {/* date xử lý date bd date kt */}
                                    <div className=" justify-content-between w-30 ">
                                        <Form.Item
                                            name="Ngaybd"
                                            label="Ngày bắt đầu"
                                            className=" w-33"
                                            initialValue={khuyenmai.Ngaybd}
                                        >
                                            <Input className="m-1 w-100" type="date" />
                                        </Form.Item>
                                    </div>
                                    <div className=" justify-content-between w-30 ">
                                        <Form.Item
                                            name="Ngaykt"
                                            label="Ngày kết thúc"
                                            className=" w-33"
                                            initialValue={khuyenmai.Ngaykt}
                                        >
                                            <Input className="m-1 w-100" type="date" />
                                        </Form.Item>
                                    </div>

                                    {/* kết */}

                                    <div className=" justify-content-between w-30 ">
                                        <Form.Item
                                            className=" w-33"
                                            name="Dieukhoan"
                                            label="Điều khoản"
                                            initialValue={khuyenmai.Dieukhoan}
                                        >
                                            <Input className=" w-100" type="text" />
                                        </Form.Item>
                                    </div>
                                    {/* khuyen mai trang thai */}
                                    <div className="justify-content-between w-30 ">
                                        <Form.Item
                                            className=" w-33"
                                            name="Trangthai"
                                            label="Trạng thái"
                                            initialValue={
                                                khuyenmai.Trangthai === true ? "Mở" : "Tắt"
                                            }
                                        >
                                            <Select
                                                className="m-1 w-100"
                                                style={{
                                                    width: 120,
                                                }}
                                                onChange={handleChange}
                                                options={[
                                                    {
                                                        value: "1",
                                                        label: "Mở",
                                                    },
                                                    {
                                                        value: "0",
                                                        label: "Tắt",
                                                    },
                                                ]}
                                            />
                                        </Form.Item>
                                    </div>

                                    {/* ket */}
                                </div>
                                <div className="d-flex m-3 w-100 justify-content-center">
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="m-2">
                                            Lưu
                                        </Button>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            className="m-2"
                                            onClick={handleReset}
                                        >
                                            Hủy
                                        </Button>
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default KhuyenmaiDetail;
