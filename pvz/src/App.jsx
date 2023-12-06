import { Route, Routes } from 'react-router-dom'
import './App.css'
import IceCreamStand from './components/iceCream/IceCreamStand';
import FirstLevel from './components/test/FirstLevel';
import PriceList from "./components/products/PriceList";
import Homepage from './components/site/Homepage';
import NavBar from './components/site/NavBar';
import EnlargedProductCard from "./components/products/singleProduct/EnlargedProductCard";
import NotFoundPage from './components/site/pageNotFound/NotFoundPage';
import FoodProducts from './components/foodProducts/FoodProducts';
import FoodProductsAPI from "./components/foodProducts/FoodProductsAPI";
import ProductForm from './components/forma/productForm';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/stand" element={<IceCreamStand />} />
        <Route path="/pricelist" element={<PriceList />} />
        <Route path="/pricelist/:id" element={<EnlargedProductCard />} />
        <Route path="/test" element={<FirstLevel />} />

        <Route path="/foodproducts" element={<FoodProducts />} />
        <Route path="/foodproductsapi" element={<FoodProductsAPI />} />

        <Route path="/productForm" element={<ProductForm/>} />


        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App