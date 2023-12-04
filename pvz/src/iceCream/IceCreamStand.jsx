// import IceCreamFlavour from "./IceCreamFlavour";
// import { iceCreamInfo } from "./iceCreamInfo.js";
// import "./IceCreamStation.css";
// import { useState } from "react";

// const IceCreamStation = () => {
//   const [selectedIceCream, setSelectedIceScream] = useState(iceCreamInfo);
//   console.log(setSelectedIceScream);
//   const listToArr = iceCreamInfo.map((item) => {
//     return (
//       <IceCreamFlavour
//         key={item.key}
//         flavour={item.flavor}
//         color={item.color}
//         fontColor={item.fontColor}
//         setSelectedIceScream={setSelectedIceScream}
//         selectedIceCream={selectedIceCream}
//       />
//     );
//   });

//   return (
//     <>
//       <div className="container">{listToArr}</div>
//       <div>
//         {selectedIceCream.map((iceCream, index) => (
//           <div key={index}>{`${iceCream.flavor} : ${iceCream.count}`}</div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default IceCreamStation;

import { useState } from "react";
import FlavourQuantity from "./FlavourQuantity.jsx";
import IceCreamFlavour from "./IceCreamFlavour.jsx";
import "./IceCreamStand.css";
import PriceCounter from "./PriceCounter.jsx";
import { iceCreamInfo } from "./iceCreamInfo.js";

const IceCreamStand = () => {
  const [flavourCount, setFlavourCount] = useState(0);
  const [total, setTotal] = useState(0);

  const flavourList = iceCreamInfo.map((singleFlavour) => {
    return (
      <IceCreamFlavour
        key={singleFlavour.key}
        flavor={singleFlavour.flavor}
        color={singleFlavour.color}
        fontColor={singleFlavour.fontColor}
        flavourCount={flavourCount}
        setFlavourCount={setFlavourCount}
      />
    );
  });

  const quantityList = iceCreamInfo.map((singleFlavour) => {
    return (
      <FlavourQuantity
        key={singleFlavour.key}
        flavor={singleFlavour.flavor}
        color={singleFlavour.color}
        flavourCount={flavourCount}
      />
    );
  });

  const addPortion = () => {
    setTotal(total + 10);
  };

  return (
    <>
      <div
        onClick={() => addPortion()}
        className="flavourContainer"
      >
        {flavourList}
      </div>
      <div className="bottomTotalContainer">
        <div className="statsContainer">{quantityList}</div>
        <div className="priceCounterContainer">
          <PriceCounter total={total} />
        </div>
      </div>
    </>
  );
};

export default IceCreamStand;
