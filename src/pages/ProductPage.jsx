import React,{useState,useEffect} from 'react';
import {PRODUCTS} from '../data/storeData';
import ProductDetails from '../components/ProductDetails';
import ProductCard from '../components/ProductCard';
import Breadcrumbs from '../components/Breadcrumbs';
import Dialog from '../components/Dialog';
export default function ProductPage({productId='gulf-cuff',onNavigate,onNavigateToProduct,onAddToCart}) {
 const product=PRODUCTS[productId]||PRODUCTS['gulf-cuff'];
 const [zoom,setZoom]=useState(null),[active,setActive]=useState(0);
 const images=product.images?.length?product.images:[product.featuredImage];
 useEffect(()=>{setActive(0);setZoom(null)},[productId]);
 const activeImage=images[active]||images[0];
 return <div className="reference-product">
  <div className="product-layout"><div className="product-gallery">
   <div className="product-gallery-primary">
    <button onClick={()=>setZoom(activeImage)} className={`product-gallery-slide ${active?'is-editorial':''}`} aria-label={`Enlarge ${product.title}, image ${active+1}`}><img src={activeImage} alt={`${product.title}, view ${active+1}`} loading="eager"/><span className="product-zoom-mark" aria-hidden="true">+</span></button>
    {images.length>1&&<div className="product-gallery-controls"><button aria-label="Previous product image" onClick={()=>setActive((active+images.length-1)%images.length)}>‹</button><span aria-live="polite">{active+1} / {images.length}</span><button aria-label="Next product image" onClick={()=>setActive((active+1)%images.length)}>›</button></div>}
   </div>
   {images.length>1&&<div className="product-gallery-progress">{images.map((_,i)=><button className={active===i?'is-active':''} key={i} aria-label={`View image ${i+1}`} aria-pressed={active===i} onClick={()=>setActive(i)}/>)}</div>}
  </div><aside className="product-info-panel"><ProductDetails key={product.id} product={product} onAddToCart={onAddToCart}/></aside></div>
  <section className="product-recommendations"><h2>You May Also Like</h2><div className="catalog-grid">{Object.values(PRODUCTS).filter(p=>p.id!==product.id).slice(0,4).map(p=><ProductCard key={p.id} product={p} onSelectProduct={onNavigateToProduct}/>)}</div></section>
  <Breadcrumbs items={[{label:'Jewellery',page:'shop'},product.title]} onNavigate={onNavigate}/>
  {zoom&&<Dialog title={product.title} onClose={()=>setZoom(null)} className="image-dialog"><img src={zoom} alt={product.title}/></Dialog>}
 </div>;
}
