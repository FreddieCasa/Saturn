import IceCreamFlavour from "./IceCreamFlavour";
import { iceCreamInfo } from "./iceCreamInfo.js";
import "./IceCreamStation.css";
import { useState } from "react";

const IceCreamStation = () => {
  const [selectedIceCream, setSelectedIceScream] = useState(iceCreamInfo);
  console.log(setSelectedIceScream);
  const listToArr = iceCreamInfo.map((item) => {
    return (
      <IceCreamFlavour
        key={item.key}
        flavour={item.flavor}
        color={item.color}
        fontColor={item.fontColor}
        setSelectedIceScream={setSelectedIceScream}
        selectedIceCream={selectedIceCream}
      />
    );
  });

  return (
    <>
      <div className="container">{listToArr}</div>
      <div>
        {selectedIceCream.map((iceCream, index) => (
          <div key={index}>{`${iceCream.flavor} : ${iceCream.count}`}</div>
        ))}
      </div>
    </>
  );
};

export default IceCreamStation;
