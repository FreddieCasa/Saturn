import SecondElement from "./SecondLevel";
import { useState } from "react";

const FirstLevel = () => {

    const [value, setValue] = useState(0);
    const [lowerValue, setLowerValue] = useState(0);

    return (
      <div>
        <SecondElement
          value={value}
          setValue={setValue}
          lowerValue={lowerValue}
          setLowerValue={setLowerValue}
        />
      </div>
    );
};

export default FirstLevel;