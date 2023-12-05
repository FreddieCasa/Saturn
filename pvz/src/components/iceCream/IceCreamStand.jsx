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
  const [activeFlavour, setActiveFlavour] = useState();
  const [flavourCount, setFlavourCount] = useState([]); 
  const [total, setTotal] = useState(0);  

  const handleActiveField = (flavor) => {
    const flavourToAdd = setActiveFlavour(flavor);
    addPortion(flavourToAdd);
  };
  
  const addPortion = (activeFlavour) => {

    const exists = flavourCount.find(
      (item) => item.lavor === activeFlavour.flavor
    );

    if (exists) {
      setFlavourCount([...flavourCount]);
      console.log("flavour count in if statement", flavourCount);
    } else {
      setFlavourCount([...flavourCount, activeFlavour]);
      console.log("flavour count in else statement", flavourCount);
    }
  };
  console.log("active flavour", activeFlavour);

  const flavourList = iceCreamInfo.map((singleFlavour) => {
    return (
      <IceCreamFlavour
        key={singleFlavour.key}
        wholeFlavour={singleFlavour}
        onClickField={handleActiveField}
      />
    );
  });

  const quantityList = iceCreamInfo.map((singleFlavour) => {
    return (
      <FlavourQuantity
        key={singleFlavour.key}
        wholeFlavour={singleFlavour}
        flavourCount={flavourCount}
      />
    );
  });

  return (
    <>
      <div className="flavourContainer">{flavourList}</div>
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
