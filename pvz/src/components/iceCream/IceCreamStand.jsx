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
  const [activeFlavour, setActiveFlavour] = useState(); //{chocolate: 0, vanilla: 0,}
  const [flavourCount, setFlavourCount] = useState([...iceCreamInfo]); 



  const handleActiveField = (flavor) => {
    console.log(flavor) //Strawberry
    const flavourToAdd = setActiveFlavour(flavor);
    addPortion(flavourToAdd);
  };
  
  const addPortion = (flavor) => {
    const exists = flavourCount.find((item) => item.flavor === flavor);    
    if (exists) {
      setFlavourCount(() => {
        setFlavourCount(activeFlavour.count + 1)
      });
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

  const quantityList = flavourCount.map((singleFlavour) => {
    return (
      <FlavourQuantity
        key={singleFlavour.key}
        wholeFlavour={singleFlavour}
        flavourCount={singleFlavour.count}
      />
    );
  });

  return (
    <>
      <div className="flavourContainer">{flavourList}</div>
      <div className="bottomTotalContainer">
        <div className="statsContainer">{quantityList}</div>
        <div className="priceCounterContainer">
          {/* <PriceCounter total={total} /> */}
        </div>
      </div>
    </>
  );
};

export default IceCreamStand;
