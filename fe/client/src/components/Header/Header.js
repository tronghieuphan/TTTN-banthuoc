import logo from "../../assets/image/logo.png";
import SearchInput from "../Search/Search";
import CheckOrder from "./CheckOrder";
import Card from "./Card";
import { Button } from "react-bootstrap";

function Header() {
    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center p-3 bg-header">
                    <div className="col-md-3">
                        <img src={logo} alt="" className="rounded mx-auto d-block" style={{ width: "300px", height: "100px" }} />
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
                            <div className="col ">
                                <Button variant="outline-light" className="col-10 bg-btn-login">
                                    <div className="col-7 fw-bold w-100 d-block m-auto py-3 ">Đăng nhập</div>
                                </Button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
