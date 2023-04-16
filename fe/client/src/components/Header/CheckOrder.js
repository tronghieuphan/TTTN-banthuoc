import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button as Btn } from "react-bootstrap";
import { TbNotes } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { Form, Button, Input } from "antd";
import donDatHangAPI from "../../services/donDatHang";
import { useDispatch, useSelector } from "react-redux";
import { setDataDDH } from "../../slices/dondathangSlice";
function CheckOrder() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    // const [check, setCheck] = useState([]);
    const dispatch = useDispatch();
    const handleFind = async (obj) => {
        const data = await donDatHangAPI.getAllSdt(obj);
        dispatch(setDataDDH(data.data));
    };

    const handleCheck = (e) => {
        handleFind(e.Sdt);
        setShow(false);
        navigate("/check");
    };
    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };
    return (
        <>
            <div className="d-flex justify-content-center ">
                <Btn variant="primary" onClick={handleShow} className="col-11">
                    <div className="d-flex align-items-center">
                        <div className="col-7 fw-bold">
                            Tra cứu
                            <br />
                            đơn hàng
                        </div>
                        <div className="col-5 ">
                            <TbNotes size={40} />
                        </div>
                    </div>
                </Btn>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Kiểm tra đơn hàng</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onFinish={handleCheck}>
                            <Form.Item label="Vui lòng nhập số điện thoại" name="Sdt">
                                <Input />
                            </Form.Item>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Đóng
                                </Button>
                                <Button htmlType="submit" variant="primary">
                                    Kiểm tra
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default CheckOrder;
