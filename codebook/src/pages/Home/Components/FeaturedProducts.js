import React from 'react'
import { useEffect,useState } from 'react'
import ProductCard from '../../../component/Elements/ProductCard.js';
export default function FeaturedProducts() {

  const [data,setData] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])
  async function fetchData(){
    try{
      const responce =await fetch(`http://localhost:8000/featured_products`);
      const result = await responce.json();
      setData(result);
    }catch(error){
      console.error(`Error ${error}`)
    }
  }

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">

        {data.map((product)=>(
        <ProductCard key={product.id} product={product}/>
        ))}

        </div>
    </section>
  )
}
