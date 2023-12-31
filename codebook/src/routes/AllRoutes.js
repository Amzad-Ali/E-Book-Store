import {Routes,Route} from 'react-router-dom';
import ProductList from '../pages/Products/ProductList';
import HomePage from '../pages/Home/HomePage';
import ProductDtails from  '../pages/ProductDtails.js'
import CartPages from '../pages/Cart/CartPages.js';
export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/products/:id' element={<ProductDtails/>}/>
        <Route path='cart' element = {<CartPages / >} />
      </Routes>
    </>
  )
}

