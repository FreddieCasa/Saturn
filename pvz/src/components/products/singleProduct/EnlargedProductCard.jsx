import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useParams } from "react-router-dom";

const EnlargedProductCard = () => {
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log("mano šitas", response.data);
        setIsLoading();
      })
      .catch((err) => console.log("->", err));
  }, []);

  console.log("product as one", product);

  if (isLoading) {
    return <div>product is loading</div>;
  }

  const {
    brand,
    category,
    description,
    discountPercentage,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = product;

  return (
    <>
      <div>
        <div>{images}</div>
        <img src="" alt="" />
        <h1>{title}</h1>

        <div>
          <div>{brand}</div>

          <div>{description}</div>
          <div>{price}</div>
        </div>
        <div>////////////////////////////////////////////////////////</div>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img className="shirtImage" src={images[0]} />
            <Card.Title>{title}</Card.Title>
            <Card.Text>{brand}</Card.Text>
            <Card.Text>description: {description} </Card.Text>
            <Card.Text>price: {price} </Card.Text>
            <Card.Text>stock: {stock} </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default EnlargedProductCard;
