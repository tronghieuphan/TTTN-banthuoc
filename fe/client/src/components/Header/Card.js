import Button from "react-bootstrap/Button";
import { BsCartDashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
function Card() {
    // let list = JSON.parse(localStorage.getItem("LISTSP"));

    return (
        <>
            <Button variant="primary" className="col-10 d-block m-auto ">
                <div className="d-flex justify-content-center align-items-center p-1">
                    <div className="col-7 fw-bold">
                        <Link to="/shopping" style={{ textDecoration: "none", color: "#fff" }}>
                            Giỏ hàng
                        </Link>
                    </div>
                    <div className="col-5 ">
                        {/* <Badge count={list.length}> */}
                        <BsCartDashFill size={40} style={{ color: "#fff" }} />
                        {/* </Badge> */}
                    </div>
                </div>
            </Button>
        </>
    );
}
export default Card;
