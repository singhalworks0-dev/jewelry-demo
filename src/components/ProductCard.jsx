import React from 'react';
export const formatPrice = price => `Rs.${Number(price).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})} INR`;
export default function ProductCard({product,onSelectProduct,onQuickView}) {
 return <article className="catalog-card">
  <div className="catalog-card-media"><button className="catalog-image-link" onClick={()=>onSelectProduct(product.id)} aria-label={`View ${product.title}`}>
   <img className="catalog-image-primary" src={product.featuredImage} alt={product.title} loading="lazy" />
   {product.hoverImage&&<img className="catalog-image-secondary" src={product.hoverImage} alt={`${product.title}, editorial view`} loading="lazy" />}
  </button>{onQuickView&&<button className="catalog-quickview" onClick={()=>onQuickView(product.id)}>Quick View</button>}</div>
  <div className="catalog-card-info"><h3><button onClick={()=>onSelectProduct(product.id)}>{product.title}</button></h3><p>{formatPrice(product.price)}</p><p className="catalog-finish">24kt Gold Plating{product.material.includes('Topaz')?' with Topaz':''}</p></div>
 </article>;
}
