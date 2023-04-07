import "./MenuBar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { Image } from "antd";
import { useSelector } from "react-redux";

function MenuBar() {
    const { menu } = useSelector((state) => state.menu);

    return (
        <>
            <div className={menu ? "click" : "position-menu bg-menu"}>
                <div className="p-2  ">
                    <div className="m-2 p-3 bg-logo d-flex justify-content-center">
                        <Image width="80%" src={logo} />
                    </div>
                </div>
                <hr className="w-75 d-block mx-auto" />
                <div className="w-100 p-3 bg">
                    <NavLink className="w-85 d-block fw-bold fs-5" to="/" acticveClassName="active">
                        Trang chủ
                    </NavLink>
                    <NavLink className="w-85 d-block fw-bold fs-5" to="/nguoidung">
                        Quản lý người dùng
                    </NavLink>
                    <NavLink className="w-85 d-block fw-bold fs-5" to="/sanpham">
                        Quản lý sản phẩm
                    </NavLink>
                    <NavLink className="w-85 d-block fw-bold fs-5" to="/hinhanh">
                        Quản lý hình ảnh
                    </NavLink>
                    <NavLink className="w-85 d-block fw-bold fs-5" to="/dondathang">
                        Quản lý đơn đặt hàng
                    </NavLink>
                    <NavLink className="w-85 d-block fw-bold fs-5" to="/loaisanpham">
                        Quản lý loại sản phẩm
                    </NavLink>
                    <NavLink className="w-85 d-block fw-bold fs-5" to="/xuatxu">
                        Quản lý xuất xứ
                    </NavLink>
                    <NavLink className="w-85 d-block fw-bold fs-5" to="/thuonghieu">
                        Quản lý thương hiệu
                    </NavLink>
                    <NavLink className="w-85 d-block fw-bold fs-5" to="/danhmuc">
                        Quản lý danh mục
                    </NavLink>
                    <NavLink className="w-85 d-block fw-bold fs-5" to="/nhacungcap">
                        Quản lý nhà cung cấp
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default MenuBar;
