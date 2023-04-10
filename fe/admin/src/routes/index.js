import Content from "../pages/HomePage/Content";
import NhacungcapList from "../pages/Nhacungcap/NhacungcapList";
import NhacungcapDetail from "../pages/Nhacungcap/NhacungcapDetail";
import DanhmucList from "../pages/Danhmuc/DanhmucList";
import XuatxuList from "../pages/Xuatxu/XuatxuList";
import Thuonghieulist from "../pages/Thuonghieu/ThuonghieuList";
import SanphamList from "../pages/SanPham/SanphamList";
import HinhanhList from "../pages/Hinhanh/HinhanhList";
import LoginPage from "../pages/FormLogin/LoginPage";
import NguoidungList from "../pages/Nguoidung/NguoidungList";
import NguoidungDetail from "../pages/Nguoidung/NguoidungDetail";
import SanphamDetail from "../pages/SanPham/SanphamDetail";

const PageWeb = [
    {
        path: "/",
        page: LoginPage,
    },
    {
        path: "/home",
        page: Content,
        isMainLayout: true,
    },
    {
        path: "/nhacungcap-list",
        page: NhacungcapList,
        isMainLayout: true,
    },
    {
        path: "/nhacungcap-detail",
        page: NhacungcapDetail,
        isMainLayout: true,
    },
    {
        path: "/danhmuc-list",
        page: DanhmucList,
        isMainLayout: true,
    },
    {
        path: "/xuatxu-list",
        page: XuatxuList,
        isMainLayout: true,
    },
    {
        path: "/nguoidung-list",
        page: NguoidungList,
        isMainLayout: true,
    },
    {
        path: "/nguoidung-detail",
        page: NguoidungDetail,
        isMainLayout: true,
    },
    {
        path: "/thuonghieu-list",
        page: Thuonghieulist,
        isMainLayout: true,
    },
    {
        path: "/sanpham-list",
        page: SanphamList,
        isMainLayout: true,
    },
    {
        path: "/hinhanh-list",
        page: HinhanhList,
        isMainLayout: true,
    },
    {
        path: "/sanpham-detail",
        page: SanphamDetail,
        isMainLayout: true,
    },
];

export default PageWeb;
