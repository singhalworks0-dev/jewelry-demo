import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBanner({ slide, onExplore }) {
  const isOpening = slide.id === 'gyre';
  const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { opacity: { duration: .8, delay: 1.6 }, y: { duration: 1.8, delay: .6 } } };
  return <section id={slide.id} className={`campaign-banner ${isOpening ? 'campaign-opening' : ''} ${slide.id === 'wristwear' ? 'campaign-bottom' : ''}`}>
    <motion.picture className="campaign-image" initial={{ scale: 1 }} whileInView={{ scale: 1.05 }} viewport={{ once: true }} transition={{ duration: 4.4, ease: 'linear' }}>
      <source media="(max-width: 575px)" srcSet={slide.mobileImage || slide.desktopImage} />
      <img src={slide.desktopImage} alt={`${slide.title} jewellery campaign`} loading={isOpening ? 'eager' : 'lazy'} fetchPriority={isOpening ? 'high' : 'auto'} />
    </motion.picture>
    <div className="campaign-overlay" />
    <div className="campaign-copy">
      <motion.h2 {...reveal}>{slide.title}</motion.h2>
      <motion.div {...reveal} className="campaign-description">
        {isOpening ? <h4>Spring/Summer 2026<br /><br /><em>Every collection is archived whence claimed,<br />never to be remade.</em></h4> :
          <h4>{slide.id === 'rings' ? <>Objects worth obessesing over<br />are rarely the<br />loudest</> : <>{slide.subtitle}{slide.subtext && <><br />{slide.subtext}</>}</>}</h4>}
      </motion.div>
      <motion.button {...reveal} onClick={onExplore} className="reference-link campaign-link"><span>{slide.buttonText}</span></motion.button>
    </div>
  </section>;
}
