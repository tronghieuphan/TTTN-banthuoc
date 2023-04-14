import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Form, Input, Select, Radio, Space } from "antd";
import { useState, useEffect } from "react";
import addressAPI from "../../services/addressAPI";

function CartShopping() {
    const account = JSON.parse(localStorage.getItem("ACCOUNT"));
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
    const productList = [
        {
            url: "12222",
            product_name: "hkh",
        },
        {
            url: "12222",
            product_name: "hkh",
        },
        {
            url: "12222",
            product_name: "hkh",
        },
        {
            url: "12222",
            product_name: "hkh",
        },
        {
            url: "12222",
            product_name: "hkh",
        },
        {
            url: "12222",
            product_name: "hkh",
        },
    ];

    const discountList = [
        {
            discount_id: "12222",
            discount_title: "hkh",
        },
        {
            discount_id: "12222",
            discount_title: "hkh",
        },
        {
            discount_id: "12222",
            discount_title: "hkh",
        },
        {
            discount_id: "12222",
            discount_title: "hkh",
        },
        {
            discount_id: "12222",
            discount_title: "hkh",
        },
        {
            discount_id: "12222",
            discount_title: "hkh",
        },
    ];

    return (
        <>
            <div className="container-fluid pt-5">
                <form action="" method="">
                    <div className="row px-xl-5">
                        <div className="col-lg-8 table-responsive mb-5">
                            <table className="table table-bordered text-center mb-0">
                                <thead
                                    className="text-white"
                                    style={{ backgroundColor: "#0F62F9" }}
                                >
                                    <tr>
                                        <th>Tên sản phẩm</th>
                                        <th>Đơn giá</th>
                                        <th>Số lượng</th>
                                        <th>Thành tiền</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    {productList.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <td style={{ textAlign: "left" }}>
                                                    <div className="d-flex">
                                                        <img
                                                            src={product.url}
                                                            alt=""
                                                            style={{
                                                                width: "50px",
                                                                marginRight: "15px",
                                                            }}
                                                        />
                                                        <p>{product.product_name}</p>
                                                    </div>
                                                </td>
                                                <td className="align-middle">123</td>
                                                <td className="align-middle">
                                                    <div
                                                        className="input-group quantity mx-auto"
                                                        style={{ width: "100px" }}
                                                    >
                                                        <div className="input-group-btn">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-primary btn-minus"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faMinus}
                                                                    className="text-white"
                                                                />
                                                            </button>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            readOnly
                                                            className="form-control form-control-sm bg-white border-0 text-center"
                                                            name="txt-quantity"
                                                            value={product.quantity}
                                                        />
                                                        <div className="input-group-btn">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-primary btn-plus"
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={faPlus}
                                                                    className="text-white"
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle">123</td>
                                                <td className="align-middle">
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-primary btn-delete"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faTimes}
                                                            className="text-white"
                                                        />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
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
                                        {!account ? (
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
                                    {discountList.map((discount, index) => {
                                        return (
                                            <div
                                                className="form-check mb-3"
                                                key={discount.discount_id}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    value="111"
                                                    id="123"
                                                    name="rdo-discount"
                                                />
                                                <label className="form-check-label" htmlFor="hhh">
                                                    {discount.title}
                                                </label>
                                            </div>
                                        );
                                    })}
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
