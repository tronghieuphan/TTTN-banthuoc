import Card from "react-bootstrap/Card";
function CardCate(props) {
    const mang = props.cartcategory;
    return (
        
        <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" className="p-3" src={mang.img}/>
            <Card.Body>
                <Card.Title className="text-center">{mang.title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default CardCate;
