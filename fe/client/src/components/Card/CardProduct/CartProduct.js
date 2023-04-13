import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { setDataSP } from "../../../slices/sanphamSlice";

function CardProduct(props) {
    let moi = props.moi;
    const text = <span>{moi.Tensp}</span>;
    const dispatch = useDispatch();

    const handleAddStore = (obj) => {
        dispatch(setDataSP(obj));
        localStorage.setItem("SANPHAM", JSON.stringify(obj));
    };
    return (
        <Card style={{ width: "14rem" }} className="p-3 m-3">
            <div style={{ width: "100%", height: "200px", border: "1px solid black" }}>
                {" "}
                <Card.Img variant="top" className="w-100 " />
            </div>
            <Card.Body>
                <Card.Text>
                    <div>
                        <Tooltip placement="top" title={text}>
                            <div
                                style={{
                                    overflow: "hidden",
                                    width: "100%",
                                    height: "60px",
                                    fontSize: "20px",
                                    textAlign: "left",
                                }}
                            >
                                {moi.Tensp}
                            </div>
                        </Tooltip>
                    </div>
                </Card.Text>
                <div style={{ fontSize: "17px", fontStyle: "italic", color: "GrayText" }}>
                    Giá:<span>{moi.Dongia}</span>
                    <br />
                    <span style={{ fontSize: "13px" }}>{moi.Quycach}</span>
                </div>
                <Link to="/product-details">
                    <div className="text-center">
                        <Button variant="primary" onClick={() => handleAddStore(moi)}>
                            Mua ngay
                        </Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default CardProduct;
