import Button from "react-bootstrap/Button";
import { BsCartDashFill } from "react-icons/bs";
function Card() {
    return (
        <>
            <Button variant="primary" className="col-10 d-block m-auto ">
                <div className="d-flex justify-content-center align-items-center p-1">
                    <div className="col-7 fw-bold">Giỏ hàng</div>
                    <div className="col-5 ">
                        <BsCartDashFill size={40} />
                    </div>
                </div>
            </Button>
        </>
    );
}
export default Card;
