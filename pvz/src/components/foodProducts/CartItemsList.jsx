import "./CartItemsList.css"


const CartContainerList = ({product, click}) => {

    const {id, name} = product;

    const remove = "remove";

    return (
      <li key={id}>
        {name}{" "}
        <button className="removeFromCart" onClick={() => click(product)}>
          {remove}
        </button>
      </li>
    );
};

export default CartContainerList;