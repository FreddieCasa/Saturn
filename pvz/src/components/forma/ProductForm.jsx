
import { useState } from "react";
import axios from "axios";

const ProductForm = () => {

    const formDesign = {display:"grid", gridTemplateColumns: "1fr 2fr", width:"100%"};
    const elementDesign = {margin:"0.2rem"};
    const [formData, setFormData] = useState({
        brand:"",
        category: "",
        description:"",
        price:"",
        title:"",
    }); 

    const handleForm = (event) => {
        console.log("form event", event);
        setFormData((prevFormData) => ({...prevFormData, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`product -> ${formData.brand} - ${formData.title} succesfully submitted`);
    };

    const postData = () => {
        axios.post("url", 
            const data = {
            brand:{formData.brand},
            category: {formData.category},
            description: {formData.description},
            price: {formData.price},
            title: {formData.title}})
            .then(() =>console.log(data))
            .catch((error) => console.log(error));
        };

    const productToAdd = {
        brand:"brand",
        category: "category",
        description:"description",
        discountPercentage:"",
        id:"",
        images:"",
        price:"price",
        rating:"",
        stock:"",
        thumbnail:"",
        title:"title",
    };

    return(
        <form onSubmit={handleSubmit} style={formDesign}>
            <label>{productToAdd.brand}</label>
            <input style={elementDesign} name="brand" value={formData.brand} onChange={handleForm} placeholder="enter product brand" type="text" />
            <label>{productToAdd.title}</label>
            <input style={elementDesign} name="title" value={formData.title} onChange={handleForm} placeholder="enter product name" type="text" />
            <label>{productToAdd.price}</label>
            <input style={elementDesign} name="price" value={formData.price} onChange={handleForm} placeholder="enter price (number value)" type="text" />
            <label>{productToAdd.description}</label>
            <textarea style={elementDesign} name="description" value={formData.description} onChange={handleForm} placeholder="enter product description" type="textarea" />
            <label>{productToAdd.category}</label>
            <input style={elementDesign} name="category" value={formData.category} onChange={handleForm} placeholder="enter category" type="text" /> 
            <button>submit</button>
        </form>       
    );
}

export default ProductForm;