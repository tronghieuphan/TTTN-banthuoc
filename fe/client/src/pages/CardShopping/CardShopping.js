import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Form, Input, Select, Radio, Space, Table, Button, Popconfirm, Tooltip } from "antd";
import { useState, useEffect } from "react";
import addressAPI from "../../services/addressAPI";
import "./style.scss";
import nguoiDungAPI from "../../services/nguoiDungAPI";

function CartShopping() {
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
    //Radio
    const [value, setValue] = useState(1);
    const handleChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };
    const acc = JSON.parse(localStorage.getItem("ACCOUNT"));
    const [donhang, setDonHang] = useState([]);
    const handleCard = () => {
        let account = JSON.parse(localStorage.getItem("ACCOUNT"));
        let list = JSON.parse(localStorage.getItem("LISTSP"));
        let p = [];
        list.map((item, key) => {
            if (account?.id === item.Mand) {
                p.push(item);
            }
        });
        setDonHang(p);
    };
    const [khuyenmai, setKM] = useState([]);

    let obj = {
        Tendangnhap: acc?.Tendangnhap,
    };

    useEffect(() => {
        handleCard();
        getKM(obj);
    }, []);

    useEffect (()=>{

    },)
    const getKM = async (obj) => {
        const data = await nguoiDungAPI.nguoidungkhuyenmai(obj);
        setKM(data.data);
    };

    const handleDelete = async (record) => {
        let a = donhang.filter((item) => {
            return item.id !== record.id;
        });
        localStorage.setItem("LISTSP", JSON.stringify(a));
        handleCard();
    };
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "Tensp",
            render: (Tensp) => (
                <Tooltip placement="topLeft" title={Tensp}>
                    <div
                        style={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            width: "300px",
                        }}
                    >
                        {Tensp}
                    </div>
                </Tooltip>
            ),
        },
        {
            title: "Đơn giá",
            dataIndex: "Dongia",
            align: "center",
            width: "100px",
        },
        {
            title: "Số lượng",
            dataIndex: "Soluong",
            align: "center",
            width: "100px",
        },
        {
            title: "Thành tiền",
            dataIndex: "Thanhtien",
            align: "center",
            width: "150px",
        },
        {
            title: "Xóa",
            dataIndex: "",
            align: "center",
            width: "100px",
            render: (record) => (
                <Popconfirm title="Bạn có muốn xóa?" onConfirm={() => handleDelete(record)}>
                    <Button className="bg-light">
                        <FontAwesomeIcon icon={faTrashAlt} className="text-dark" />
                    </Button>
                </Popconfirm>
            ),
        },
    ];

    //THONG TIN GIO HANG:
    // const [tongtien, setTongTien] = useState(0);
    // donhang.map((value, index) => {
    //     tongtien = tongtien + value.Thanhtien;
    //     console.log(tongtien);
    // });

    return (
        <>
            <div className="container-fluid pt-5">
                <form action="" method="">
                    <div className="row px-xl-5">
                        <div className="col-lg-8 table-responsive mb-5">
                            <Table dataSource={donhang} columns={columns} pagination={false} />
                            <div className="card my-3">
                                <div
                                    className="card-header text-white border-0"
                                    style={{ backgroundColor: "#0F62F9" }}
                                >
                                    <h5 className="font-weight-semi-bold m-0">
                                        THÔNG TIN ĐẶT HÀNG
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <Form onFinish={() => {}}>
                                        {!acc ? (
                                            <>
                                                <Form.Item label="Tên khách hàng">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="Số điện thoại">
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item
                                                    className="w-30"
                                                    name="Thanhpho"
                                                    label="Thành phố/tỉnh"
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
                                                            value: item.name,
                                                            label: item.name,
                                                            id: item.code,
                                                        }))}
                                                    />
                                                </Form.Item>
                                                <Form.Item
                                                    className="w-33"
                                                    name="Quan"
                                                    label="Quận/huyện"
                                                >
                                                    <Select
                                                        className="w-100"
                                                        showSearch
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
                                                <Form.Item
                                                    className="w-33"
                                                    name="Phuong"
                                                    label="Phường/xã"
                                                >
                                                    <Select
                                                        className="m-1 w-100"
                                                        showSearch
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
                                            </>
                                        ) : (
                                            ""
                                        )}
                                        <Form.Item label="Số nhà">
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="Ghi chú">
                                            <Input />
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-5">
                                <div
                                    className="card-header text-white border-0"
                                    style={{ backgroundColor: "#0F62F9" }}
                                >
                                    <h5 className="font-weight-semi-bold m-0">Mã Khuyến Mãi</h5>
                                </div>
                                <div className="card-body">
                                    <Radio.Group onChange={handleChange} value={value}>
                                        <Space direction="vertical">
                                            {khuyenmai.map((values) => (
                                                <Radio value={values.id}>{values.Tenkm}</Radio>
                                            ))}
                                        </Space>
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className="card mb-5">
                                <div
                                    className="card-header text-white border-0"
                                    style={{ backgroundColor: "#0F62F9" }}
                                >
                                    <h5 className="font-weight-semi-bold m-0">
                                        Phương thức thanh toán
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <Radio.Group onChange={handleChange} value={value}>
                                        <Space direction="vertical">
                                            <Radio value={0}>Thanh toán bằng tiền mặt</Radio>
                                            <Radio value={1}>Thanh toán bằng chuyển khoản</Radio>
                                        </Space>
                                    </Radio.Group>
                                    <p
                                        style={{
                                            fontStyle: "italic",
                                            color: "#B2B2B2",
                                            fontSize: "12px",
                                            marginTop: "3%",
                                        }}
                                    >
                                        Các phương thức thanh toán được áp dụng khi nhận hàng thành
                                        công (*)
                                    </p>
                                </div>
                            </div>
                            <div className="card border-secondary mb-5 mt-5">
                                <div
                                    className="card-header text-white border-0"
                                    style={{ backgroundColor: "#0644b5" }}
                                >
                                    <h5 className="font-weight-semi-bold m-0">
                                        Thông Tin Giỏ Hàng
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-3 pt-1">
                                        <h6 className="font-weight-medium">Thành tiền sản phẩm</h6>
                                        <h6 className="font-weight-medium">123123</h6>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-medium">Chiết khấu</h6>
                                        <h6 className="font-weight-medium">123123</h6>
                                    </div>
                                </div>
                                <div className="card-footer border-secondary bg-transparent">
                                    <div className="d-flex justify-content-between mt-2">
                                        <h5 className="font-weight-bold">TỔNG TIỀN</h5>
                                        <h5 className="font-weight-bold text-danger">1231121</h5>
                                    </div>
                                    <button
                                        type="submit"
                                        name="btn-next-to-checkout"
                                        className="btn btn-block btn-primary my-3 py-3 text-white font-weight-bold"
                                    >
                                        TIẾP TỤC
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CartShopping;
