import React, {useEffect,useRef} from 'react';
import {createPortal} from 'react-dom';
const dialogStack=[];
export default function Dialog({title,onClose,children,className=''}) {
 const panel=useRef(null);
 useEffect(()=>{const token=Symbol();dialogStack.push(token);const old=document.body.style.overflow;document.body.style.overflow='hidden';const previous=document.activeElement;panel.current?.focus();const key=e=>{if(dialogStack.at(-1)!==token)return;if(e.key==='Escape')onClose();if(e.key==='Tab'){const nodes=panel.current?.querySelectorAll('button,input,select,textarea,a[href],[tabindex="0"]');if(!nodes?.length)return;const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}};window.addEventListener('keydown',key);return()=>{const index=dialogStack.indexOf(token);if(index>=0)dialogStack.splice(index,1);document.body.style.overflow=old;window.removeEventListener('keydown',key);previous?.focus()}},[onClose]);
 return createPortal(<div className={`store-dialog-wrap ${className}`}><button className="panel-scrim" onClick={onClose} aria-label="Close dialog"/><section className="store-dialog" ref={panel} role="dialog" aria-modal="true" aria-label={title} tabIndex={-1}><div className="panel-heading"><h2>{title}</h2><button onClick={onClose} aria-label="Close dialog">×</button></div>{children}</section></div>,document.body);
}
