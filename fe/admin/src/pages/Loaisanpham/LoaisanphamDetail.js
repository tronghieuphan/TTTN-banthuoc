import { Input, Button, Select, Form } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { setDataLSP } from "../../slices/loaisanphamdanhmucSlice";
import danhMucAPI from "../../services/danhMucAPI";
function LoaisanphamDetail(props) {
    //GỌI PROPS TỪ LIST
    const handleCreate = props.handleCreate;
    const handleUpdate = props.handleUpdate;
    const handleUpdate2 = props.handleUpdate;

    const { loaisanpham } = useSelector((state) => state.lspdm);

    const dispatch = useDispatch();
    //SET GIÁ TRỊ CHO BIẾN
    const [tenloai, setTenloai] = useState("");
    const [danhmuc, setDanhMuc] = useState([]);
    const [valueDM, setValueDM] = useState("");
    const getAllDM = async () => {
        const data = await danhMucAPI.getAll();
        setDanhMuc(data.data);
    };
    //SET STORE TRUYỀN DỮ LIỆU TRỪ LIST QUA CHO DETAIL
    useEffect(() => {
        setTenloai(loaisanpham.Tenloai);
        setValueDM(loaisanpham.Madm);
        getAllDM();
    }, [loaisanpham]);

    //XỬ LÝ NHẬP LIỆU
    const handleOnChange = (e) => {
        setTenloai(e.target.value);
    };
    const onChange = (value) => {
        setValueDM(value);
    };
    const onSearch = (value) => {
        console.log("search:", value);
    };
    // XỬ LÝ THÊM SỬA
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: loaisanpham.id,
            Tenloai: tenloai, // biến Tendm phải ghi đúng với phần data.Tenloai bên be
            Madm: valueDM,
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
                    handleReset();
                }
            }
        });
    };

    //RESET LẠI GIÁ TRỊ VỀ BAN ĐẦU
    const handleReset = () => {
        setTenloai("");
        setValueDM("");
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
                                    <label className="m-1 w-100">Chọn danh mục:</label>

                                    <Select
                                        className="m-1 w-100"
                                        showSearch
                                        style={{
                                            width: 160,
                                        }}
                                        value= {valueDM}
                                        placeholder="Chọn danh mục"
                                        optionFilterProp="children"
                                        onSearch={onSearch}
                                        onChange={onChange}
                                        filterOption={(input, option) =>
                                            (option?.label ?? "")
                                                .toLowerCase()
                                                .includes(input.toLowerCase())
                                        }
                                        options={danhmuc.map((item) => ({
                                            value: item.id,
                                            label: item.Tendm,
                                        }))}
                                    />
                                    <div className="d-flex justify-content-center">
                                        <Button type="primary" htmlType="submit" className="m-2">
                                            {loaisanpham.Tenloai ? "Lưu" : "Thêm"}
                                        </Button>

                                        <Button
                                            type="primary"
                                            onClick={handleReset}
                                            className="m-2"
                                        >
                                            Hủy
                                        </Button>
                                    </div>
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
