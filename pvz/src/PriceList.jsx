import Product from "./Product";
import "./PriceList.css"



const products = [
    {
        image:"https://th.bing.com/th/id/R.7efa03f2898bf3f03f3ee3ea03c2c554?rik=oB4ImHRaw%2fp9Dw&pid=ImgRaw&r=0",
        title:"white shirt",
        description:"generic men white shirt",
        price: 50,
        quantity: 12,
        category:"man",
    },
    {
        image:"https://th.bing.com/th/id/OIP.xQzC5LfryB2NyfOMSxvOZwHaJQ?rs=1&pid=ImgDetMain",
        title:"black shirt",
        description:"generic men black shirt",
        price: 60,
        quantity: 16,
        category:"man",
    },
    {
        image:"https://ae01.alicdn.com/kf/HTB1TtaYKFXXXXb9XXXXq6xXFXXXE/Casual-Red-Men-Shirt-Patchwork-Tie-Solid-Dress-Shirts-Male-Long-Sleeve-Turn-down-Collar-Slim.jpg",
        title:"red shirt",
        description:"generic men white shirt",
        price: 80,
        quantity: 0,
        category:"man",
    },
    {
        image:"https://www.theuniformedit.com.au/app/uploads/2019/02/Every-Day-Basic-Women-Uniform-Shirt-White-Long-Sleeve-Squashwhite.V1.jpg",
        title:"white shirt",
        description:"generic women white shirt",
        price: 60,
        quantity: 0,
        category:"woman",
    },
    {
        image:"https://i5.walmartimages.com/asr/70342b5f-4a45-49c9-b8bc-7365883a3731_1.3a5d32efe0997925bc6c10f182af1057.jpeg",
        title:"black shirt",
        description:"generic women black shirt",
        price: 70,
        quantity: 18,
        category:"woman",
    },
    {
        image:"https://i.pinimg.com/originals/5e/1d/4b/5e1d4bcb122ccce21291a81684b85998.jpg",
        title:"red shirt",
        description:"generic women red shirt",
        price: 90,
        quantity: 18,
        category:"woman",
    },
]

const mappedProducts = products.map( product => {
    return <Product
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
            category={product.category}/>;
})

const PriceList = () => {

    return (
        <>
            <div className="container">
                {/* <Product
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
                title="shirt06"/> */}

                {mappedProducts}

            </div>
        </>
        )
}

export default PriceList;