import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProduce(props) {
    let mang=props.produce;
  return (
    <Card style={{ width: '12rem' } } className="p-3 m-3">
      <Card.Img variant="top" src={mang.img} />
      <Card.Body>
        <Card.Title>{mang.title}</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary">Mua ngay</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduce;