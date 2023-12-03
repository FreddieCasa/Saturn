const IceCreamFlavour = ({
  flavour,
  color,
  fontColor,
  setSelectedIceScream,
  selectedIceCream,
}) => {
    const handleClick = () => {
        
    }
  return (
    <>
      <div
        style={{ background: color, color: fontColor, padding: "2rem" }}
        onClick={() => handleClick()}
      >
        <h3>{flavour}</h3>
      </div>
    </>
  );
};

export default IceCreamFlavour;
