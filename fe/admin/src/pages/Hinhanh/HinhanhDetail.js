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
    const [url, setUrl] = useState("");
    const [valueSP, setValueSP] = useState("");

    const dispatch = useDispatch();
    const [sanphamList, setSanphamList] = useState([]);

    //SET STORE TRUYỀN DỮ LIỆU TRỪ LIST QUA CHO DETAIL

    const getAllSp = async () => {
        const res = await sanPhamAPI.getAll();
        setSanphamList(res.data);
    };
    useEffect(() => {
        setUrl(hinhanh.Url);
        setValueSP(hinhanh.Masp);
        getAllSp();
    }, [hinhanh]);
    //XỬ LÝ NHẬP LIỆU
    const handleOnChange = (e) => {
        setUrl(e.target.value);
    };
    //XỬ LÝ THAY ĐỔI SP
    const onChange = (e) => {
        setValueSP(e);
    };
    const onSearch = (value) => {
        console.log("search:", value);
    };
    // XỬ LÝ THÊM SỬA
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: hinhanh.id,
            Url: url, // biến Tendm phải ghi đúng với phần data.Tenloai bên be
            Masp: valueSP,
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
                if (hinhanh.Url) {
                    handleUpdate(obj);
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
        setUrl("");
        setValueSP("");
        dispatch(setDataHa([]));
    };
    return (
        <>
            <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
                <div>
                    <form onSubmit={handleSubmit} method="post">
                        <div className="d-flex flex-wrap justify-content-center">
                            <div className="justify-content-center w-100 ">
                                <label className="m-1">Đường dẫn:</label>
                                <Input
                                    className="m-1"
                                    id="outlined-basic"
                                    label="Đường dẫn"
                                    variant="outlined"
                                    type="text"
                                    name="Url"
                                    value={url || ""}
                                    onChange={handleOnChange}
                                />
                                <label className="m-1 w-100">Chọn sản phẩm:</label>
                                <Select
                                    className="m-1 w-100"
                                    showSearch
                                    style={{
                                        width: 200,
                                    }}
                                    value={valueSP}
                                    placeholder="Chọn sản phẩm"
                                    optionFilterProp="children"
                                    onSearch={onSearch}
                                    onChange={onChange}
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
                                <div className="d-flex justify-content-center">
                                    <Button type="primary" htmlType="submit" className="m-2">
                                        {hinhanh.id ? "Lưu" : "Thêm"}
                                    </Button>
                                    <Button type="primary" onClick={handleReset} className="m-2">
                                        Hủy
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className="bd-radius bg-content p-4 text-muted fw-bold text-center">
                <div>
                    {hinhanh.id ? (
                        <Form onFinish={handleSubmit}>
                            <div className="d-flex flex-wrap justify-content-between">
                                <Form.Item name="id" label="Id" className="w-100">
                                    <Input disabled name="id" />
                                </Form.Item>

                                <div className="justify-content-cen ter w-100 ">
                                    <Form.Item
                                        className=" w-100"
                                        name="Url"
                                        label="Đường dẫn"
                                        onChange={onChange}
                                    >
                                        <Input
                                            className=" w-100"
                                            type="text"
                                            name="url"
                                            onChange={onChange}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="justify-content-center w-100 ">
                                    <Form.Item className=" w-33" name="Masp" label="Sản phẩm">
                                        <Select
                                            className="w-100"
                                            showSearch
                                            style={{
                                                width: 160,
                                            }}
                                            name="sanpham"
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
                                            // onChange={onChange}
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
            </div> */}
        </>
    );
}

export default HinhanhDetail;
