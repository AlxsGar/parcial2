import React, {useState, useEffect} from 'react';
import {fs} from '../Config/Config'
import { CartProducts } from './CartProducts';

export const Cart = () => {

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        fs.collection('Cart').onSnapshot(snapshot => {
            const newCartProduct = snapshot.docs.map((doc) => ({
                ID: doc.id,
                ...doc.data(),
            }));
            setCartProducts(newCartProduct)
        })
    },[])

    //console.log(cartProducts)

    const totalPrice = cartProducts.map(cartProduct=>{
        return cartProduct.TotalProductPrice;
    })

    const calculateTotal = (accumulator, currentValue) => accumulator+currentValue;

    const totalPriceCart = totalPrice.reduce(calculateTotal,0);

    console.log(totalPriceCart);

    let Product;
    const cartProductIncrease=(cartProduct)=>{
        //console.log(cartProduct);
        Product = cartProduct;
        Product.qty = Product.qty+1;
        Product.TotalProductPrice = Product.qty * Product.Price;
        fs.collection('Cart').doc(cartProduct.ID).update(Product).then(()=>{
            console.log('Increment added')
        })
    }

    const cartProductDecrease=(cartProduct)=>{
        //console.log(cartProduct);
        Product = cartProduct;
        if(Product.qty > 1){
            Product.qty = Product.qty-1;
            Product.TotalProductPrice = Product.qty * Product.Price;
            fs.collection('Cart').doc(cartProduct.ID).update(Product).then(()=>{
                console.log('Decremented')
            })
        }
    }

    return (
        <>
            {cartProducts.length > 0 && (
                <div className='container-fluid'>
                    <h1 className='text-center'>Cart</h1>
                    <div className='product-box'>
                        <CartProducts cartProducts={cartProducts}
                        cartProductIncrease={cartProductIncrease}
                        cartProductDecrease={cartProductDecrease}
                        />
                    </div>
                    <div className='summary-box'>
                        <h5>Cart Summary</h5>
                        <br></br>
                        <div>
                        Total: <span>$ {totalPriceCart}</span>
                        </div>
                        <br></br>
                    </div> 
                </div>
            )}
            {cartProducts.length < 1 && (
                <div className='container-fluid'>No Products to show</div>
            )}
        </>
    )
}