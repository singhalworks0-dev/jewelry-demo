import React,{useState,useEffect} from 'react';
import {Search} from 'lucide-react';
import {PRODUCTS} from '../data/storeData';
import Dialog from './Dialog';
import {formatPrice} from './ProductCard';
export default function SearchModal({isOpen,onClose,onSelectProduct}) {
 const [query,setQuery]=useState('');useEffect(()=>{if(!isOpen)setQuery('')},[isOpen]);if(!isOpen)return null;
 const results=query.trim()?Object.values(PRODUCTS).filter(p=>`${p.title} ${p.category} ${p.material}`.toLowerCase().includes(query.toLowerCase())):[];
 return <Dialog title="Search" onClose={onClose} className="search-dialog"><form onSubmit={e=>e.preventDefault()} className="store-search-field"><label className="visually-hidden" htmlFor="store-search">Search jewellery</label><input id="store-search" autoFocus type="search" placeholder="Type to Search" value={query} onChange={e=>setQuery(e.target.value)}/><Search size={18} strokeWidth={1}/></form>{query.trim()&&<div className="store-search-results"><p aria-live="polite">{results.length} results</p>{results.map(p=><button className="store-search-result" key={p.id} onClick={()=>{onClose();onSelectProduct(p.id)}}><img src={p.featuredImage} alt=""/><span>{p.title}<small>{formatPrice(p.price)}</small></span></button>)}{!results.length&&<p>No results. Try another search.</p>}</div>}</Dialog>;
}
