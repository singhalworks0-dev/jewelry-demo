import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Check, ShieldCheck, RefreshCw } from 'lucide-react';
import { PRODUCTS } from '../data/storeData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Private Salon Appointment',
    piece: 'gulf-cuff',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24 px-6 sm:px-12 max-w-[1800px] mx-auto">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mb-16 space-y-3"
      >
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-neutral-400 block font-sans">
          Concierge &amp; Private Salon
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-normal text-neutral-900 tracking-wide">
          Contact The Atelier
        </h1>
        <p className="text-xs sm:text-sm font-sans text-neutral-600 font-light leading-relaxed">
          At TORA &amp; TORY, we are dedicated to providing exceptional support. Our client care team is available to assist with private appointments, bespoke ring fittings, and archive acquisitions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 max-w-6xl mx-auto">
        
        {/* Left: Atelier Coordinates & Details */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 space-y-10 border-b lg:border-b-0 lg:border-r border-[#E8E5DF] pb-10 lg:pb-0 lg:pr-12"
        >
          
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-neutral-900">
              Private Salon &amp; Studio
            </h3>
            <p className="text-sm font-sans text-neutral-600 leading-relaxed">
              TORA &amp; TORY Atelier &amp; Design Studio<br />
              New Delhi, India
            </p>
            <p className="text-xs font-serif italic text-neutral-500">
              *Private viewings by prior appointment only.
            </p>
          </div>

          <div className="space-y-4 text-xs font-sans text-neutral-700">
            <div className="flex items-center space-x-3">
              <Mail size={16} className="text-neutral-400" />
              <span>care@toratory.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={16} className="text-neutral-400" />
              <span>WhatsApp Concierge: +91 (0) 98711 20260</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock size={16} className="text-neutral-400" />
              <span>Monday – Saturday: 10:00 AM – 7:00 PM IST</span>
            </div>
          </div>

          {/* Guarantees */}
          <div className="pt-8 border-t border-neutral-200 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-neutral-900">
              House Commitments
            </h4>
            <div className="space-y-3 text-xs font-sans text-neutral-600">
              <div className="flex items-start space-x-2">
                <ShieldCheck size={16} className="text-neutral-800 flex-shrink-0 mt-0.5" />
                <span>Complimentary insured courier with tracking worldwide.</span>
              </div>
              <div className="flex items-start space-x-2">
                <RefreshCw size={16} className="text-neutral-800 flex-shrink-0 mt-0.5" />
                <span>14-day seamless complimentary returns on standard releases.</span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Right: Appointment & Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-neutral-50 border border-neutral-200 p-8 sm:p-12 text-center space-y-4 shadow-sm"
              >
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto">
                  <Check size={20} />
                </div>
                <h3 className="text-2xl font-serif font-light text-neutral-900">
                  Inquiry Received
                </h3>
                <p className="text-xs sm:text-sm font-sans text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. A dedicated concierge consultant will review your inquiry and contact you via {formData.email} within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 text-xs font-sans uppercase tracking-[0.2em] border border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  Send Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] font-sans text-neutral-500 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jasmeet Nagrath"
                      className="w-full px-4 py-3 border border-neutral-300 text-xs sm:text-sm font-sans focus:outline-none focus:border-neutral-900 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] font-sans text-neutral-500 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 border border-neutral-300 text-xs sm:text-sm font-sans focus:outline-none focus:border-neutral-900 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] font-sans text-neutral-500 mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91..."
                      className="w-full px-4 py-3 border border-neutral-300 text-xs sm:text-sm font-sans focus:outline-none focus:border-neutral-900 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] font-sans text-neutral-500 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-300 text-xs font-sans uppercase tracking-[0.14em] focus:outline-none focus:border-neutral-900 bg-white"
                    >
                      <option value="Private Salon Appointment">Private Salon Appointment</option>
                      <option value="Bespoke Sizing Consultation">Bespoke Sizing Consultation</option>
                      <option value="Archive Piece Inquiry">Archive Piece Inquiry</option>
                      <option value="Order &amp; Shipping Status">Order &amp; Shipping Status</option>
                      <option value="Press &amp; Editorial">Press &amp; Editorial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-sans text-neutral-500 mb-2">
                    Object of Interest
                  </label>
                  <select
                    value={formData.piece}
                    onChange={(e) => setFormData({ ...formData, piece: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 text-xs font-sans uppercase tracking-[0.14em] focus:outline-none focus:border-neutral-900 bg-white"
                  >
                    <option value="all">General / Entire Collection</option>
                    {Object.values(PRODUCTS).map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} ({p.priceFormatted})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-sans text-neutral-500 mb-2">
                    Message / Special Request
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about preferred dates, sizing requirements, or questions..."
                    className="w-full px-4 py-3 border border-neutral-300 text-xs sm:text-sm font-sans focus:outline-none focus:border-neutral-900 bg-white"
                  />
                </div>

                <motion.button
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-4 bg-neutral-900 text-white text-[12px] uppercase tracking-[0.25em] font-sans font-medium hover:bg-black transition-colors"
                >
                  Submit Consultation Request
                </motion.button>

              </form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
