import React, {useState} from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
export default function ContactPage({onNavigate}) {
 const [submitted,setSubmitted]=useState(false);
 return <div className="reference-contact"><section className="contact-intro"><h1>Contact Us</h1><p>Our team at VALOIR ATELIER can help with choosing a piece, sizing, care and private appointments. If you have a question about the collection or need assistance with an order, please get in touch.<br/><br/>Write to <a href="mailto:care@valoir-atelier.com"><strong>care@valoir-atelier.com</strong></a><br/>(Monday–Saturday, 10:30 am to 6:30 pm IST).</p></section>
 <form className="contact-form" onSubmit={e=>{e.preventDefault();setSubmitted(true)}}>
 <label className="visually-hidden" htmlFor="contact-name">First name</label><input id="contact-name" name="name" autoComplete="given-name" placeholder="First name" required/>
 <label className="visually-hidden" htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Email" required/>
 <div className="contact-phone"><label className="visually-hidden" htmlFor="country-code">Country calling code</label><select id="country-code" name="country"><option value="+91">🇮🇳 +91</option><option value="+1">🇺🇸 +1</option><option value="+44">🇬🇧 +44</option></select><label className="contact-phone-field"><span>Phone</span><input name="phone" type="tel" autoComplete="tel-national" aria-label="Phone number" placeholder="+91"/></label></div>
 <label className="visually-hidden" htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" placeholder="Message" required rows="3"/>
 <button type="submit">Submit</button>{submitted&&<p role="status" className="contact-form-status">This local preview does not send messages. Please email care@valoir-atelier.com to contact the atelier.</p>}
 </form><Breadcrumbs items={['Contact']} onNavigate={onNavigate}/></div>;
}
