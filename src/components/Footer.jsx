import React, {useState,useEffect} from 'react';
import BrandLogo from './BrandLogo';

const columns=[['SHOP','Necklaces','Earrings','Rings','Brooches','Anklets'],['COMPANY','About Us','Care Guide','FAQ','Contact','Track Your Order'],['LEGAL','Terms & Conditions','Shipping Policy','Return & Exchanges','Privacy & Cookie Policy','REACH']];
export default function Footer({onNavigate}){
 const [desktop,setDesktop]=useState(()=>window.matchMedia('(min-width:750px)').matches);
 useEffect(()=>{const query=window.matchMedia('(min-width:750px)');const update=()=>setDesktop(query.matches);query.addEventListener('change',update);return()=>query.removeEventListener('change',update)},[]);
 return <footer className="reference-footer">
 <div className="footer-top"><div className="footer-brand"><button onClick={()=>onNavigate('home')} aria-label="Valoir Atelier home"><BrandLogo className="footer-wordmark" /></button></div>
 <div className="footer-columns">{columns.map(([title,...items])=><details className="footer-column" key={`${title}-${desktop}`} open={desktop}><summary>{title}</summary><ul>{items.map(item=><li key={item}><button onClick={()=>onNavigate(title==='SHOP'?'shop':item==='About Us'?'about':'contact',title==='SHOP'?item:undefined)}>{item}</button></li>)}</ul></details>)}</div></div>
 <p className="footer-copyright">© 2026 <button onClick={()=>onNavigate('home')}>VALOIR ATELIER</button>.</p>
 </footer>}
