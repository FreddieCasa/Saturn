import Card from 'react-bootstrap/Card';
import "./Product.css";

const Product = ({image, title, description, price, quantity, category}) => {

    return (
        <>        
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img className="shirtImage" src={image}  />
                <Card.Title> {title} </Card.Title>
                <Card.Text> {description} </Card.Text>
                <Card.Text> {price} </Card.Text>
                <Card.Text> {quantity} </Card.Text> 
                <Card.Text> {category} </Card.Text>                        
            </Card.Body>
            </Card>          
        </> 
    )
}

export default Product;