import "./CartItemsList.css"


const CartContainerListAPI = ({product, click}) => {

    const { id, title } = product;
    
    const remove = "remove";

    return (
      <li key={id}>
        {title}{" "}
        <button className="removeFromCart" onClick={() => click(product)}>
          {remove}
        </button>
      </li>
    );
};

export default CartContainerListAPI;