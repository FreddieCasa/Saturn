import Product from "./Product";
import "./PriceList.css";
import ProductModal from "./modal/ProductModal";
import { MyToast } from "./MyToast";
import { useEffect, useState } from "react";
import axios from "axios";

const PriceList = () => {
  const [productArray, setProductArray] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [currentProduct, setCurrentProduct] = useState();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProductArray(response.data.products);
        setIsLoading();
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("product array", productArray);

  if (isLoading) {
    return <div>data is loading, please wait...</div>;
  }

  const mappedProducts = productArray.map((product) => {
    return (
      <Product
        key={product.key}
        product={product}
        setShowModal={setShowModal}
        setCurrentProduct={setCurrentProduct}
      />
    );
  });

  return (
    <div className="container">
      {showToast && (
        <MyToast
          title={currentProduct.title}
          setShowToast={setShowToast}
          showToast={showToast}
        />
      )}
      {showModal && (
        <ProductModal
          show={showModal}
          setShowModal={setShowModal}
          currentProduct={currentProduct}
          setShowToast={setShowToast}
        />
      )}
      {mappedProducts}
      {showModal && (
        <ProductModal
          show={showModal}
          setShowModal={setShowModal}
          currentProduct={currentProduct}
          setShowToast={setShowToast}
        />
      )}
    </div>
  );
};

export default PriceList;










// import Product from "./Product";
// import "./PriceList.css";
// import ProductModal from "./modal/ProductModal";
// import { MyToast } from "./MyToast";
// import { useEffect, useState } from "react";
// import axios from "axios";

// // const PRODzUCTS = [
// //   {
// //     image:
// //       "https://th.bing.com/th/id/R.7efa03f2898bf3f03f3ee3ea03c2c554?rik=oB4ImHRaw%2fp9Dw&pid=ImgRaw&r=0",
// //     title: "white shirt",
// //     description: "generic men white shirt",
// //     price: 50,
// //     quantity: 12,
// //     category: "man",
// //     isOnSale: true,
// //   },
// //   {
// //     image:
// //       "https://th.bing.com/th/id/OIP.xQzC5LfryB2NyfOMSxvOZwHaJQ?rs=1&pid=ImgDetMain",
// //     title: "black shirt",
// //     description: "generic men black shirt",
// //     price: 60,
// //     quantity: 16,
// //     category: "man",
// //     isOnSale: false,
// //   },
// //   {
// //     image:
// //       "https://www.amedeoexclusive.com/cdn/shop/products/AESS8019_1.jpg?v=1598429640",
// //     title: "red shirt",
// //     description: "generic men red shirt",
// //     price: 80,
// //     quantity: 0,
// //     category: "man",
// //     isOnSale: false,
// //   },
// //   {
// //     image:
// //       "https://www.theuniformedit.com.au/app/uploads/2019/02/Every-Day-Basic-Women-Uniform-Shirt-White-Long-Sleeve-Squashwhite.V1.jpg",
// //     title: "white shirt",
// //     description: "generic women white shirt",
// //     price: 60,
// //     quantity: 24,
// //     category: "woman",
// //     isOnSale: true,
// //   },
// //   {
// //     image:
// //       "https://i5.walmartimages.com/asr/70342b5f-4a45-49c9-b8bc-7365883a3731_1.3a5d32efe0997925bc6c10f182af1057.jpeg",
// //     title: "black shirt",
// //     description: "generic women black shirt",
// //     price: 70,
// //     quantity: 18,
// //     category: "woman",
// //     isOnSale: true,
// //   },
// //   {
// //     image:
// //       "https://i.pinimg.com/originals/5e/1d/4b/5e1d4bcb122ccce21291a81684b85998.jpg",
// //     title: "red shirt",
// //     description: "generic women red shirt",
// //     price: 90,
// //     quantity: 18,
// //     category: "woman",
// //     isOnSale: true,
// //   },
// // ];
// //
// // const productsInStore = products.filter(item => item.quantity > 0);

// const PriceList = () => {
//   const [productArray, setProductArray] = useState();
//   const [isLoading, setIsLoading] = useState(true);

//   const [showModal, setShowModal] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState();
//   const [showToast, setShowToast] = useState(false);

//   useEffect(() => {
//     axios
//       .get("https://dummyjson.com/products")
//       .then((response) => {
//         setProductArray(response.data.products);
//         setIsLoading();
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   console.log("product array", productArray);

//   if (isLoading) {
//     return <div>data is loading, please wait...</div>;
//   }

//   // const mappedProducts = PRODUCTS.map((product) => {
//   //   return (
//   //     <Product
//   //       key={product.title}
//   //       product={product}
//   //       setShowModal={setShowModal}
//   //       setCurrentProduct={setCurrentProduct}
//   //     />
//   //   );
//   // });

//   const mappedProducts = productArray.map((product) => {
//     return (
//       <Product
//         key={product.key}
//         product={product}
//         setShowModal={setShowModal}
//         setCurrentProduct={setCurrentProduct}
//       />
//     );
//   });

//   return (
//     <div className="container">
//       {mappedProducts}
//       {showModal && (
//         <ProductModal
//           show={showModal}
//           setShowModal={setShowModal}
//           currentProduct={currentProduct}
//           setShowToast={setShowToast}
//         />
//       )}
//       {showToast && (
//         <MyToast
//           title={currentProduct.title}
//           setShowToast={setShowToast}
//           showToast={showToast}
//         />
//       )}
//     </div>
//   );
// };

// export default PriceList;

