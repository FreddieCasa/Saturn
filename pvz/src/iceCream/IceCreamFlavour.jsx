// const IceCreamFlavour = ({
//   flavour,
//   color,
//   fontColor,
//   setSelectedIceScream,
//   selectedIceCream,
// }) => {
//     const handleClick = () => {
        
//     }
//   return (
//     <>
//       <div
//         style={{ background: color, color: fontColor, padding: "2rem" }}
//         onClick={() => handleClick()}
//       >
//         <h3>{flavour}</h3>
//       </div>
//     </>
//   );
// };

// export default IceCreamFlavour;

const IceCreamFlavour = ({ flavor, color, fontColor, flavourCount, setFlavourCount}) => {

    const addPortion = () => {
      setFlavourCount(flavourCount + 1);
    };
    console.log(flavourCount);

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