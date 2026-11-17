import React from 'react';
import Dialog from './Dialog';
import ProductDetails from './ProductDetails';
export default function ProductModal({product,onClose,onAddToCart,onNavigateToProduct}) {
 if(!product)return null;
 return <Dialog title={product.title} onClose={onClose} className="quickview-dialog"><div className="quickview-layout"><img src={product.featuredImage} alt={product.title}/><ProductDetails product={product} onAddToCart={p=>{onClose();onAddToCart(p)}} onViewFull={()=>{onClose();onNavigateToProduct(product.id)}}/></div></Dialog>;
}
