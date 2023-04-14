import "./Check.scss";
import { useState } from "react";
import { Table } from "antd";
function Check() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
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
    const dataSource = [
        {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street",
        },
    ];

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
    ];

    return (
        <>
            <div className="container-fluid pt-2">
                <div className="row">
                    {!show ? (
                        <div className="col-md-5 d-flex justify-content-center">
                            <img src="https://i.imgur.com/MtA2fdc.png" width={400} alt="" />
                        </div>
                    ) : (
                        <div className="col-md-6 text-center d-block my-auto ">
                            <Table dataSource={dataSource} columns={columns} />;
                        </div>
                    )}
                    <div className="col">
                        <div
                            style={{ width: "10rem" }}
                            className="m-3 bordercard"
                            onClick={handleShow}
                        >
                            <img
                                variant="top"
                                src="https://i.imgur.com/u87HruQ.png"
                                className="w-100"
                            />

                            <div>
                                <div className="title">Mã đơn đặt hàng</div>
                            </div>

                            <div className="price1">
                                <span>150.000</span>
                            </div>
                            <div className="state d-block mx-auto">Trạng thái</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Check;
