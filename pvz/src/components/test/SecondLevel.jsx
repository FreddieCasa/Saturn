import "./SecondLevel.css";
import ThirdLevel from "./ThirdLevel";



const SecondElement = ({ value, setValue, lowerValue, setLowerValue }) => {
  const clickOnNumber = () => {
    setValue(value + 1);
  };

  return (
    <div className="secondLevelContainer" onClick={() => clickOnNumber()}>
      {value}
      <ThirdLevel lowerValue={lowerValue} setLowerValue={setLowerValue} />
    </div>
  );
};

export default SecondElement;