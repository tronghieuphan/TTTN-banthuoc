import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";
import { useState, useEffect } from "react";
import danhMucAPI from "../../services/danhmucAPI";
import loaiSanPhamAPI from "../../services/loaisanphamAPI";
function NavbarMenu() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#0644B5" }}>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="row w-100 text-center fw-bold">
                        <Nav className="me-auto link">
                            <Link className="col">CHĂM SÓC CÁ NHÂN</Link>
                            <Link className="col">THỰC PHẨM CHỨC NĂNG</Link>
                            <Link className="col">DƯỢC MỸ PHẨM</Link>
                            <Link className="col">THUỐC</Link>
                            <Link className="col">THIẾT BỊ Y TẾ</Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMenu;
