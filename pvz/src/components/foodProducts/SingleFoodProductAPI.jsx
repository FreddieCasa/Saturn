import "./SingleFoodProduct.css";

const SingleFoodProductAPI = ({ product, click }) => {
  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = product;

  return (
    <div className="singleFoodContainer">
      <div>
        <img className="pic" src={images[0]} alt={id} />
      </div>
      <div>
        <p className="productInfo">
          <strong>{title}</strong>
        </p>
        <p className="productInfo">
          {title}price {price}
        </p>
        <button className="buttonToCart" onClick={() => click(product)}>
          add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleFoodProductAPI;
