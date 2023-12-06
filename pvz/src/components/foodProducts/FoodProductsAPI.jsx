import SingleFoodProductAPI from "./SingleFoodProductAPI.jsx";
import axios from "axios";
import "./FoodProducts.css";
import { useState, useEffect } from "react";
import CartItemsListAPI from "./CartItemsListAPI.jsx";

const FoodProducts = () => {
  const [cartList, setCartList] = useState([]);
  const [sum, setSum] = useState(0);  
  const [isLoading, setIsLoading] = useState(true);
  const [productArray, setProductArray] = useState();
  
  const handleButtonClickAdd = (product) => {
    const isInCart = cartList.filter((item) => item.id === product.id).map((item) => item.id===product.id); 
    // console.log(isInCart);
    if (!isInCart[0]) {
      setCartList([...cartList, product]);
    }
    setSum(sum + product.price);
  };

  const handleButtonClickRemove = (product) => {
    setCartList();
    setSum(sum - product.price);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProductArray(response.data.products);
        setIsLoading();
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>data is loading, please wait...</div>;
  }


  const productAssortment = productArray.map((item) => {
    return (
      <SingleFoodProductAPI
        key={item.id}
        product={item}
        click={handleButtonClickAdd}
      />
    );
  });

  const productInCart = cartList.map((item) => {
    return (
      <CartItemsListAPI
        key={item.id}
        product={item}
        click={handleButtonClickRemove}
      />
    );
  });

  const totalSumLabel = "total sum -> ";

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
          {totalSumLabel} {sum}
        </div>
      </div>
      <div className="mainContainer">{productAssortment}</div>
    </>
  );
};

export default FoodProducts;