import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardProduceDiscount(props) {
    let mang = props.produce;
    return (
        <Card style={{ width: "16rem" }} className="p-3 m-3">
            <Card.Img variant="top" src={mang.img} />
            <Card.Body>
                <Card.Title>{mang.title}</Card.Title>
                <Card.Text>{mang.title}</Card.Text>
                <div className="fs-6 fst-italic">Giá khuyến mãi:</div>
                <div
                    className="text-center"
                    style={{ backgroundColor: "rgb(255, 118, 118)", color: "yellow" }}
                >
                    12540000
                </div>
                <div
                    style={{ fontSize: "15px", fontStyle: "italic", color: "GrayText" }}
                    className="text-decoration-line-through text-center"
                >
                    Giá gốc: 12000140
                </div>

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
