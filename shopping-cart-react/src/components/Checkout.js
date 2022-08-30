import { NavBar } from "../styled-components/NavBar";
import { useContext } from "react";
import ProdContext from "./ProdContext";
import { ImgCart } from "../styled-components/Img";



export const Checkout = () => {
    const { prod } = useContext(ProdContext)
    
    return (
        <div>
            <NavBar />
            <div className="checkout">
                <div className="prod-checkout">
                    <h2>Checkout</h2>
                    { prod.map( product => {
                        return (
                            <>
                                <h4>{product.title}</h4>
                                <ImgCart src={product.image} alt="#"/>
                                <p>{`Price: ${product.price}`}</p>
                            </>
                        )
                    })}
                </div>
                <div className="container summary">
                    <span className="cartTitle"> Subtotal: ({ prod.length }) items </span>
                    <span>Sum: $ { prod.reduce( (sum, product) => sum + product.price, 0 ).toFixed(2)}</span>

                </div>
            </div>
        </div>
    )
}