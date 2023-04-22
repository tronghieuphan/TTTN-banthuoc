import logo from "../../assets/image/logo.png";
import SearchInput from "../Search/Search";
import CheckOrder from "./CheckOrder";
import Card from "./Card";
import { Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useState, useEffect } from "react";
import { logout } from "../../slices/userSlice";
// import sanPhamAPI from "../../services/sanPhamAPI";
function Header() {
    // const { account } = useSelector((state) => state.user);
    const setAccountLS = JSON.parse(localStorage.getItem("ACCOUNT"));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const getAllSp = async () => {
    //     try {
    //         setLoading(true);
    //         const response = await sanPhamAPI.getAll();
    //         setList(response.data);
    //         setLoading(false);
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    // };

    // useEffect(() => {
    //     getAllSp();
    // }, []);
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
                        <Link to="/">
                            <img
                                src={logo}
                                alt=""
                                className="rounded mx-auto d-block"
                                style={{ width: "300px", height: "100px" }}
                            />
                        </Link>
                    </div>
                    <div className="col-md-4 text-right">
                        <SearchInput placeholder="Tìm kiếm..." />
                    </div>
                    <div className="col-md-5 text-right">
                        <div className="row align-items-center">
                            <div className="col">{setAccountLS?.id ? <CheckOrder /> : ""}</div>

                            <div className="col">
                                {setAccountLS?.id ? (
                                    <Link to="/shopping" style={{ textDecoration: "none" }}>
                                        <Card />
                                    </Link>
                                ) : (
                                    ""
                                )}
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
                                                        to="/user-details"
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
