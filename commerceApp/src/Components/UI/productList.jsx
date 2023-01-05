import React from 'react'
import ProductCard from './productCard'
function productList({data}) {
  return (
    <>
     { data.map((item,index)=>{
        return <ProductCard item={item} key={index}/>
      })}
      </>
  )
}

export default productList