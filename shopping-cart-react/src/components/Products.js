import React, { useState, useEffect } from "react";
import { Main } from '../styled-components/Main'
import { Img } from '../styled-components/Img'
import { ProductCard } from '../styled-components/ProductCard'
import { StyledDesc } from '../styled-components/StyledDesc'
import { DelBtn, AddBtn } from "../styled-components/Buttons";
import { useContext } from "react";
import ProdContext from "./ProdContext";

import axios from "axios";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const { addToCart } = useContext(ProdContext)

  useEffect(() => {
    setLoading(true)
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Main>
      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )}

      {data.map((product)=> ( 
          <ProductCard key={product.id}>
           <div><Img src={product.image} alt="#"/></div>
           <div>
               <StyledDesc>{product.title}</StyledDesc>
               <StyledDesc>{`Price: ${product.price}`}</StyledDesc>
               <StyledDesc>{`Category: ${product.category}`}</StyledDesc>
           </div>
           <div>
                <AddBtn onClick={() => addToCart(product)}>
                  Buy
                </AddBtn>
           </div>
          </ProductCard>
      ))}
    </Main>
  )
}

export default Products