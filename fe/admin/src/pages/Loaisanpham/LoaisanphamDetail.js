import { Input, Button, Form } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { setDataLSP } from "../../slices/loaisanphamdanhmucSlice";

function LoaisanphamDetail(props) {
    //GỌI PROPS TỪ LIST
    const handleCreate = props.handleCreate;
    const handleUpdate = props.handleUpdate;
    const handleUpdate2 = props.handleUpdate;

    const { loaisanpham } = useSelector((state) => state.lspdm);
    const dispatch = useDispatch();
    //SET GIÁ TRỊ CHO BIẾN
    const [tenloai, setTenloai] = useState("");
    const [madm, setMadm] = useState("");
    

    //SET STORE TRUYỀN DỮ LIỆU TRỪ LIST QUA CHO DETAIL
    useEffect(() => {
        setTenloai(loaisanpham.Tenloai);
        setMadm(loaisanpham.Madm);
    }, [loaisanpham]);

    //XỬ LÝ NHẬP LIỆU
    const handleOnChange = (e) => {
        setTenloai(e.target.value);
    };
    const handleOnChange2 = (e) => {
        setMadm(e.target.value);
    };
    

    // XỬ LÝ THÊM SỬA
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: loaisanpham.id,
            Tenloai: tenloai, // biến Tendm phải ghi đúng với phần data.Tenloai bên be
            Madm: madm
        };
        console.log(">>>", obj);
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
                //UPDATE
                if (loaisanpham.Tenloai) {
                    handleUpdate(obj);
                }
                if (loaisanpham.Madm) {
                    handleUpdate2(obj);
                }
                //CREATE
                else {
                    handleCreate(obj);
                }
            }
        });
    };

    //RESET LẠI GIÁ TRỊ VỀ BAN ĐẦU
    const handleReset = () => {
        setTenloai("");
        setMadm("");
        dispatch(setDataLSP([]));
    };
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
                    <div>
                        <form onSubmit={handleSubmit} method="post">
                            <div className="d-flex flex-wrap justify-content-center">
                                <div className="justify-content-center w-90 ">
                                    <label className="m-1 w-100">Tên loại sản phẩm:</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Tên loại sản phẩm"
                                        variant="outlined"
                                        type="text"
                                        name="tenloai"
                                        value={tenloai || ""}
                                        onChange={handleOnChange}
                                    />
                                    <label className="m-1 w-100">Mã danh mục:</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Mã danh mục"
                                        variant="outlined"
                                        type="text"
                                        name="madm"
                                        value={madm || ""}
                                        onChange={handleOnChange2}
                                    />
                                    {/* <Form.Item
                                        className="m-1 w-33"
                                        name="madm"
                                        label="Mã danh mục"
                                        initialValue={loaisanpham.Madm}
                                    >
                                        <Input className="m-1 w-100" id="outlined-basic" />
                                    </Form.Item> */}
                                    
                                    {/* <button
                                        type="submit"
                                        className="mx-2"
                                        style={{
                                            background: "#1677FF",
                                            color: "#fff",
                                            border: "1px solid #1677FF",
                                            padding: "3px 15px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        {loaisanpham.Tenloai  ? "Lưu" : "Thêm"}
                                        {loaisanpham.Madm ? "Lưu" : "Thêm"}
                                    </button> */}
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="m-2">
                                        {loaisanpham.Tenloai  ? "Lưu" : "Thêm"}
                                        </Button>
                                    </Form.Item>

                                    <Button type="primary" onClick={handleReset}>
                                        Hủy
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

// function LoaisanphamDetail(props) {
//     return (
//         <>
//             <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
//                 <div>
//                     <form action="" method="">
//                         <div className="d-flex flex-wrap justify-content-center">
//                             <div className="justify-content-center w-90 ">
//                                 <label className="m-1 w-100">Tên loại sản phẩm:</label>
//                                 <Input
//                                     className="m-1 w-100"
//                                     id="outlined-basic"
//                                     label="Tên nhà cung cấp"
//                                     variant="outlined"
//                                     value=""
//                                 />
//                                 <Button className="mt-3">Thêm</Button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }

export default LoaisanphamDetail;
