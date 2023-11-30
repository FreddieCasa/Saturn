import Card from 'react-bootstrap/Card';
import "./Product.css";

const Product = ({image, title, description, price, quantity}) => {

    return (
        <>        
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img className="shirtImage" src="https://static.massimodutti.net/3/photos//2023/I/0/2/p/0199/880/401/0199880401_1_1_16.jpg?t=1693408767598&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome"  />
                <Card.Title> {title} </Card.Title>
                <Card.Text> {description} </Card.Text>
                <Card.Text> {price} </Card.Text>
                <Card.Text> {quantity} </Card.Text>                
            </Card.Body>
            </Card>          
        </> 
    )
}

export default Product;