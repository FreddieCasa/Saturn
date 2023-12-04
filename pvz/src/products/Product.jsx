import Card from "react-bootstrap/Card";
import "./Product.css";
import Badge from "react-bootstrap/Badge";

const Product = ({ product, setShowModal, setCurrentProduct }) => {
  // const { image, title, description, price, quantity, category, isOnSale } =
  //   product;

  const { brand, description, price, stock} = product;




  const handleClick = (event) => {
    console.log(event);
    setShowModal(true);
    setCurrentProduct(product);
  };

  return (
    <div>
      <button onClick={(event) => handleClick(event)}>PRESS</button>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          {/* {isOnSale && (
            <Badge className="myBadge" bg="danger">
              on sale
            </Badge>
          )} */}
          {/* <Card.Img className="shirtImage" src="" /> */}
          <Card.Title> <h3> {brand} </h3> </Card.Title>
          <Card.Text>description: {description} </Card.Text>
          <Card.Text>price: {price} </Card.Text>
          <Card.Text>stock: {stock} </Card.Text>
          {/* <Card.Text> {category} </Card.Text>
          <Card.Text> {isOnSale} </Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
