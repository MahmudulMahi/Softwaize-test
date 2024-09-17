import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemPage = () => {

  const[product,setProduct]=useState([])
  const { title } = useParams();

  useEffect(()=>{

    fetch("/item.json")
    .then(res=>res.json())
    .then(data=>setProduct(data))
  },[])

  console.log("tt",product);
  // const newproduct = product.filter(item =>item.title === "New")
  // const necklaces = product.filter(item =>item.title === "Necklaces")
  // const bestSellers = product.filter(item =>item.title === "Best-Sellers")
  const filteredProducts = product.filter(item => item.title === title);


  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 container'>
      {
       filteredProducts.map(item=><div key={item.id} className="card bg-base-100 w-96 shadow-xl ">
          <figure className="px-10 pt-10">
            <img
              src={item.url}
              alt="Shoes"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            
            <p>{item.title}</p>
    
          </div>
        </div>)
      }
    </div>
  );
};

export default ItemPage;

