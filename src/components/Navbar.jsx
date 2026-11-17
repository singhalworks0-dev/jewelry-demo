import React, {useState, useEffect, useRef} from 'react';
import {Search, ShoppingBag, User, Menu, X, ChevronDown} from 'lucide-react';
import {NAVIGATION_DATA} from '../data/storeData';
import BrandLogo from './BrandLogo';
export default function Navbar({currentPage,onNavigate,onOpenCart,cartCount,onOpenSearch,onSelectProduct}) {
 const [scrolled,setScrolled]=useState(window.scrollY>20);
 const [mobile,setMobile]=useState(false);
 const [dropdown,setDropdown]=useState(null);
 const [account,setAccount]=useState(false);
 const headerRef=useRef(null);
 const jewelleryTrigger=useRef(null);
 const jewelleryPanel=useRef(null);
 useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>20);window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);
 useEffect(()=>{const close=e=>{if(e.key==='Escape'){setMobile(false);setDropdown(null);setAccount(false)}};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[]);
 useEffect(()=>{
  if(dropdown!=='jewellery'||mobile||!window.matchMedia('(min-width:1100px)').matches)return;
  const previousOverflow=document.body.style.overflow;
  const measure=()=>headerRef.current?.style.setProperty('--menu-top',`${headerRef.current.getBoundingClientRect().bottom}px`);
  measure();
  document.body.style.overflow='hidden';
  const resize=()=>{if(window.innerWidth<1100)setDropdown(null);else measure()};
  window.addEventListener('resize',resize);
  const escape=e=>{if(e.key==='Escape'&&jewelleryPanel.current?.contains(document.activeElement))jewelleryTrigger.current?.focus()};
  window.addEventListener('keydown',escape);
  return()=>{document.body.style.overflow=previousOverflow;window.removeEventListener('resize',resize);window.removeEventListener('keydown',escape)};
 },[dropdown,mobile]);
 const overlay=currentPage==='home'&&!scrolled&&!mobile&&!dropdown;
 const go=(page,category)=>{onNavigate(page,category);setMobile(false);setDropdown(null);setAccount(false)};
 return <header ref={headerRef} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setDropdown(null)}} onMouseLeave={()=>{if(!mobile)setDropdown(null)}} className={`reference-header ${currentPage==='home'?'header-home':''} ${overlay?'header-overlay':''} ${scrolled?'header-scrolled':''} ${dropdown==='jewellery'&&!mobile?'jewellery-menu-open':''}`}>
  <div className="reference-nav">
   <button className="mobile-menu-toggle" aria-label={mobile?'Close menu':'Open menu'} aria-expanded={mobile} onClick={()=>setMobile(!mobile)}>{mobile?<X size={20}/>:<Menu size={20}/>}</button>
   <nav className="desktop-navigation" aria-label="Main navigation">
    <button onClick={()=>go('shop')}>NEW</button>
    <div className="nav-dropdown" onMouseEnter={()=>setDropdown('jewellery')}>
     <button ref={jewelleryTrigger} aria-controls="jewellery-menu" aria-current={currentPage==='shop'?'page':undefined} aria-expanded={dropdown==='jewellery'} onClick={()=>setDropdown('jewellery')} onKeyDown={e=>{if(e.key==='ArrowDown'){e.preventDefault();setDropdown('jewellery');requestAnimationFrame(()=>jewelleryPanel.current?.querySelector('.menu-categories button')?.focus())}}}>JEWELLERY</button>
    </div>
    <div className="nav-dropdown" onMouseEnter={()=>setDropdown('collections')} onMouseLeave={()=>setDropdown(null)}>
     <button aria-current={currentPage==='gyre'?'page':undefined} aria-expanded={dropdown==='collections'} onClick={()=>setDropdown(dropdown==='collections'?null:'collections')}>COLLECTIONS</button>
     {dropdown==='collections'&&<div className="collection-menu"><button onClick={()=>go('gyre')}>Gyre S/S 2026</button></div>}
    </div>
    <button aria-current={currentPage==='about'?'page':undefined} onClick={()=>go('about')}>ABOUT</button><button aria-current={currentPage==='contact'?'page':undefined} onClick={()=>go('contact')}>CONTACT</button>
   </nav>
   <button className="logo-link" onClick={()=>go('home')} aria-label="Valoir Atelier home"><BrandLogo /></button>
   <div className="nav-utilities">
    <button onClick={onOpenSearch} aria-label="Search"><Search size={14} strokeWidth={1}/><span>Search</span></button>
    <div className="account-control"><button onClick={()=>setAccount(!account)} aria-expanded={account} aria-label="Account"><User size={14} strokeWidth={1}/><span>Account</span></button>{account&&<div className="account-popover"><h3>Welcome to Your Account</h3><p>Manage your profile, track your orders, and enjoy a seamless shopping journey with us.</p><button className="reference-link" onClick={()=>go('contact')}>Contact client services</button></div>}</div>
    <button onClick={onOpenCart} aria-label={`Cart (${cartCount})`}><ShoppingBag size={14} strokeWidth={1}/><span>Cart ({cartCount})</span><span className="mobile-cart-count">({cartCount})</span></button>
   </div>
  </div>
  {dropdown==='jewellery'&&!mobile&&<section ref={jewelleryPanel} id="jewellery-menu" className="jewellery-menu" aria-label="Jewellery menu">
   <button className="jewellery-menu-close" aria-label="Close jewellery menu" onClick={()=>{setDropdown(null);jewelleryTrigger.current?.focus()}}><X size={20} strokeWidth={1}/></button>
   <div className="jewellery-menu-content">
    <nav className="menu-categories" aria-label="Jewellery categories">{NAVIGATION_DATA.mainMenu[1].categories.map(c=><button disabled={c.disabled} key={c.label} onClick={()=>go('shop',c.label)}><span>{c.label}</span></button>)}</nav>
    <div className="menu-featured">{NAVIGATION_DATA.mainMenu[1].featured.map(item=><button key={item.title} onClick={()=>{onSelectProduct(item.link.replace('/products/',''));setDropdown(null)}}><div className="menu-product-media"><img src={item.image} alt={item.title}/>{item.hoverImage&&<img className="menu-product-hover" src={item.hoverImage} alt={`${item.title}, editorial view`}/>}</div><span>{item.title}</span></button>)}</div>
   </div>
  </section>}
  {mobile&&<nav className="mobile-navigation" aria-label="Mobile navigation">
    <button onClick={()=>go('shop')}>NEW</button>
    <button onClick={()=>setDropdown(dropdown==='jewellery'?null:'jewellery')}>JEWELLERY <ChevronDown size={14}/></button>
    {dropdown==='jewellery'&&<div className="mobile-categories">{NAVIGATION_DATA.mainMenu[1].categories.map(c=><button key={c.label} disabled={c.disabled} onClick={()=>go('shop',c.label)}>{c.label}</button>)}</div>}
    <button onClick={()=>go('gyre')}>COLLECTIONS</button><button aria-current={currentPage==='about'?'page':undefined} onClick={()=>go('about')}>ABOUT</button><button aria-current={currentPage==='contact'?'page':undefined} onClick={()=>go('contact')}>CONTACT</button>
  </nav>}
 </header>;
}
