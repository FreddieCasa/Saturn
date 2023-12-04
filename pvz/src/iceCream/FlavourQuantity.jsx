

const FlavourQuantity = ({ flavor, color, flavourCount }) => {
  return (
    <>
      <div style={{ color: color }}>
        {flavor} {flavourCount}
      </div>
    </>
  );
};

export default FlavourQuantity;