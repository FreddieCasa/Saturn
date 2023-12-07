import { useState } from "react";
import "./ProductForm.css";
import axios from "axios";

const ProductForm = () => {
  const [inputError, setInputError] = useState(false);
  const [inputErrorPrice, setInputErrorPrice] = useState(false);

  const [formData, setFormData] = useState({
    brand: "",
    category: "",
    description: "",
    price: "",
    title: "",
  });

  //   const handleForm = (event) => {
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       [event.target.name]: event.target.value,
  //     }));
  //   };

  const handleForm = (event) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value,
    }));
    if (formData.description.length < 5) {
      setInputError(<p>description should be more than 5 symbols</p>);
    } else {
      setInputError("");
    }
    if (/^\d*$/g.test(formData.price)) {
      setInputErrorPrice(<p>price value should be numeric</p>);
    } else {
      setInputErrorPrice("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `product -> ${formData.brand} - ${formData.title} succesfully submitted`
    );
  };

  const productToPost = {
    brand: formData.brand,
    category: formData.category,
    description: formData.description,
    price: formData.price,
    title: formData.title,
  };

  const postData = () => {
    axios
      .post("https://dummyjson.com/products/add", { productToPost })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  postData();

  //   fetch("https://dummyjson.com/posts/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       title: "I am in love with someone.",
  //       userId: 5,
  //       /* other post data */
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then(console.log);

  const productToAdd = {
    brand: "brand",
    category: "category",
    description: "description",
    discountPercentage: "",
    id: "",
    images: "",
    price: "price",
    rating: "",
    stock: "",
    thumbnail: "",
    title: "title",
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formDesign">
        <label>{productToAdd.brand}</label>
        <input
          required
          minLength={1}
          maxLength={30}
          className="textFormInput"
          name="brand"
          value={formData.brand}
          onChange={handleForm}
          placeholder="enter product brand"
          type="text"
        />
        <label className="formLabel">{productToAdd.title}</label>
        <input
          required
          minLength={1}
          maxLength={30}
          className="textFormInput"
          name="title"
          value={formData.title}
          onChange={handleForm}
          placeholder="enter product name"
          type="text"
        />
        <label className="formLabel">{productToAdd.price}</label>
        <input
          required
          className="textFormInput"
          name="price"
          value={formData.price}
          onChange={handleForm}
          placeholder="enter price (number value)"
          type="text"
        />
        <label className="formLabel">{productToAdd.description}</label>
        <textarea
          required
          maxLength={300}
          className="textFormInput"
          name="description"
          value={formData.description}
          onChange={handleForm}
          placeholder="enter product description"
          type="textarea"
        />
        <label className="formLabel">{productToAdd.category}</label>
        <input
          required
          minLength={3}
          maxLength={20}
          className="textFormInput"
          name="category"
          value={formData.category}
          onChange={handleForm}
          placeholder="enter category"
          type="text"
        />
        <div className="submitButton">
          <button disabled={inputError} style={{ backgroundColor: "#2D6580" }}>
            submit
          </button>
        </div>
        {inputError && <span>{inputError}</span>}
        {inputErrorPrice && <span>{inputErrorPrice}</span>}
      </form>
    </div>
  );
};

export default ProductForm;
