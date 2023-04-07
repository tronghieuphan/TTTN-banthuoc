import Content from "../pages/HomePage/Content";
import NhacungcapList from "../pages/Nhacungcap/NhacungcapList";
import NhacungcapDetail from "../pages/Nhacungcap/NhacungcapDetail";
import DanhmucList from "../pages/Danhmuc/DanhmucList";
import XuatxuList from "../pages/Xuatxu/XuatxuList";
import LoginPage from "../pages/FormLogin/LoginPage";

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
        path: '/xuatxu-list',
        page: XuatxuList,
        isMainLayout: true
    },
    
]

export default PageWeb