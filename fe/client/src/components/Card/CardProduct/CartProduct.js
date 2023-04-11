import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardProduce(props) {
    let mang=props.produce;
  return (
    <Card style={{ width: '14rem' } } className="p-3 m-3">
      <Card.Img variant="top" src={mang.img} />
      <Card.Body>
        <Card.Title>{mang.title}</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Link to="/produce-detail"><Button variant="primary">Mua ngay</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default CardProduce;