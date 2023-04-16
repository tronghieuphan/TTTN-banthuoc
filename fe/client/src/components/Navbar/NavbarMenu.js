import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown, message, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.scss";
import { useState, useEffect } from "react";
import loaiSanPhamAPI from "../../services/loaisanphamAPI";

function NavbarMenu() {
    const [tpcn, setTPCN] = useState([]);
    const [dmp, setDMP] = useState([]);
    const [t, setT] = useState([]);
    const [ttbyt, setTBYT] = useState([]);
    const [cscn, setCSCN] = useState([]);
    const navigate = useNavigate();

    const getLoaiSP = async () => {
        const data = await loaiSanPhamAPI.getLoaiByCSCN();
        setCSCN(data.data);
        const data1 = await loaiSanPhamAPI.getLoaiByT();
        setT(data1.data);
        const data2 = await loaiSanPhamAPI.getLoaiByDMP();
        setDMP(data2.data);
        const data3 = await loaiSanPhamAPI.getLoaiByTBIT();
        setTBYT(data3.data);
        const data4 = await loaiSanPhamAPI.getLoaiByTPCN();
        setTPCN(data4.data);
    };
    useEffect(() => {
        getLoaiSP();
    }, []);
    const arraytpcn = [];
    const arrayt = [];
    const arraydmp = [];
    const arraycscn = [];
    const arraytbit = [];
    tpcn.map((value) => arraytpcn.push({ key: value.id, label: value.Tenloai }));
    dmp.map((value) => arraydmp.push({ key: value.id, label: value.Tenloai }));
    t.map((value) => arrayt.push({ key: value.id, label: value.Tenloai }));
    ttbyt.map((value) => arraytbit.push({ key: value.id, label: value.Tenloai }));
    cscn.map((value) => arraycscn.push({ key: value.id, label: value.Tenloai }));
    const onClick = ({ key }) => {
        localStorage.setItem("MALOAI", JSON.stringify(key));
        navigate("/list-cart");
    };
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#0644B5" }}>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="row w-100 text-center fw-bold link">
                        <Nav className="me-auto ">
                            <Dropdown
                                className="col"
                                arrow
                                autoAdjustOverflow
                                menu={{
                                    items: arraytpcn,
                                    onClick,
                                }}
                            >
                                <Link onClick={(e) => console.log(e)}>
                                    <Space>THỰC PHẨM CHỨC NĂNG</Space>
                                </Link>
                            </Dropdown>
                            <Dropdown
                                className="col"
                                menu={{
                                    items: arraydmp,
                                    onClick,
                                }}
                            >
                                <a onClick={(e) => console.log(e)}>
                                    <Link to="/product-details">
                                        <Space>DƯỢC MỸ PHẨM</Space>
                                    </Link>
                                </a>
                            </Dropdown>
                            <Dropdown
                                className="col"
                                menu={{
                                    items: arraycscn,
                                    onClick,
                                }}
                            >
                                <a onClick={(e) => console.log(e)}>
                                    <Link to="/product-details">
                                        <Space>CHĂM SÓC CÁ NHÂN</Space>
                                    </Link>
                                </a>
                            </Dropdown>
                            <Dropdown
                                className="col"
                                menu={{
                                    items: arrayt,
                                    onClick,
                                }}
                            >
                                <a onClick={(e) => console.log(e)}>
                                    <Link to="/product-details">
                                        <Space>THUỐC</Space>
                                    </Link>
                                </a>
                            </Dropdown>{" "}
                            <Dropdown
                                className="col"
                                menu={{
                                    items: arraytbit,
                                    onClick,
                                }}
                            >
                                <a onClick={(e) => console.log(e)}>
                                    <Link to="/product-details">
                                        <Space>THIẾT BỊ Y TẾ</Space>
                                    </Link>
                                </a>
                            </Dropdown>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMenu;
