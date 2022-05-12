import React from "react";
import {fs} from '../Config/Config'

export const IndividualCartProduct = ({cartProduct, cartProductIncrease, cartProductDecrease, cartProductDelete}) => {

    const handleCartProductIncrease=()=>{
        cartProductIncrease(cartProduct)
    }

    const handleCartProductDecrease=()=>{
        cartProductDecrease(cartProduct)
    }

    const handleCartProductDelete=()=>{
        fs.collection('Cart').doc(cartProduct.ID).delete().then(()=>{
            console.log('Deleted')
        })
    }

    return (
        <div className='product'>
            <div className='product-img'>
                <img src={cartProduct.url} alt="product-img" style={{width: 100}}/>
            </div>
            <div className='product-text title'>{cartProduct.Name}</div>
            <div className='product-text price'>$ {cartProduct.Price}</div>
            <span>Quantity</span>
            <div className='product-text quantity-box'>
                <button onClick={handleCartProductDecrease}>-</button>                
                <div>{cartProduct.qty}</div>               
                <button onClick={handleCartProductIncrease}>+</button>
            </div>
            <div className='product-text cart-price'>$ {cartProduct.TotalProductPrice}</div>
            <button onClick={handleCartProductDelete}>Eliminar</button> 
            <br></br>
            <br></br>           
        </div>
    )
}