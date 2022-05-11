import React, {useState, useEffect} from 'react';
import { fs } from '../Config/Config';
import { Navbar } from './Navbar';
import { Products } from './Products';

export const Home = () => {
   const [products, setProducts] = useState([]);

    const getProducts = async ()=>{
        const products = await fs.collection('Products').get();
        const productsArray = [];
        for(var snap of products.docs){
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data
            })
            if(productsArray.length === products.docs.length){
                setProducts(productsArray);
            }
        }
    }

    useEffect(() =>{
        getProducts();
    }, [])

    let Product;
    const addToCart = (product) =>{
        //console.log(product);
        Product=product;
        Product['qty']=1;
        Product['TotalProductPrice'] = Product.qty*Product.Price;
        fs.collection('Cart ').doc(product.ID).set(Product).then(()=>{
            console.log('Succesfully Added');
        })
    }

    return (
        <div>
            {products.length > 0 && (
                <div className='container-fluid'>
                    <h1 className='text-center'> Products </h1>
                    <div>
                        <Products products={products} addToCart = {addToCart}/>
                    </div>
                </div>
            )}
            {products.length < 1 && (
                <div className='container-fluid'>
                    Please wait...
                </div>
            )}
        </div>
    )
}