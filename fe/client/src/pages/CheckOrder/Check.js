import "./Check.scss";
import { useEffect, useState } from "react";
import { Table, Badge } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import donDatHangAPI from "../../services/donDatHang";
function Check() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleShow = (key) => {
        let id = {
            id: key,
        };
        handleLoadDDH(id);
        setShow(!show);
    };
    const [danhsach, setDanhsach] = useState([]);
    const [chitiet, setChiTiet] = useState([]);
    const { dondathang } = useSelector((state) => state.dondathang);
    console.log("dondathang: ", dondathang);
    const handleLoadDDH = async (obj) => {
        const data = await donDatHangAPI.getChiTiet(obj);
        setChiTiet(data.data);
    };

    useEffect(() => {
        setDanhsach(dondathang);
    }, [dondathang]);

    useEffect(() => {
        if (dondathang === null) {
            navigate("/");
        }
    }, []);
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "Tensp",
        },
        {
            title: "Đơn giá",
            dataIndex: "Dongia",
            render: (Dongia) => (
                <div>
                    {Dongia?.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                    })}
                </div>
            ),
        },
        {
            title: "Giá ưu đãi",
            dataIndex: "Giakm",
            render: (Giakm) => (
                <div>
                    {Giakm?.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                    })}
                </div>
            ),
        },
        {
            title: "Số lượng",
            dataIndex: "Soluong",
        },
        ,
        {
            title: "Thành tiền",
            dataIndex: "Thanhtien",
            render: (Thanhtien) => (
                <div>
                    {Thanhtien?.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                    })}
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="container-fluid pt-2">
                <div className="row">
                    {!show ? (
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src="https://i.imgur.com/MtA2fdc.png" width={400} alt="" />
                        </div>
                    ) : (
                        <div className="col-md-6 text-center d-block my-auto ">
                            <Table dataSource={chitiet} columns={columns} pagination={false} />
                            <div></div>
                        </div>
                    )}
                    <div className="col d-flex flex-wrap">
                        {danhsach?.map((values) => {
                            return (
                                <div key={values.id} className="m-3">
                                    <Badge.Ribbon
                                        text={
                                            "Giảm " +
                                            (values.khuyenMai.Phantram === null
                                                ? 0
                                                : values.khuyenMai.Phantram) +
                                            "%"
                                        }
                                    >
                                        <div
                                            style={{ width: "10rem" }}
                                            className=" bordercard"
                                            onClick={() => handleShow(values.id)}
                                        >
                                            <img
                                                variant="top"
                                                src="https://i.imgur.com/u87HruQ.png"
                                                className="w-100"
                                                alt=""
                                            />
                                            <div>
                                                <div className="title">{values.id}</div>
                                            </div>
                                            <div className="price1">
                                                <span>
                                                    {values?.Tongtien?.toLocaleString("it-IT", {
                                                        style: "currency",
                                                        currency: "VND",
                                                    })}
                                                </span>
                                            </div>
                                            {values.Trangthai === 0 ? (
                                                <div className="state d-block mx-auto">
                                                    Chờ xác nhận
                                                </div>
                                            ) : (
                                                <div className="state1 d-block mx-auto">
                                                    Đã xác nhận
                                                </div>
                                            )}
                                        </div>
                                    </Badge.Ribbon>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Check;
