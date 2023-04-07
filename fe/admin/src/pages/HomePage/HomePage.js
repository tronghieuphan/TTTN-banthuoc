import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import "./HomePage.scss";
import { useSelector } from "react-redux";
import Content from "./Content";
import NhacungcapList from "../Nhacungcap/NhacungcapList";
import NhacungcapDetail from "../Nhacungcap/NhacungcapDetail";
import DanhmucList from "../Danhmuc/DanhmucList";
import XuatxuList from "../Xuatxu/XuatxuList";
import DondathangList from "../Dondathang/DondathangList";

function HomePage() {
    const { menu } = useSelector((state) => state.menu);
    return (
        <>
            <div className="d-flex bg-home ">
                <div className={menu ? "click d-none" : "position-menu"}>
                    <MenuBar />
                </div>
                <div className="w-100">
                    <Header />
                    {/* <Content /> */}
                    {/* <NhacungcapList /> */}
                    {/* <NhacungcapDetail /> */}
                    <DanhmucList />
                    {/* <XuatxuList />
                    <DondathangList /> */}
                </div>
            </div>
        </>
    );
}

export default HomePage;
