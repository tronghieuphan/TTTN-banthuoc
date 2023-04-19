import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faTruckDroplet } from "@fortawesome/free-solid-svg-icons";
import { Form, Input, Select, Radio, Space, Table, Button, Popconfirm, Tooltip } from "antd";
import { useState, useEffect } from "react";
import addressAPI from "../../services/addressAPI";
import "./style.scss";
import nguoiDungAPI from "../../services/nguoiDungAPI";
import khuyenMaiAPI from "../../services/khuyenMaiAPI";
import { toast } from "react-toastify";
import donDatHangAPI from "../../services/donDatHang";
import { useNavigate } from "react-router-dom";

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
    const [valuekhuyenmai, setValueKM] = useState(1);
    const [valuethanhtoan, setValueTT] = useState(1);
    const [makhuyenmai, setMaKM] = useState("");
    const [chitietkhuyenmai, setChiTietKM] = useState({});
    const [chitietthanhtoan, setChiTietTT] = useState("");

    const handleChangeKM = (e) => {
        console.log("radio checked", e.target.value);
        setValueKM(e.target.value);
        setMaKM(e.target.value);
    };
    const handleChangeTT = (e) => {
        console.log("radio checked", e.target.value);
        setValueTT(e.target.value);
        setChiTietTT(e.target.value);
    };
    //LOAD DANH SÁCH

    const acc = JSON.parse(localStorage.getItem("ACCOUNT"));
    //
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
    // biến truyền vào cho get api khuyến mãi
    let obj = {
        Tendangnhap: acc?.Tendangnhap,
    };
    let objkm = {
        id: makhuyenmai,
    };

    // Get api khuyen mãi
    const getKM = async (obj) => {
        const data = await nguoiDungAPI.nguoidungkhuyenmai(obj);
        console.log("data: ", data);
        setKM(data.data);
    };
    //get api chi tiét khuyến mãi
    const getKMID = async (obj) => {
        const data = await khuyenMaiAPI.getKhuyenMai(obj);
        setChiTietKM(data.data);
    };
    useEffect(() => {
        handleCard();
        getKM(obj);
    }, []);

    useEffect(() => {
        getKMID(objkm);
    }, [makhuyenmai]);

    //Xóa sản phẩm
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
            title: "Giá gốc",
            dataIndex: "Dongia",
            align: "center",
            width: "100px",
        },
        ,
        {
            title: "Giá ưu đãi",
            dataIndex: "Giakm",
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
            width: "100px",
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

    const handleSubmit = async (e) => {
        let today = new Date();
        let obj = {
            Ngaydathang: today,
            Tongtien: tongtien,
            Pttt: chitietthanhtoan,
            Sdt: e.Sdt,
            Phuong: e.Phuong,
            Quan: e.Quan,
            Sonha: e.Sonha,
            Thanhpho: e.Thanhpho,
            Ghichu: e.Ghichu,
            Mand: acc.id,
            Makm: makhuyenmai,
            ListSP: donhang,
        };
        console.log(obj);
        if (donhang === []) {
            toast.error("Bạn không có sản phẩm trong giỏ hàng!");
        } else if (acc.Thanhpho === null || acc.Phuong === null || acc.Quan === null) {
            toast.error("Vui lòng cập nhập đầy đủ thông tin cá nhân");
        } else if (e.Sonha === undefined || e.Sonha === "") {
            toast.warn("Vui lòng điền thông tin số nhà cụ thể ");
        } else if (chitietthanhtoan === "") {
            toast(" Bạn hãy chọn phương thức thanh toán");
        } else {
            toast.success("Đặt hàng thành công ");
            await donDatHangAPI.create(obj);
            let account = JSON.parse(localStorage.getItem("ACCOUNT"));
            let list = JSON.parse(localStorage.getItem("LISTSP"));
            setDonHang([]);
            navigate("/");
        }
    };
    //THONG TIN GIO HANG: tinh toán tien
    let tong = 0;
    donhang.forEach((item, index) => {
        tong = tong + item.Thanhtien;
    });
    //Khuyen Mãi
    let uudai = 0;
    if (makhuyenmai === "") {
        uudai = 0;
    } else {
        uudai = (tong * chitietkhuyenmai.Phantram) / 100;
    }

    let tongtien = tong - uudai;

    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const handleSuaThongTin = () => {
        setOpen(!open);
    };
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <Table dataSource={donhang} columns={columns} pagination={false} />
                        <div className="card my-3">
                            <div
                                className="card-header text-white border-0"
                                style={{ backgroundColor: "#0F62F9" }}
                            >
                                <h5 className="font-weight-semi-bold m-0">THÔNG TIN ĐẶT HÀNG</h5>
                            </div>
                            <div className="card-body">
                                <Form onFinish={handleSubmit}>
                                    <Form.Item
                                        label="Tên khách hàng"
                                        name="Ten"
                                        initialValue={acc.Ten}
                                    >
                                        <Input disabled={open} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Số điện thoại"
                                        name="Sdt"
                                        initialValue={acc.Sdt}
                                    >
                                        <Input disabled={open} />
                                    </Form.Item>
                                    <Form.Item
                                        className="w-30"
                                        name="Thanhpho"
                                        label="Thành phố/tỉnh"
                                        initialValue={acc.Thanhpho}
                                    >
                                        <Select
                                            className="w-100"
                                            showSearch
                                            style={{
                                                width: 160,
                                            }}
                                            disabled={open}
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
                                        initialValue={acc.Quan}
                                    >
                                        <Select
                                            className="w-100"
                                            showSearch
                                            style={{
                                                width: 400,
                                            }}
                                            disabled={open}
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
                                        initialValue={acc.Phuong}
                                    >
                                        <Select
                                            className="m-1 w-100"
                                            showSearch
                                            style={{
                                                width: 160,
                                            }}
                                            disabled={open}
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

                                    <Form.Item label="Số nhà" name="Sonha">
                                        <Input placeholder="VD: 180 Cao Lỗ,..." />
                                    </Form.Item>
                                    <Form.Item label="Ghi chú" name="Ghichu">
                                        <Input placeholder="Vui lòng ghi chú lại những gì bạn cần với cửa hàng ..." />
                                    </Form.Item>
                                    <div className="d-flex justify-content-center">
                                        <Form.Item className="text-center m-1">
                                            <Button htmlType="submit" type="primary">
                                                MUA HÀNG
                                            </Button>
                                        </Form.Item>
                                        <Form.Item className="text-center m-1">
                                            <Button
                                                type="primary"
                                                onClick={() => handleSuaThongTin()}
                                            >
                                                THAY ĐỔI THÔNG TIN GIAO HÀNG
                                            </Button>
                                        </Form.Item>
                                    </div>
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
                                <Radio.Group onChange={handleChangeKM} value={valuekhuyenmai}>
                                    <Space direction="vertical">
                                        {khuyenmai.map((values) => (
                                            <Radio
                                                value={values.id}
                                                key={values.id}
                                                disabled={tong >= values.Dieukhoan ? false : true}
                                            >
                                                {values.Tenkm}
                                            </Radio>
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
                                <Radio.Group onChange={handleChangeTT} value={valuethanhtoan}>
                                    <Space direction="vertical">
                                        <Radio value={"Tiền mặt"}>Thanh toán bằng tiền mặt</Radio>
                                        <Radio value={"Chuyển khoản"}>
                                            Thanh toán bằng chuyển khoản
                                        </Radio>
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
                                    Các phương thức thanh toán được áp dụng khi nhận hàng thành công
                                    (*)
                                </p>
                            </div>
                        </div>
                        <div className="card border-secondary mb-5 mt-5">
                            <div
                                className="card-header text-white border-0"
                                style={{ backgroundColor: "#0644b5" }}
                            >
                                <h5 className="font-weight-semi-bold m-0">Thông Tin Giỏ Hàng</h5>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3 pt-1">
                                    <h6 className="font-weight-medium">Thành tiền sản phẩm</h6>
                                    <h6 className="font-weight-medium">{tong}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Giảm giá</h6>
                                    <h6 className="font-weight-medium">{uudai}</h6>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">TỔNG TIỀN</h5>
                                    <h5 className="font-weight-bold text-danger">{tongtien}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartShopping;
