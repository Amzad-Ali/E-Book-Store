import React, { useEffect, useState } from 'react'
import { Link,json } from 'react-router-dom'
import Search from '../Seaction/Search';
import { useCart } from '../../context/CartContext';

export default function Header() {

  const {cartList} = useCart();
  const [search,setSearch] = useState(false);
  const [darkMode,setDark] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  useEffect(()=>{
    localStorage.setItem("darkMode",JSON.stringify(darkMode));
    if(darkMode){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[darkMode])
  return (
   <header>
    
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className=" border-b border-slate-300 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="/" onClick={()=>setSearch(!search)} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </Link>
        <div className="flex items-center relative">
                  <span onClick={()=>setDark(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                  <span onClick={()=>setSearch(!search)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                  <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                    </span>                    
                  </Link>
                  <span className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
              </div>
    </div>
</nav>
{search && <Search/> }
   </header>
  )
}
