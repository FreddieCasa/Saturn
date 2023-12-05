import { Route, Routes } from 'react-router-dom'
import './App.css'
import IceCreamStand from './components/iceCream/IceCreamStand';
import FirstLevel from './components/test/FirstLevel';
import PriceList from "./components/products/PriceList";
import Homepage from './components/site/Homepage';
import NavBar from './components/site/NavBar';
import EnlargedProductCard from "./components/products/EnlargedProductCard";

function App() {

  return (
    <>      
      <NavBar/>
      <Routes>        
        <Route path="/" element={<Homepage/>} />
        <Route path="/stand" element={<IceCreamStand />} />
        <Route path="/pricelist" element={<PriceList /> } />
        <Route path="/pricelist/:id" element={<EnlargedProductCard />} />
        <Route path="/test" element={<FirstLevel />} />

      </Routes>      
    </>
  )
}

export default App