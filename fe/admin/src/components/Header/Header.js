import AvatarMenu from "../Avatar/Avatar";
import "./Header.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { open, hide } from "../../slices/menuSlice";
function Header() {
    const dispatch = useDispatch();
    const {account}= useSelector((state)=>state.user)
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
        if (collapsed) {
            dispatch(hide());
        } else {
            dispatch(open());
        }
    };
    return (
        <>
            <div className="h-10 bg-white m-3 d-flex justify-content-between">
                <Button type="primary" onClick={toggleCollapsed} className="mt-3 mx-2">
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <div className="p-3">
                   <AvatarMenu account={account} />
                </div>
            </div>
        </>
    );
}

export default Header;
