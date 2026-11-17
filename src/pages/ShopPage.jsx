import React, {useState} from 'react';
import {SlidersHorizontal, Columns2, Grid2X2} from 'lucide-react';
import {PRODUCTS,COLLECTION_BANNERS} from '../data/storeData';
import ProductCard from '../components/ProductCard';
import Breadcrumbs from '../components/Breadcrumbs';
import Dialog from '../components/Dialog';
const categories=['ALL','RINGS','WRISTWEAR','EARRINGS','NECKLACES'];
const label=cat=>cat==='ALL'?'All Jewellery':cat.charAt(0)+cat.slice(1).toLowerCase();
export default function ShopPage({initialCategory='ALL',collection=false,onSelectProduct,onNavigateToProduct,onNavigate}) {
 const [category,setCategory]=useState(initialCategory),[sort,setSort]=useState('featured'),[filters,setFilters]=useState(false),[columns,setColumns]=useState(4),[minPrice,setMinPrice]=useState(''),[maxPrice,setMaxPrice]=useState('');
 const products=Object.values(PRODUCTS).filter(p=>(category==='ALL'||p.category.toUpperCase()===category)&&(!minPrice||p.price>=Number(minPrice))&&(!maxPrice||p.price<=Number(maxPrice))).sort((a,b)=>sort==='price-low'?a.price-b.price:sort==='price-high'?b.price-a.price:sort==='az'?a.title.localeCompare(b.title):sort==='za'?b.title.localeCompare(a.title):0);
 const title=collection?'Gyre S/S 2026':label(category);
 const banner=COLLECTION_BANNERS[collection&&category==='ALL'?'GYRE':category]||COLLECTION_BANNERS.ALL;
 const select=onNavigateToProduct||onSelectProduct;
 return <div className="reference-catalog">
  <section className="catalog-banner"><img key={banner.image} src={banner.image} style={{objectPosition:banner.position}} alt={`${title} collection`} fetchPriority="high"/><div className="catalog-banner-overlay"/><div className="catalog-banner-copy"><h1>{title}</h1></div></section>
  {collection&&<h2 className="catalog-collection-title">The Gyre Collection</h2>}
  <section aria-label="Collection products" className="catalog-section">
   <div className="catalog-toolbar"><p aria-live="polite">Items: {products.length}</p><div className="catalog-tools">
    <div className="catalog-view-buttons"><button aria-label="Large product grid" aria-pressed={columns===2} onClick={()=>setColumns(2)}><Columns2 size={17} strokeWidth={1}/></button><button aria-label="Compact product grid" aria-pressed={columns===4} onClick={()=>setColumns(4)}><Grid2X2 size={17} strokeWidth={1}/></button></div>
    <button className="catalog-filter-toggle" aria-expanded={filters} onClick={()=>setFilters(true)}><SlidersHorizontal size={12}/> Filter</button>
    <label className="catalog-sort">Sort By <select aria-label="Sort by" value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="az">Alphabetically, A–Z</option><option value="za">Alphabetically, Z–A</option><option value="price-low">Price, low to high</option><option value="price-high">Price, high to low</option></select></label>
   </div></div>
   {filters&&<Dialog title="Filter" onClose={()=>setFilters(false)} className="filter-dialog"><div className="catalog-filter-content"><h3>Product type</h3>{categories.map(cat=><label className="filter-option" key={cat}><input type="radio" name="category" checked={category===cat} onChange={()=>setCategory(cat)}/>{label(cat)}</label>)}<h3>Price</h3><div className="filter-price"><label>From<input type="number" min="0" value={minPrice} onChange={e=>setMinPrice(e.target.value)}/></label><label>To<input type="number" min="0" value={maxPrice} onChange={e=>setMaxPrice(e.target.value)}/></label></div><button className="reference-link" onClick={()=>{setCategory('ALL');setMinPrice('');setMaxPrice('')}}><span>Clear all</span></button><button className="store-button store-button-filled" onClick={()=>setFilters(false)}>Show {products.length} products</button></div></Dialog>}
   <div className={`catalog-grid ${columns===2?'catalog-grid-large':''}`}>{products.map(p=><ProductCard key={p.id} product={p} onSelectProduct={select} onQuickView={onSelectProduct}/>)}</div>
   {!products.length&&<p className="catalog-empty">No pieces match these filters.</p>}
  </section>
  {collection&&<p className="catalog-story">Ocean currents take shape in sculptural bronze. Undulating forms, textured surfaces and carefully set stones reflect the movement of water and the irregular contours of the shore. Each piece is an exploration of balance, material and motion.</p>}
  <Breadcrumbs items={[title]} onNavigate={onNavigate}/>
 </div>;
}
