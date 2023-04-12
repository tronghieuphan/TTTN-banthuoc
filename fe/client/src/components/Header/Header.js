import logo from "../../assets/image/logo.png";
import SearchInput from "../Search/Search";
import CheckOrder from "./CheckOrder";
import Card from "./Card";
import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../slices/userSlice";
function Header() {
    const { account } = useSelector((state) => state.user);
    const setAccountLS = JSON.parse(localStorage.getItem("ACCOUNT"));
    console.log(">>>", setAccountLS);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("ACCOUNT");
        navigate("/");
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center p-3 bg-header">
                    <div className="col-md-3">
                        <img
                            src={logo}
                            alt=""
                            className="rounded mx-auto d-block"
                            style={{ width: "300px", height: "100px" }}
                        />
                    </div>
                    <div className="col-md-4 text-right">
                        <SearchInput />
                    </div>
                    <div className="col-md-5 text-right">
                        <div className="row align-items-center">
                            <div className="col">
                                <CheckOrder />
                            </div>
                            <div className="col">
                                <Card />
                            </div>
                            {setAccountLS ? (
                                <div className="col">
                                    <div className="col-10">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                                Xin chào {setAccountLS.Ten}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <Link
                                                        to="/profile"
                                                        style={{ textDecoration: "none" }}
                                                    >
                                                        Profile
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <Link
                                                        to="/"
                                                        onClick={handleLogout}
                                                        style={{ textDecoration: "none" }}
                                                    >
                                                        Logout
                                                    </Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            ) : (
                                <div className="col ">
                                    <Link to="/login">
                                        <Button
                                            variant="outline-light"
                                            className="col-10 bg-btn-login"
                                        >
                                            <div className="col-7 fw-bold w-100 d-block m-auto py-3 ">
                                                Đăng nhập
                                            </div>
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
