import { createContext, useState } from "react";

const ProdContext = createContext();

export function ProductProvider({ children }) {
    const [prod, setProd] = useState([]);

    const addToCart = (item) => {
        setProd((prevState) => [...prevState, item]);
        console.log(prod);
    };

    return (
        <ProdContext.Provider value={{ prod, addToCart }}>
            { children }
        </ProdContext.Provider>
    )
}

export default ProdContext;