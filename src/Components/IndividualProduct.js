import React from 'react';

export const IndividualProduct = ({individualProduct, addToCart}) => {
    //console.log(individualProduct);
    const handleAddToCart=()=>{
        addToCart(individualProduct);
    }
    return (
        <div>
            <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img" style={{width: 100}}/>
            </div>
            <div className='product-text name'>{individualProduct.Name}</div>
            <div className='product-text price'>$ {individualProduct.Price}</div>
            <button onClick={handleAddToCart}>Agregar</button>
            <br></br>
            <br></br>
            </div> 
        </div>
    )
}