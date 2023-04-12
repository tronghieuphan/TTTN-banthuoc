import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
function CardProduce(props) {
    let mang = props.produce;
    console.log("mang: ", mang);
    const text = <span>{mang.Tensp}</span>;

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
                                {mang.Tensp}
                            </div>
                        </Tooltip>
                    </div>
                </Card.Text>
                <div style={{ fontSize: "17px", fontStyle: "italic", color: "GrayText" }}>
                    Giá:<span>{mang.Dongia}</span>
                    <br />
                    <span style={{ fontSize: "13px" }}>{mang.Quycach}</span>
                </div>
                <Link to="/produce-detail">
                    <div className="text-center">
                    <Button variant="primary" onClick={[]}>
                        Mua ngay
                    </Button></div>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default CardProduce;
