import SingleFoodProduct from "./SingleFoodProduct.jsx";
import initialData from "./initialData.js";
import "./FoodProducts.css";
import { useState } from "react";
import CartItemsList from "./CartItemsList.jsx";

const FoodProducts = () => {
  const [cartList, setCartList] = useState([]);
  const [sum, setSum] = useState(0);

  const handleButtonClickAdd = (product) => {    
    setCartList([...cartList, product]);
    setSum(sum + product.price);
  };

  const handleButtonClickRemove = (product) => {
    setCartList();
    setSum(sum - product.price);
  };

  const productAssortment = initialData.map((item) => {
    return (
      <SingleFoodProduct
        key={item.id}
        product={item}
        click={handleButtonClickAdd}
      />
    );
  });

  const productInCart = cartList.map((item) => {
    return (
      <CartItemsList
        key={item.id}
        product={item}
        click={handleButtonClickRemove}
      />
    );
  });

  const totalSum = "total sum -> ";

  return (
    <>
      <div className="cartContainer">
        <div className="cartContainerTitle">
          <strong>shopping cart</strong>
        </div>
        <div>
          <ul className="cartContainerList">{productInCart}</ul>
        </div>
        <div className="cartSum">
          {totalSum} {sum}
        </div>
      </div>
      <div className="mainContainer">{productAssortment}</div>
    </>
  );
};

export default FoodProducts;

// {cartList.map((productInList) => {
//   return (
//     <li key={productInList.id}>
//       {productInList.name}{" "}
//       <button
//         onClick={() => handleButtonClickRemove(productInList)}
//       >
//         {remove}
//       </button>
//     </li>
//   );
// })}
