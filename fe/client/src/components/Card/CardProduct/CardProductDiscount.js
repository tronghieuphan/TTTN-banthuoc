import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
function CardProduceDiscount(props) {
    let mang = props.khuyenmai;
    console.log("mangkhuyenmai: ", mang);
    const text = <span>{mang.Tensp}</span>;

    return (
        <Card style={{ width: "16rem" }} className="p-3 m-3">
            <div style={{ width: "100%", height: "200px", border: "1px solid black" }}>
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
                                {mang.Tensp}
                            </div>
                        </Tooltip>
                    </div>
                </Card.Text>
                <div className="fs-6 fst-italic">Giá khuyến mãi:</div>
                <p
                    className="text-center m-2"
                    style={{ backgroundColor: "rgb(255, 118, 118)", color: "yellow" }}
                >
                    {mang.Giakm}
                </p>
                <p
                    style={{ fontSize: "15px", fontStyle: "italic", color: "GrayText" }}
                    className="text-decoration-line-through text-left"
                >
                    Giá gốc: {mang.Dongia}
                </p>
                <p style={{ fontSize: "13px", padding: "auto" }}>{mang.Quycach}</p>

                <Link to="/produce-detail">
                    <Button variant="primary" className="d-block m-auto mt-2">
                        Mua ngay
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default CardProduceDiscount;
