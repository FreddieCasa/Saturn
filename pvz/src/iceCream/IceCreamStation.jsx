import IceCreamFlavour from "./IceCreamFlavour";
import { iceCreamInfo } from "./iceCreamInfo.js";
import "./IceCreamStation.css"

console.log(iceCreamInfo);


const listToArr = iceCreamInfo.map((item) =>{
    return(        
        <IceCreamFlavour
            key={item.key}
            flavour={item.flavor}
            color={item.color}
            fontColor={item.fontColor}
        />
    );
})






const IceCreamStation = () => {

    return (
        <>
            <div className="container">
                {listToArr}
            </div>        
        </>
    );
}


export default IceCreamStation;