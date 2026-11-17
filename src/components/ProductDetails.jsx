import React,{useState} from 'react';
import {formatPrice} from './ProductCard';
import Dialog from './Dialog';
export default function ProductDetails({product,onAddToCart,onViewFull}) {
 const [size,setSize]=useState(''),[info,setInfo]=useState(null);
 const ring=product.category==='Rings',cuff=product.category==='Wristwear';
 const sizes=ring?['US 6','US 7','US 8','US 9','US 10']:cuff?['15 cm','17 cm','19 cm']:[];
 const chosen=size||sizes[0];
 const content={
  'Size Guide':<><p>{ring?'Choose the ring size that fits your finger comfortably.':cuff?'Measure the circumference of your wrist with a flexible tape.':'Please contact the atelier for measurements and fitting advice.'}</p>{sizes.length>0&&<table><thead><tr><th>Size</th><th>Fit</th></tr></thead><tbody>{sizes.map((s,i)=><tr key={s}><td>{s}</td><td>{ring?`${[16.5,17.3,18.1,19,19.8][i]} mm inner diameter`:['Small','Medium','Large'][i]}</td></tr>)}</tbody></table>}<p>For help choosing a fit, contact care@valoir-atelier.com.</p></>,
  'Gemstones':<p>{product.material}. Natural stones vary in tone and texture, making each piece individual.</p>,
  'Material and Care':<><p>{product.material}.</p><p>Store your piece separately in a dry pouch. Keep it away from perfume, water and cleaning products. Wipe gently with a soft, dry cloth after wearing.</p></>,
  'Shipping Returns & Exchanges':<p>Contact the atelier for shipping times, delivery options and assistance with returns or exchanges.</p>
 };
 return <div className="product-information"><h1>{product.title}</h1><p className="product-price">{formatPrice(product.price)}</p><p className="product-short-description">{product.tagline}, finished in 24k gold plating.</p>
 {sizes.length>0&&<fieldset className="product-sizes"><legend>Size</legend><div>{sizes.map(s=><label key={s}><input type="radio" name={`size-${product.id}`} value={s} checked={chosen===s} onChange={()=>setSize(s)}/><span>{s}</span></label>)}</div></fieldset>}
 <div className="product-purchase"><button className="store-button" onClick={()=>onAddToCart({...product,quantity:1,selectedSize:chosen||null})}>Add to Cart</button><button className="store-button store-button-filled" onClick={()=>onAddToCart({...product,quantity:1,selectedSize:chosen||null})}>Buy It Now</button></div>
 <div className="product-information-links">{Object.keys(content).map(title=><button key={title} className="reference-link" onClick={()=>setInfo(title)}><span>{title}</span></button>)}</div>
 <div className="product-narrative"><p>{product.tagline}.</p><p>{product.material}. Each surface is shaped with attention to proportion, texture and the way the piece rests against the body.</p><p>Crafted in India. Made to be worn your way.</p></div>
 {onViewFull&&<button className="reference-link" onClick={onViewFull}><span>View full details</span></button>}
 {info&&<Dialog title={info} onClose={()=>setInfo(null)}>{content[info]}</Dialog>}
 </div>;
}
