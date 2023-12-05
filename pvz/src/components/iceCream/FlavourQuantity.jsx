

const FlavourQuantity = ({ wholeFlavour, flavourCount }) => {

  const {flavor, color, fontColor} = wholeFlavour;


  return (
    <>
      <div style={{ color: color }}>
        {flavor} {flavourCount}
      </div>
    </>
  );
};

export default FlavourQuantity;