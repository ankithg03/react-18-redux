import React, { useState, useCallback, memo } from 'react'
import ReactDOM from "react-dom/client";

import { ProductCard } from '../ProductCard'

export const ProductListing = () => {

  const productData = [
    { pid: 1, pname: "Apple", price: 300 },
    { pid: 2, pname: "Orange", price: 400 },
    { pid: 3, pname: "Banana", price: 500 }
  ]


  const [cartProductIds, setCartProductIds] = useState([])


  const [cartData, setCartData] = useState([])

  /**
   * Its a callback function similar to regular js flow, but should get triggered "cartProductIds"
   */
  const handleUpdateCart = useCallback((cartProductIds) => {
      const cartProduct = cartProductIds.map((id)=>{
          return productData.find(product => {
            return id===product.pid
          })
      })
      setCartData(cartProduct)
    console.log('Cart product ids updated ', cartProductIds, cartProduct)
  }, [cartProductIds])

  console.log('ProductListing>> Rerder', cartProductIds)


  return (
    <>
      {productData.map((product) => (
        <ProductCard
          product={product}
          cartProductIds={cartProductIds}
          setCartProductIds={setCartProductIds} />)
      )}

      <br />
      <button onClick={()=>handleUpdateCart(cartProductIds)}>Update Cart</button>
      <div>
        Cart Data:
        <div>
          {cartData.map(product => {
            return (<div>
              <div>
                Name: {product.name}
              </div>
              <div>
                Id: {product.pid}
              </div>
              <br />
            </div>)
          })}
        </div>
      </div>

    </>
  )
}

export default memo(ProductListing)