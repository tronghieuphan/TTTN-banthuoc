import Content from "../pages/HomePage/Content";
import NhacungcapList from "../pages/Nhacungcap/NhacungcapList";
import NhacungcapDetail from "../pages/Nhacungcap/NhacungcapDetail";
import DanhmucList from "../pages/Danhmuc/DanhmucList";
import XuatxuList from "../pages/Xuatxu/XuatxuList";
import LoginPage from "../pages/FormLogin/LoginPage";
import NguoidungList from "../pages/Nguoidung/NguoidungList";
import NguoidungDetail from "../pages/Nguoidung/NguoidungDetail";
import KhuyenmaiList from "../pages/Khuyenmai/KhuyenmaiList";
import LoaisanphamList from "../pages/Loaisanpham/LoaisanphamList";


const PageWeb = [
    {
        path: '/',
        page: LoginPage
    },
    {
        path: '/home',
        page: Content,
        isMainLayout: true
    },
    {
        path: '/nhacungcap-list',
        page: NhacungcapList,
        isMainLayout: true
    },
    {
        path: '/nhacungcap-detail',
        page: NhacungcapDetail,
        isMainLayout: true
    },
    {
        path: '/danhmuc-list',
        page: DanhmucList,
        isMainLayout: true
    },
    {
        path: '/loaisanpham-list',
        page: LoaisanphamList,
        isMainLayout: true
    },
    {
        path: '/xuatxu-list',
        page: XuatxuList,
        isMainLayout: true
    },
    {
        path: '/khuyenmai-list',
        page: KhuyenmaiList,
        isMainLayout: true
    },
    {
        path: '/nguoidung-list',
        page: NguoidungList,
        isMainLayout: true
    },
    {
        path: '/nguoidung-detail',
        page: NguoidungDetail,
        isMainLayout: true
    },
    
]

export default PageWeb