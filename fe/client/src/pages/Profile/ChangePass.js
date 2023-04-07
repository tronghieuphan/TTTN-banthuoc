import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ChangePassword() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                className="mt-4 w-100 p-2 fs-5 fw-bold m-3 "
                variant="contained"
                onClick={handleShow}
                style={{ backgroundColor: " #1976d2", color: "#fff" }}
            > Đổi mật khẩu</Button>
            <form action="" method="">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Đổi mật khẩu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nhập mật khẩu cũ</Form.Label>
                            <Form.Control type="password" autoFocus />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nhập mật khẩu mới</Form.Label>
                            <Form.Control type="password"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Nhập lại mật khẩu mới</Form.Label>
                            <Form.Control type="password"  />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleClose}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal></form>
        </>
    );
}

export default ChangePassword;
