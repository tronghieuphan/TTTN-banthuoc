import React from "react";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import addressAPI from "../../services/addressAPI";
import nguoiDungAPI from "../../services/nguoiDungAPI";
import { Select, Input, Form, Modal } from "antd";
import { toast } from "react-toastify";
import "./InfoUser.scss";
function InfoUser() {
    const AccountLS = JSON.parse(localStorage.getItem("ACCOUNT"));

    const [open, setOpen] = useState(true);
    const [city, listCity] = useState([]);
    const [district, listDistrict] = useState([]);
    const [ward, listWard] = useState([]);

    const handleSubmitPass = async (e) => {
        let obj = {
            ...e,
            Tendangnhap: AccountLS.Tendangnhap,
        };

        handleUpdatePass(obj);
    };
    const [open1, setOpen1] = useState(false);
    const showModal = () => {
        setOpen1(true);
    };

    const handleCancel = (e) => {
        console.log(e);
        setOpen1(false);
    };
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
    const onChange = (e, obj) => {
        getAllDistrict(obj.id);
    };
    const onChangeDistrict = (e, obj) => {
        getAllWard(obj.id);
    };
    const onSearch = (value) => {
        console.log("search:", value);
    };

    // Lấy API Thành Phố
    let arraycity = [];
    let arraydistrict = [];
    let arrayward = [];
    city.map((values, index) => arraycity.push({ name: values.name, code: values.code }));
    district.map((values, index) => arraydistrict.push({ name: values.name, code: values.code }));
    ward.map((values, index) => arrayward.push({ name: values.name, code: values.code }));

    const handleUpdatePass = async (obj) => {
        if (
            obj.Matkhaucu === undefined ||
            obj.Matkhau === undefined ||
            obj.Matkhaulai === undefined
        ) {
            toast.error("Bạn hãy nhập đầy đủ thông tin");
        } else if (obj.Matkhaulai !== obj.Matkhau) {
            toast.error("Mật khẩu nhập lại không trùng khớp");
        } else {
            const data = await nguoiDungAPI.changePass(obj);
            if (data.data === "Change Fail") {
                toast.error("Mật khẩu cũ không trùng khớp");
            } else if (data.data === "Change Succesfull") {
                toast.success("Đổi mật khẩu thành công");
                setOpen1(false);
            }
        }
    };
    const handleUpdate = async (obj) => {
        const data = await nguoiDungAPI.update(obj);
        console.log("data: ", data.data.data);
        if ((data.message = "Update Nguoidung Successful")) {
            toast.success("Cập nhập thành công");
            localStorage.setItem("ACCOUNT", JSON.stringify(data.data.data));
        } else {
            toast.error("Cập nhập thất bại");
        }
    };

    const handleSubmit = (e) => {
        if (
            e.Sdt === "" ||
            e.Sdt === undefined ||
            e.Sdt === null ||
            e.Email === "" ||
            e.Email === undefined ||
            e.Email === null
        ) {
            toast.warning("Bạn phải cập nhập đủ thông tin và email");
        } else {
            handleUpdate(e);
            setOpen(true);
        }
    };
    const handleOpen = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="w-100">
                <h2>THÔNG TIN TÀI KHOẢN CÁ NHÂN</h2>
                <Form onFinish={handleSubmit} layout="vertical">
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="justify-content-center w-49 ">
                            <Form.Item
                                className="w-30"
                                label="Họ lót"
                                name="Holot"
                                initialValue={AccountLS.Holot}
                            >
                                <Input
                                    className="w-100"
                                    id="outlined-basic"
                                    variant="outlined"
                                    disabled={open}
                                />
                            </Form.Item>
                        </div>
                        <div className="justify-content-center w-49 ">
                            <Form.Item
                                className="w-30"
                                label="Tên"
                                name="Ten"
                                initialValue={AccountLS.Ten}
                            >
                                <Input
                                    className="w-100"
                                    id="outlined-basic"
                                    type="text"
                                    variant="outlined"
                                    disabled={open}
                                />
                            </Form.Item>
                        </div>
                        <div className="justify-content-center w-49 ">
                            <Form.Item
                                className="w-30"
                                name="Sdt"
                                label="Số điện thoại"
                                initialValue={AccountLS.Sdt}
                            >
                                <Input
                                    className="w-100"
                                    id="outlined-basic"
                                    type="tel"
                                    variant="outlined"
                                    disabled={open}
                                />
                            </Form.Item>
                        </div>
                        <div className="justify-content-center w-49 ">
                            <Form.Item
                                className="w-30"
                                label="Giới tính"
                                name="Gioitinh"
                                initialValue={AccountLS.Gioitinh === 0 ? "Nam" : "Nữ"}
                            >
                                <Select
                                    disabled={open}
                                    className="w-100"
                                    showSearch
                                    style={{
                                        width: 160,
                                    }}
                                    placeholder="Giới tính"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        (option?.label ?? "")
                                            .toLowerCase()
                                            .includes(input.toLowerCase())
                                    }
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
                        <div className="justify-content-center w-49 ">
                            <Form.Item
                                className="w-30"
                                label="Ngày sinh"
                                name="Ngaysinh"
                                initialValue={AccountLS.Ngaysinh}
                            >
                                <Input
                                    className="w-100"
                                    id="outlined-basic"
                                    type="date"
                                    variant="outlined"
                                    disabled={open}
                                />
                            </Form.Item>
                        </div>

                        <div className="justify-content-center w-49 ">
                            <Form.Item
                                className="w-30"
                                label="Email"
                                name="Email"
                                initialValue={AccountLS.Email}
                            >
                                <Input
                                    className="w-100"
                                    id="outlined-basic"
                                    type="email"
                                    variant="outlined"
                                    disabled={open}
                                />
                            </Form.Item>
                        </div>

                        <div className="justify-content-between" style={{ width: "30%" }}>
                            <Form.Item
                                className="w-30"
                                name="Thanhpho"
                                label="Thành phố/tỉnh"
                                initialValue={AccountLS.Thanhpho}
                            >
                                <Select
                                    className="w-100"
                                    showSearch
                                    disabled={open}
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
                                        value: item.name,
                                        label: item.name,
                                        id: item.code,
                                    }))}
                                />
                            </Form.Item>
                        </div>

                        <div className="justify-content-between " style={{ width: "30%" }}>
                            <Form.Item
                                className="w-33"
                                name="Quan"
                                label="Quận/huyện"
                                initialValue={AccountLS.Quan}
                            >
                                <Select
                                    className="w-100"
                                    showSearch
                                    disabled={open}
                                    style={{
                                        width: 400,
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
                                        value: item.name,
                                        label: item.name,
                                        id: item.code,
                                    }))}
                                />
                            </Form.Item>
                        </div>
                        <div className="justify-content-between" style={{ width: "30%" }}>
                            <Form.Item
                                className="w-33"
                                name="Phuong"
                                label="Phường/xã"
                                initialValue={AccountLS.Phuong}
                            >
                                <Select
                                    className="m-1 w-100"
                                    showSearch
                                    disabled={open}
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
                                        value: item.name,
                                        label: item.name,
                                    }))}
                                />
                            </Form.Item>
                        </div>
                        <div className="justify-content-center w-49 ">
                            <Form.Item
                                className="w-30"
                                label="Tên đăng nhập"
                                initialValue={AccountLS.Tendangnhap}
                                name="Tendangnhap"
                            >
                                <Input
                                    className="w-100"
                                    id="outlined-basic"
                                    type="text"
                                    variant="outlined"
                                    disabled
                                />
                            </Form.Item>
                        </div>
                    </div>

                    <div className="w-100 d-flex justify-content-center">
                        {open === false ? (
                            <Form.Item className="w-100">
                                <Button
                                    type="submit"
                                    className="mt-4 w-100 fs-5 fw-bold"
                                    variant="contained"
                                >
                                    LƯU THÔNG TIN
                                </Button>
                            </Form.Item>
                        ) : (
                            ""
                        )}
                    </div>
                </Form>
                <div className="mt-4">
                    <Button type="primary" onClick={showModal}>
                        ĐỔI MẬT KHẤU{" "}
                    </Button>
                    <Modal
                        className="h-50"
                        title="MỜI BẠN NHẬP THÔNG TIN"
                        open={open1}
                        onCancel={handleCancel}
                        cancelButtonProps={{}}
                        footer={null}
                    >
                        <Form onFinish={handleSubmitPass}>
                            <Form.Item label="Nhập mật khẩu cũ" name="Matkhaucu">
                                <Input type="password" />
                            </Form.Item>
                            <Form.Item label="Nhập mật khẩu mới" name="Matkhau">
                                <Input type="password" />
                            </Form.Item>{" "}
                            <Form.Item label="Nhập lại mật khẩu mới" name="Matkhaulai">
                                <Input type="password" />
                            </Form.Item>
                            <Form.Item className="text-center">
                                <Button type="submit">Xác nhận</Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
                {open === true ? (
                    <Button
                        className="w-100 mt-4 p-3 fs-5 fw-bold "
                        variant="contained"
                        onClick={handleOpen}
                    >
                        CẬP NHẬP THÔNG TIN
                    </Button>
                ) : (
                    ""
                )}
            </div>
            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default InfoUser;
