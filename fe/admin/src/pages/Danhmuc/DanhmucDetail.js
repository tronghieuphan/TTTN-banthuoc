import { Input, Button } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { setDataDM } from "../../slices/xuatxudanhmucSlice";

function DanhmucDetail(props) {
    //GỌI PROPS TỪ LIST
    const handleCreate = props.handleCreate;
    const handleUpdate = props.handleUpdate;

    const { danhmuc } = useSelector((state) => state.xxdm);
    const dispatch = useDispatch();
    //SET GIÁ TRỊ CHO BIẾN
    const [tendm, setTendm] = useState("");

    //SET STORE TRUYỀN DỮ LIỆU TRỪ LIST QUA CHO DETAIL
    useEffect(() => {
        setTendm(danhmuc.Tendm);
    }, [danhmuc]);

    //XỬ LÝ NHẬP LIỆU
    const handleOnChange = (e) => {
        setTendm(e.target.value);
    };

    // XỬ LÝ THÊM SỬA
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: danhmuc.id,
            Tendm: tendm, // biến Tendm phải ghi đúng với phần data.Tendm bên be
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
                if (danhmuc.Tendm) {
                    handleUpdate(obj);
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
        setTendm("");
        dispatch(setDataDM([]));
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
                                    <label className="m-1 w-100">Tên danh mục:</label>
                                    <Input
                                        className="m-1 w-100"
                                        id="outlined-basic"
                                        label="Tên loại sản phẩm"
                                        variant="outlined"
                                        type="text"
                                        name="tendm"
                                        value={tendm || ""}
                                        onChange={handleOnChange}
                                    />
                                    <button
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
                                        {danhmuc.Tendm ? "Lưu" : "Thêm"}
                                    </button>

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

// function DanhmucDetail() {
//     return (
//         <>
//             <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
//                 <div>
//                     <form action="" method="">
//                         <div className="d-flex flex-wrap justify-content-center">
//                             <div className="justify-content-center w-90 ">
//                                 <label className="m-1 w-100">Tên danh mục:</label>
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



export default DanhmucDetail;
