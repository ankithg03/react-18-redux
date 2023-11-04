import React from 'react'

export const ProductCard = (props) => {

    const { cartProductIds, setCartProductIds, product } = props
    const handleAddToCart = (productId) => {
        if(!cartProductIds.includes(productId)) {
            setCartProductIds([...cartProductIds, productId])
        }
    }
    return (
        <div>
            <div>{product.pname}</div>
            <button onClick={()=>handleAddToCart(product.pid)}>Add to Cart</button>
        </div>
    )
}

export default ProductCard