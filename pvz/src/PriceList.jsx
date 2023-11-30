import Product from "./Product";
import "./PriceList.css"


const PriceList = () => {

    return (
        <>
            <div className="container">
                <Product
                image="https://static.massimodutti.net/3/photos//2023/I/0/2/p/0199/880/401/0199880401_1_1_16.jpg?t=1693408767598&impolicy=massimodutti-itxmediumhigh&imwidth=800&imformat=chrome"
                title="shirt01"
                description="description of shirt 01"
                // price=30
                // quantity=2
                />     

                <Product
                title="shirt02"/>
                <Product
                title="shirt03"/>
                <Product
                title="shirt04"/>
                <Product
                title="shirt05"/>
                <Product
                title="shirt06"/>
            </div>
        </>
        )
}

export default PriceList;