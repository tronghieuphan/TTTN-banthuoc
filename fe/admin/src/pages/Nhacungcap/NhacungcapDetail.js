import { Select, Input, Button, Form } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import addressAPI from "../../services/addressAPI";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import nhaCungCapAPI from "../../services/nhaCungCapAPI";
import { useSelector, useDispatch } from "react-redux";
import { exist, successDialog } from "../../components/Dialog/Dialog";
import { Link } from "react-router-dom";
import { setDataNcc } from "../../slices/dataAdd";
function NhacungcapDetail() {
    const [city, listCity] = useState([]);
    const [district, listDistrict] = useState([]);
    const [ward, listWard] = useState([]);
    const { nhacungcap } = useSelector((state) => state.dataAdd);
    const dispatch = useDispatch();
    const [values, setValues] = useState([]);

    console.log("values: ", values);
    useEffect(() => {
        setValues(nhacungcap);
    }, [nhacungcap]);

    const handleCreate = async (obj) => {
        const data = await nhaCungCapAPI.create(obj);
        if (data.data.message === "NhaCungCap Exist") {
            exist();
        } else if (data.data.message === "Create Successfully") {
            successDialog();
        }
    };
    //SỬA
    const handleUpdate = async (obj) => {
        const data = await nhaCungCapAPI.update(obj);
        if (data.data.message === "Update NhaCungCap Successful") {
            successDialog();
        }
    };
    //RESET
    const handleReset = () => {
        dispatch(setDataNcc([]));
        const obj = {
            Tenncc: "",
        };
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
                if (nhacungcap.Tenncc) {
                    handleUpdate(e);
                }
                //CREATE
                else {
                    handleCreate(e);
                }
            }
        });
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
    city.map((values, index) => arraycity.push(values.name));
    district.map((values, index) => arraydistrict.push(values.name));
    ward.map((values, index) => arrayward.push(values.name));
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <Link to="/nhacungcap-list" className="m-4">
                    <Button> Quay lại</Button>
                </Link>
                <div className="m-4 ">
                    <div className="bd-radius bg-content p-4 text-muted fw-bold">
                        <div className="d-flex justify-content-between">
                            <p className="fs-3 w-75">THÔNG TIN CHI TIẾT NHÀ CUNG CẤP</p>
                        </div>
                        <hr className="w-100 " />
                        <br />
                        <div>
                            <Form onFinish={handleSubmit}>
                                {nhacungcap.Tenncc ? (
                                    <Form.Item label="ID" name="id" initialValue={nhacungcap.id}>
                                        <Input disabled />
                                    </Form.Item>
                                ) : (
                                    ""
                                )}
                                <div className="d-flex flex-wrap justify-content-between">
                                    <div className="justify-content-center w-30 ">
                                        <Form.Item
                                            className="m-1 w-33"
                                            label="Tên nhà cung cấp"
                                            name="Tenncc"
                                            initialValue={nhacungcap.Tenncc}
                                        >
                                            <Input
                                                className="m-1 w-100"
                                                id="outlined-basic"
                                                variant="outlined"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="justify-content-center w-30 ">
                                        <Form.Item
                                            className="m-1 w-33"
                                            name="Email"
                                            label="Email"
                                            initialValue={nhacungcap.Email}
                                        >
                                            <Input
                                                className="m-1 w-100"
                                                id="outlined-basic"
                                                type="text"
                                                name="Email"
                                                variant="outlined"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="justify-content-center w-30 ">
                                        <Form.Item
                                            className="m-1 w-33"
                                            name="Sdt"
                                            label="Số điện thoại"
                                            initialValue={nhacungcap.Sdt}
                                        >
                                            <Input
                                                className="m-1 w-100"
                                                id="outlined-basic"
                                                type="tel"
                                                name="Sdt"
                                                variant="outlined"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="justify-content-center w-30">
                                        <Form.Item
                                            className="m-2 w-33"
                                            name="Phuong"
                                            label="Phường/xã"
                                            initialValue={nhacungcap.Phuong}
                                        >
                                            <Select
                                                className="w-100"
                                                showSearch
                                                style={{
                                                    width: 160,
                                                }}
                                                placeholder="Chọn phường, xã"
                                                optionFilterProp="children"
                                                onChange={(e) => onChange(e)}
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
                                        </Form.Item>
                                    </div>
                                    <div className="justify-content-center w-30">
                                        <Form.Item
                                            className="m-2 w-33"
                                            name="Quan"
                                            label="Quan/huyện"
                                            initialValue={nhacungcap.Quan}
                                        >
                                            <Select
                                                className="w-100"
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
                                        </Form.Item>
                                    </div>
                                    <div className="justify-content-center w-30">
                                        <Form.Item
                                            className="m-2 w-33"
                                            name="Thanhpho"
                                            label="Thành phố/tỉnh"
                                            initialValue={nhacungcap.Thanhpho}
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
                                                    value: item,
                                                    label: item,
                                                }))}
                                            />
                                        </Form.Item>
                                    </div>
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

export default NhacungcapDetail;
