import "./SingleFoodProduct.css"

const SingleFoodProduct = ({product, click}) => {

    const {id, name, price, image} = product;

    return (
      <div className="singleFoodContainer">
        <img className="pic" src={image} alt={id} />
        <p className="productInfo">
          <strong>{name}</strong>
        </p>
        <p className="productInfo"> price {price}</p>
        <button className="buttonToCart" onClick={() => click(product)}>
          add to cart
        </button>
      </div>
    );
}

export default SingleFoodProduct;