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
    setActiveFlavour(flavor);
    console.log("handle active field (string) -> ", flavor);
  };

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

  //--------------------------------------------------------------------------------
  // const arr11 = [
  //   { i: "a", j: 1 },
  //   { i: "b", j: 2 },
  //   { i: "c", j: 3 },
  // ];
  // console.log("arr11", arr11);

  // const arr12 = arr11
  //   .filter((ob) => ob.j === 3)
  //   .map((jDelta) => ({ ...jDelta, j: 6 }));
  // console.log("arr12", arr12);

  // const arr21 = [
  //   { i: "a", j: 1 },
  //   { i: "b", j: 2 },
  //   { i: "c", j: 3 },
  // ];
  // console.log("arr21", arr21);

  // const arr22 = arr21.map((jDelta) =>
  //   jDelta.j === 3 ? { ...jDelta, j: 6 } : jDelta
  // );
  // console.log("arr22", arr22);
  //--------------------------------------------------------------------------------

  const addPortion = (flovourToAdd) => {
    const exists = flavourCount.find((item) => item.flavor === flovourToAdd);
    if (exists) {
      setFlavourCount(() =>
        flavourCount.map((item) =>
          item.flavor === flovourToAdd ? { ...item, count: + 1 } : { ...item }
        )
      );
    }
  };
  addPortion(activeFlavour);

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
