import React from 'react';
export default function Breadcrumbs({items=[],onNavigate}) {
 return <nav className="page-breadcrumbs" aria-label="Breadcrumb"><button onClick={()=>onNavigate?.('home')}>Home</button>{items.map((item,i)=><React.Fragment key={i}><span aria-hidden="true">·</span>{item.page?<button onClick={()=>onNavigate?.(item.page)}>{item.label}</button>:<span>{item.label||item}</span>}</React.Fragment>)}</nav>;
}
