
const IceCreamFlavour = ({flavour, color, fontColor}) => {
   
    return (
        <>
            <div>
                <button  style={{background:color, color:fontColor, }}>
                    <h3>
                        {flavour}
                    </h3>
                </button>
                
            </div>
        </>
    );
}

export default IceCreamFlavour;