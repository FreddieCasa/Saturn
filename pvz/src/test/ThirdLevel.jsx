import "./ThirdLevel.css";

const ThirdLevel = ({ lowerValue, setLowerValue }) => {

    const clickLowerPart = () => {
        setLowerValue(lowerValue + 1);
    }

    return (
      <div className="thirdLevelContainer" onClick={() => clickLowerPart()}>
        {lowerValue}
      </div>
    );
};

export default ThirdLevel;