import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import "../../pages/HomePage/HomePage.scss";
import { useSelector } from "react-redux";

function LayoutPageMain({children}) {
    const { menu } = useSelector((state) => state.menu);
    return (
        <>
            <div className="d-flex bg-home ">
                <div className={menu ? "click d-none" : "position-menu"}>
                    <MenuBar />
                </div>
                <div className="w-100">
                    <Header />
                    {children}
                </div>
            </div>
        </>
    );
}

export default LayoutPageMain;