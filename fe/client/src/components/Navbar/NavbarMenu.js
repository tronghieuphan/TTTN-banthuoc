// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link, NavLink } from "react-router-dom";
// import "./Nav.scss";
// import { useState, useEffect } from "react";
// import loaiSanPhamAPI from "../../services/loaisanphamAPI";
// function NavbarMenu() {
//     return (
//         <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#0644B5" }}>
//             <Container>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <div className="row w-100 text-center fw-bold">
//                         <Nav className="me-auto link">
//                             <Link className="col">CHĂM SÓC CÁ NHÂN</Link>
//                             <Link className="col">THỰC PHẨM CHỨC NĂNG</Link>
//                             <Link className="col">DƯỢC MỸ PHẨM</Link>
//                             <Link className="col">THUỐC</Link>
//                             <Link className="col">THIẾT BỊ Y TẾ</Link>
//                         </Nav>
//                     </div>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default NavbarMenu;

// import { useState, useEffect } from "react";
// import danhMucAPI from "../../services/danhMucAPI";
// import loaiSanPhamAPI from "../../services/loaisanphamAPI";
// import MenuItems from "./MenuItems";
// import { menuItems } from "../../menuItems";

// const NavbarMenu = () => {
//   const [listDm, setList1] = useState([]);
//   //const dispatch1 = useDispatch();
//   const [loading1, setLoading1] = useState(false);
//   const getAllDm = async () => {
//     try {
//       setLoading1(true);
//       const response = await danhMucAPI.getAll();
//       setList1(response.data);
//       setLoading1(false);
//     } catch (err) {
//       throw new Error(err);
//     }
//   };

//   const [listDm, setList1] = useState([]);
//   const getAll = async () => {
//       const data = await danhMucAPI.getAll();
//       setList1(data.data);
//   };

  // const [listLoaisanpham, setList2] = useState([]);
  //   //const dispatch2 = useDispatch();
  //   const [loading2, setLoading2] = useState(false);
  //   const getAllLoaiSanPham = async () => {
  //       try {
  //           setLoading2(true);
  //           const response = await loaiSanPhamAPI.getAll();
  //           setList2(response.data);
  //           setLoading2(false);
  //       } catch (err) {
  //           throw new Error(err);
  //       }
  //   };
  // useEffect(() => {
  //   getAll();
  //   getAllLoaiSanPham();
  // }, []);

//   const menuItems = [
//     {
//       title: "Tên danh mục",
//       dataIndex: "Tendm",
//       submenu: [
//         {
//         title: "Tên loại",
//         dataIndex: "Tenloai",
//       }],
//     },
//   ];

//   return (
//     <nav>
//         <ul className="menus">
//             {
//                 menuItems.map((menu, index) => {
//                     const depthLevel = 0;
//                     return <MenuItems items = {menu} key = {index} depthLevel = {depthLevel} />
//                 })
//             }
//         </ul>
//     </nav>

    
//   )
// }
// export default NavbarMenu;


import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown, message, Space } from "antd";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { useState, useEffect } from "react";
import danhMucAPI from "../../services/danhMucAPI";
import loaiSanPhamAPI from "../../services/loaisanphamAPI";

function NavbarMenu() {
    const [tpcn, setTPCN] = useState([]);
    const [dmp, setDMP] = useState([]);
    const [t, setT] = useState([]);
    const [ttbyt, setTBYT] = useState([]);
    const [cscn, setCSCN] = useState([]);

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
        message.info(`Click on item ${key}`);
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
