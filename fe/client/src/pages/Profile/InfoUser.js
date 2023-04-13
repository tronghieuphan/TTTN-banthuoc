import React from "react";
import { Button } from "@mui/material";
import ChangePassword from "./ChangePass";
import { useState, useEffect } from "react";
import addressAPI from "../../services/addressAPI";
import nguoiDungAPI from "../../services/nguoiDungAPI";
import Swal from "sweetalert2";
import { Select, Input } from "antd";
import "./InfoUser.scss";
function InfoUser() {
    // const [gender, setAge] = useState("");
    const AccountLS = JSON.parse(localStorage.getItem("ACCOUNT"));
    const [open, setOpen] = useState(true);
    const [city, listCity] = useState([]);
    const [district, listDistrict] = useState([]);
    const [ward, listWard] = useState([]);

    //Lây API Thành phố
    const getAllCity = async () => {
        try {
            const response = await addressAPI.getAll_Province();
            listCity(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    //Lây API Thành phố
    const getAllDistrict = async () => {
        try {
            const response = await addressAPI.getAll_District();
            listDistrict(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    //Lây API Thành phố
    const getAllWard = async () => {
        try {
            const response = await addressAPI.getAll_Ward();
            listWard(response.data);
        } catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        getAllCity();
        getAllDistrict();
        getAllWard();
    }, []);
    const handleUpdatePass = async (obj) => {
        const data = await nguoiDungAPI.updatePass(obj);
        if (data.data === "Change Succesfull") {
            // successDialog();

        }
    };

    const handleOpenUpdateInfo = async (record) => {
        if (open === true) {
            const data = await nguoiDungAPI.update();
            console.log(data);
            if (data.data.message === "Update Nguoidung Successful") {
                Swal.fire({
                    text: "Cập Nhật Thông Tin Thành Công",
                });
            } 
        } else {
            setOpen(true);
        }
    };

    //Xử lý Select
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log("search:", value);
    };
    // Lấy API Thành Phố
    let arraycity = [];
    let arraydistrict = [];
    let arrayward = [];
    const uniqueSet = new Set(arrayward);
    city.map((values, index) => arraycity.push(values.name));
    district.map((values, index) => arraydistrict.push(values.name));
    ward.map((values, index) => arrayward.push(values.name));

    return (
        <>
            <div className="w-100">
                <h2>THÔNG TIN TÀI KHOẢN CÁ NHÂN</h2>
                <form action="" method="">
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="justify-content-center w-49 ">
                            <label className="m-2 w-30">Họ lót:</label>
                            <Input
                                className="m-2 w-100"
                                id="outlined-basic"
                                label="Họ lót"
                                variant="outlined"
                                value={AccountLS.Holot}
                                disabled={open}
                            />
                        </div>
                        <div className="justify-content-center w-49 ">
                            <label className="m-2 w-30">Tên:</label>
                            <Input
                                className="m-2 w-100"
                                id="outlined-basic"
                                label="Tên"
                                type="text"
                                variant="outlined"
                                value={AccountLS.Ten}
                                disabled={open}
                            />
                        </div>
                        <div className="justify-content-center w-49 ">
                            <label className="m-2 w-30">Số điện thoại:</label>
                            <Input
                                className="m-2 w-100"
                                id="outlined-basic"
                                label="Số Điện Thoại"
                                type="tel"
                                variant="outlined"
                                value={AccountLS.Sdt}
                                disabled={open}
                            />
                        </div>
                        <div className="justify-content-center w-49 ">
                            <label className="m-2 w-30">Giới tính:</label>
                            <Select
                                value={
                                    AccountLS.Gioitinh ? "Nữ" : "Nam"
                                }
                                disabled={open}
                                className="m-2 w-100"
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
                                        value: "Nam",
                                        label: "Nam",
                                    },
                                    {
                                        value: "Nữ",
                                        label: "Nữ",
                                    },
                                ]}
                            />
                        </div>
                        <div className="justify-content-center w-49 ">
                            <label className="m-2 w-30">Ngày sinh:</label>
                            <Input
                                className="m-2 w-100"
                                id="outlined-basic"
                                label="Ngày Sinh"
                                type="date"
                                variant="outlined"
                                value={AccountLS.Ngaysinh}
                                disabled={open}
                            />
                        </div>

                        <div className="justify-content-center w-49 ">
                            <label className="m-2 w-30">Email:</label>
                            <Input
                                className="m-2 w-100"
                                id="outlined-basic"
                                label="Tên"
                                type="email"
                                variant="outlined"
                                value={AccountLS.Email}
                                disabled={open}
                            />
                        </div>
                        <div className="justify-content-center w-33 ">
                            <label className="m-2 w-30">Phường/Xã:</label>

                            <Select
                                value={
                                    AccountLS.Phuong
                                }
                                className="m-2 w-100"
                                disabled={open}
                                showSearch
                                style={{
                                    width: 160,
                                }}
                                placeholder="Chọn phường, xã"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                options={arrayward.map((item) => ({
                                    value: item,
                                    label: item,
                                }))}
                            />
                        </div>
                        <div className="justify-content-center w-33 ">
                            <label className="m-2 w-30">Quận/Huyện:</label>
                            <Select
                                value={
                                    AccountLS.Quan || " "
                                }
                                className="m-2 w-100"
                                disabled={open}
                                showSearch
                                style={{
                                    width: 160,
                                }}
                                placeholder="Chọn quận, huyện"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    (option?.label ?? "")
                                        .toLowerCase()
                                        .includes(input.toLowerCase())
                                }
                                options={arraydistrict.map((item) => ({
                                    value: item,
                                    label: item,
                                }))}
                            />
                        </div>
                        <div className="justify-content-center w-33 ">
                            <label className="m-2 w-30">Thành phố/Tỉnh:</label>
                            <Select
                                value={
                                    AccountLS.Thanhpho
                                }
                                className="m-2 w-100"
                                disabled={open}
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
                                    value: item,
                                    label: item,
                                }))}
                            />
                        </div>
                        <div className="justify-content-center w-100 ">
                            <label className="m-2 w-30">Tên đăng nhập:</label>
                            <Input
                                className="m-2 w-100"
                                id="outlined-basic"
                                label="Tên"
                                type="text"
                                variant="outlined"
                                value={AccountLS.Tendangnhap}
                                disabled={open}
                            />
                        </div>
                    </div>
                </form>

                <div className="w-80 d-flex justify-content-center">
                    <Button
                        onClick={handleOpenUpdateInfo}
                        className="mt-4 w-100 p-3 fs-5 fw-bold m-3 "
                        variant="contained"
                    >
                        {open === false ? "Lưu trạng thái" : "Cập nhập"}
                    </Button >
                    <ChangePassword
                        handleUpdatePass={handleUpdatePass}
                    />
                </div>
            </div>
        </>
    );
}

export default InfoUser;
