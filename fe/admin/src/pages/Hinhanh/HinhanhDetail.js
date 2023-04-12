import { Input, Button, Form, Select } from "antd";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import sanPhamAPI from "../../services/sanPhamAPI";
import React from "react";
import Swal from "sweetalert2";
import { setDataHa } from "../../slices/dataAdd";

function HinhanhDetail(props) {
    const handleCreate = props.handleCreate;
    const handleUpdate = props.handleUpdate;

    const { hinhanh } = useSelector((state) => state.dataAdd);
    const dispatch = useDispatch();
    const [sanphamList, setSanphamList] = useState([]);
    //SET GIÁ TRỊ CHO BIẾN

    //SET STORE TRUYỀN DỮ LIỆU TRỪ LIST QUA CHO DETAIL

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

    const deleteStore = () => {
        dispatch(setDataHa([]));
    };
    return (
        <>
            <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
                <div>
                    {hinhanh.id ? (
                        <Form onFinish={handleSubmit}>
                            <div className="d-flex flex-wrap justify-content-between">
                                <Form.Item
                                    name="id"
                                    label="Id"
                                    className="w-100"
                                    initialValue={hinhanh.id}
                                >
                                    <Input disabled />
                                </Form.Item>

                                <div className="justify-content-cen ter w-100 ">
                                    <Form.Item
                                        className=" w-100"
                                        name="Url"
                                        label="Đường dẫn"
                                        initialValue={hinhanh.Url}
                                    >
                                        <Input className=" w-100" type="text" />
                                    </Form.Item>
                                </div>
                                <div className="justify-content-center w-100 ">
                                    <Form.Item
                                        className=" w-33"
                                        name="Masp"
                                        label="Sản phẩm"
                                        initialValue={hinhanh.Masp}
                                    >
                                        <Select
                                            className="w-100"
                                            showSearch
                                            style={{
                                                width: 160,
                                            }}
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
                                        <Button
                                            type="primary"
                                            className="m-2"
                                            onClick={deleteStore}
                                        >
                                            Hủy
                                        </Button>
                                    </Form.Item>
                                </div>
                            </div>
                        </Form>
                    ) : (
                        <Form onFinish={handleSubmit}>
                            <div className="d-flex flex-wrap justify-content-between">
                                <div className="justify-content-cen ter w-100 ">
                                    <Form.Item
                                        className=" w-100"
                                        name="Url"
                                        label="Đường dẫn"
                                        initialValue={hinhanh.Url}
                                    >
                                        <Input className=" w-100" type="text" v />
                                    </Form.Item>
                                </div>
                                <div className="justify-content-center w-100 ">
                                    <Form.Item
                                        className=" w-33"
                                        name="Masp"
                                        label="Sản phẩm"
                                        initialValue={hinhanh.Masp}
                                    >
                                        <Select
                                            className="w-100"
                                            showSearch
                                            style={{
                                                width: 160,
                                            }}
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
                                        <Button
                                            type="primary"
                                            className="m-2"
                                            onClick={deleteStore}
                                        >
                                            Hủy
                                        </Button>
                                    </Form.Item>
                                </div>
                            </div>
                        </Form>
                    )}
                </div>
            </div>
        </>
    );
}

export default HinhanhDetail;
