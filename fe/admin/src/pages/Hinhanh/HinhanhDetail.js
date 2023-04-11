import { Input, Button, Form, Select } from "antd";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import sanPhamAPI from "../../services/sanPhamAPI";
import React from "react";
import Swal from "sweetalert2";

function HinhanhDetail(props) {
    const handleCreate = props.handleCreate;
    const handleUpdate = props.handleUpdate;

    const { hinhanh } = useSelector((state) => state.dataAdd);

    const [sanphamList, setSanphamList] = useState([]);

    //SET GIÁ TRỊ CHO BIẾN
    const [ha, setHinhanh] = useState({});
    console.log(">>>>", ha.id);
    //SET STORE TRUYỀN DỮ LIỆU TRỪ LIST QUA CHO DETAIL
    useEffect(() => {
        setHinhanh(hinhanh);
    }, [hinhanh]);
    const getAllSp = async () => {
        const res = await sanPhamAPI.getAll();
        setSanphamList(res.data);
    };
    useEffect(() => {
        getAllSp();
    }, []);
    let listSp = [];
    sanphamList.map((values, index) => listSp.push({ id: values.id, Tensp: values.Tensp }));
    //XỬ LÝ THAY ĐỔI SP
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log("search:", value);
    };
    // XỬ LÝ THÊM SỬA
    const handleSubmit = (e) => {
        console.log(">>>", e);
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
                if (hinhanh.Url) {
                    handleUpdate(e);
                }
                //CREATE
                else {
                    handleCreate(e);
                }
            }
        });
    };

    return (
        <>
            <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
                <div>
                    <Form onFinish={handleSubmit}>
                        <div className="d-flex flex-wrap justify-content-between">
                            {hinhanh.id ? (
                                <Form.Item name="id" label="Id" initialValue={ha.id}>
                                    <Input disabled />
                                </Form.Item>
                            ) : (
                                ""
                            )}

                            <div className="justify-content-cen ter w-100 ">
                                <Form.Item
                                    className="my-2 w-100"
                                    name="Url"
                                    label="Đường dẫn"
                                    initialValue={ha.Url}
                                >
                                    <Input className=" w-100" type="text" />
                                </Form.Item>
                            </div>
                            <div className="justify-content-center w-100 ">
                                <Form.Item
                                    className="my-2 w-33"
                                    name="Masp"
                                    label="Sản phẩm"
                                    initialValue={ha.Masp}
                                >
                                    <Select
                                        className="w-100"
                                        showSearch
                                        style={{
                                            width: 160,
                                        }}
                                        defaultValue=""
                                        placeholder="Chọn sản phẩm"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? "")
                                                .toLowerCase()
                                                .includes(input.toLowerCase())
                                        }
                                        options={sanphamList.map((item) => ({
                                            value: item.id,
                                            label: item.Tensp,
                                        }))}
                                    />
                                </Form.Item>
                            </div>
                            <div className="d-flex w-100 justify-content-center">
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="m-2">
                                        Lưu
                                    </Button>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" className="m-2">
                                        Hủy
                                    </Button>
                                </Form.Item>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default HinhanhDetail;
