import { Select, Input, Form, Button, DatePicker, Switch } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import addressAPI from "../../services/addressAPI";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { exist, successDialog } from "../../components/Dialog/Dialog";
import { useSelector } from "react-redux";
import nguoiDungAPI from "../../services/nguoiDungAPI";
import { Link } from "react-router-dom";
function NguoidungDetail() {
    const [city, listCity] = useState([]);
    const [district, listDistrict] = useState([]);
    const [ward, listWard] = useState([]);
    const [swicth, setSwitch] = useState(true);
    const { nguoidung } = useSelector((state) => state.dataAdd);
    //Lây API Thành phố
    const getAllCity = async () => {
        try {
            const response = await addressAPI.getAll_Province();
            listCity(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    //Lây API Quan
    const getAllDistrict = async (code) => {
        try {
            const response = await addressAPI.getAll_District(code);
            listDistrict(response.data.districts);
        } catch (err) {
            throw new Error(err);
        }
    };
    //Lây API Thành phố
    const getAllWard = async (e) => {
        try {
            const response = await addressAPI.getAll_Ward(e);
            listWard(response.data.wards);
        } catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        getAllCity();
    }, []);
    const onChange = (e) => {
        getAllDistrict(e);
    };
    const onChangeDistrict = (e) => {
        getAllWard(e);
    };
    const onSearch = (value) => {
        console.log("search:", value);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onChangeSwicth = (checked) => {
        setSwitch(checked);
    };

    const handleCreate = async (obj) => {
        const data = await nguoiDungAPI.create(obj);
        console.log(data.data);
        if (data.data.result === "NguoiDung Exist") {
            exist();
        } else if (data.data.message === "Create Successfull") {
            successDialog();
        }
    };
    //SỬA
    const handleUpdate = async (obj) => {
        const data = await nguoiDungAPI.update(obj);
         console.log('data.data.message: ', data.data.message);
        if (data.data.message === "Update Nguoidung Successful") {
           
            successDialog();
        }
    };
    // XỬ LÝ THÊM SỬA
    const handleSubmit = (e) => {
        let obj = {
            ...e,
            Ngaysinh: date,
        };
        console.log("obj: ", obj);
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
                if (nguoidung.id) {
                    // console.log(">>>>");
                    handleUpdate(obj);
                }
                //CREATE
                else {
                    handleCreate(obj);
                }
            }
        });
    };
    const [date, SetDate] = useState("");
    const onChangeDate = (date, dateString) => {
        console.log(date, ">>>", dateString);
        SetDate(dateString);
    };
    console.log(date);
    // Lấy API Thành Phố
    let arraycity = [];
    let arraydistrict = [];
    let arrayward = [];
    city.map((values, index) => arraycity.push({ name: values.name, code: values.code }));
    district.map((values, index) => arraydistrict.push({ name: values.name, code: values.code }));
    console.log(ward);
    ward.map((values, index) => arrayward.push({ name: values.name, code: values.code }));
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <Link to="/nguoidung-list">
                    <Button className="mx-4">Quay lại</Button>
                </Link>
                <div className="m-4 ">
                    <div className="bd-radius bg-content p-4 text-muted fw-bold">
                        <div className="d-flex justify-content-between">
                            <p className="fs-3 w-75">THÔNG TIN CHI TIẾT NGƯỜI DÙNG</p>
                        </div>

                        <hr className="w-100 " />
                        <br />

                        <div>
                            <Form onFinish={handleSubmit}>
                                {nguoidung.Tennd ? (
                                    <Form.Item name="id" label="Id:">
                                        <Input />
                                    </Form.Item>
                                ) : (
                                    ""
                                )}
                                <div className="d-flex flex-wrap justify-content-between">
                                    <div className="justify-content-center w-30 ">
                                        <Form.Item
                                            name="Loaind"
                                            label="Loại người dùng"
                                            initialValue={
                                                nguoidung.Loaind === 1
                                                    ? "Khách hàng thành viên"
                                                    : nguoidung.Loaind === 2
                                                    ? "Khách vãng lai"
                                                    : "Nhân viên"
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
                                                        label: "Khách hàng thành viên",
                                                    },
                                                    {
                                                        value: "2",
                                                        label: "Khách vãng lai",
                                                    },
                                                    {
                                                        value: "3",
                                                        label: "Nhân viên",
                                                    },
                                                ]}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="justify-content-between w-30 ">
                                        <Form.Item
                                            className="m-1 w-33"
                                            name="Holot"
                                            label="Họ lót"
                                            initialValue={nguoidung.Holot}
                                        >
                                            <Input className="m-1 w-100" id="outlined-basic" />
                                        </Form.Item>
                                    </div>
                                    <div className="justify-content-between w-30 ">
                                        <Form.Item
                                            className="m-1 w-33"
                                            name="Ten"
                                            label="Tên"
                                            initialValue={nguoidung.Ten}
                                        >
                                            <Input className="m-1 w-100" type="text" />
                                        </Form.Item>
                                    </div>
                                    <div className="justify-content-between w-30 ">
                                        <Form.Item name="Ngaysinh" label="Ngày sinh">
                                            <DatePicker picker="date" onChange={onChangeDate} />
                                        </Form.Item>
                                    </div>

                                    <div className="justify-content-between w-30 ">
                                        <Form.Item
                                            className="m-1 w-33"
                                            name="Sdt"
                                            label="Số điện thoại"
                                            initialValue={nguoidung.Sdt}
                                        >
                                            <Input className="m-1 w-100" type="tel" />
                                        </Form.Item>
                                    </div>
                                    <div className="justify-content-between w-30 ">
                                        <Form.Item
                                            className="m-1 w-33"
                                            name="Gioitinh"
                                            label="Giới tính"
                                            initialValue={nguoidung.Gioitinh === 1 ? "Nữ" : "Nam"}
                                        >
                                            <Select
                                                className="m-1 w-100"
                                                style={{
                                                    width: 120,
                                                }}
                                                onChange={handleChange}
                                                options={[
                                                    {
                                                        value: "0",
                                                        label: "Nam",
                                                    },
                                                    {
                                                        value: "1",
                                                        label: "Nữ",
                                                    },
                                                ]}
                                            />
                                        </Form.Item>
                                    </div>

                                 
                                    <div className="justify-content-between w-30">
                                        <Form.Item
                                            className="my-2 w-33"
                                            name="Thanhpho"
                                            label="Thành phố/tỉnh"
                                            initialValue={nguoidung.Thanhpho}
                                        >
                                            <Select
                                                className="w-100"
                                                showSearch
                                                style={{
                                                    width: 160,
                                                }}
                                                placeholder="Chọn thành phố, tỉnh"
                                                optionFilterProp="children"
                                                onChange={onChange}
                                                onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    (option?.label ?? "")
                                                        .toLowerCase()
                                                        .includes(input.toLowerCase())
                                                }
                                                options={arraycity.map((item) => ({
                                                    value: item.code,
                                                    label: item.name,
                                                }))}
                                            />
                                        </Form.Item>
                                    </div>

                                    <div className="justify-content-between w-30">
                                        <Form.Item
                                            className="m-2 w-33"
                                            name="Quan"
                                            label="Quận/huyện"
                                            initialValue={nguoidung.Quan}
                                        >
                                            <Select
                                                className="w-100"
                                                showSearch
                                                style={{
                                                    width: 160,
                                                }}
                                                placeholder="Chọn quận, huyện"
                                                optionFilterProp="children"
                                                onChange={onChangeDistrict}
                                                onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    (option?.label ?? "")
                                                        .toLowerCase()
                                                        .includes(input.toLowerCase())
                                                }
                                                options={arraydistrict.map((item) => ({
                                                    value: item.code,
                                                    label: item.name,
                                                }))}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="justify-content-between w-30">
                                        <Form.Item
                                            className="m-2 w-33"
                                            name="Phuong"
                                            label="Phường/xã"
                                            initialValue={nguoidung.Phuong}
                                        >
                                            <Select
                                                className=" w-100"
                                                showSearch
                                                fieldNames="phuong"
                                                style={{
                                                    width: 160,
                                                }}
                                                placeholder="Chọn phường, xã"
                                                optionFilterProp="children"
                                                onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    (option?.label ?? "")
                                                        .toLowerCase()
                                                        .includes(input.toLowerCase())
                                                }
                                                options={arrayward.map((item) => ({
                                                    value: item.code,
                                                    label: item.name,
                                                }))}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className=" mt-4 justify-content-between w-30 ">
                                        <Form.Item
                                            className=" w-33"
                                            name="Email"
                                            label="Email"
                                            initialValue={nguoidung.Email}
                                        >
                                            <Input
                                                className=" w-100"
                                                label="Email"
                                                type="email"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div
                                        className="mt-4 justify-content-between w-30"
                                    >
                                        <Form.Item
                                            className=" w-33"
                                            name="Tendangnhap"
                                            label="Tên đăng nhập"
                                            initialValue={nguoidung.Tendangnhap}
                                        >
                                            <Input
                                                className=" w-100"
                                                type="text"
                                                variant="outlined"
                                                disabled={nguoidung.id ? true : false}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div
                                        className="mt-4 justify-content-between w-30 "
                                    >
                                        <Form.Item
                                            className=" w-33"
                                            name="Matkhau"
                                            label="Mật khẩu"
                                            initialValue={nguoidung.Matkhau}
                                        >
                                            <Input
                                                className=" w-100"
                                                type="password"
                                                disabled={swicth ? true : false}
                                            />
                                        </Form.Item>
                                    </div>
                                    {nguoidung.id ? (
                                        <Form.Item label="Nếu bạn muốn sửa mật khẩu thì nhấn vào đây">
                                            <Switch
                                                className="m-2"
                                                defaultChecked
                                                onChange={onChangeSwicth}
                                                de
                                            />
                                        </Form.Item>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="d-flex m-3 w-100 justify-content-center">
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
                            </Form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default NguoidungDetail;
