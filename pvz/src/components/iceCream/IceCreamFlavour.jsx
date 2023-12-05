import { useState } from "react";



const IceCreamFlavour = ({
  wholeFlavour,
  onClickField,
}) => {
  const { flavor, color, fontColor } = wholeFlavour;

  // console.log("handle active field", onClickField, {flavor});

  return (    
    <div
      onClick={() => onClickField(flavor)}
      style={{ background: color, color: fontColor, padding: "2rem" }}
      className="singleFlavourContainer"
    >
      <h3>{flavor}</h3>
    </div>
  );
};

export default IceCreamFlavour;