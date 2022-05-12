import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './Components/Home'
import { Cart } from './Components/Cart';

export const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path = '/cart' element = {<Cart/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default App