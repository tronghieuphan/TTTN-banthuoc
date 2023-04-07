import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { TbNotes } from "react-icons/tb";
function CheckOrder() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="d-flex justify-content-center ">
                <Button variant="primary" onClick={handleShow} className="col-11">
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
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Kiểm tra đơn hàng</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Vui lòng nhập số điện thoại</Form.Label>
                                <Form.Control type="tel" placeholder="0123456789" autoFocus />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Đóng
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Kiểm tra
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default CheckOrder;
