import { useState } from "react";



const IceCreamFlavour = ({
  flavor,
  color,
  fontColor,
  flavourCount,
  setFlavourCount,
}) => {
  
  const addPortion = () => {
    setFlavourCount(flavourCount + 1);
  };

  return (
    <div
      onClick={() => addPortion()}
      style={{ background: color, color: fontColor, padding: "2rem" }}
      className="singleFlavourContainer"
    >
      <h3>{flavor}</h3>
    </div>
  );
};

export default IceCreamFlavour;