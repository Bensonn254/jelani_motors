import { useState, useEffect, useCallback } from 'react'
import { SectionBadge } from './ui'
import { TESTIMONIALS, FAQS } from '../data'

// ── Stars ──────────────────────────────────────────────────────────────────
function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#E31B23">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

// ── Single testimonial card ────────────────────────────────────────────────
function TestiCard({ t, active }) {
  return (
    <div
      className="flex-shrink-0 w-full transition-all duration-500"
      style={{ opacity: active ? 1 : 0.35, transform: active ? 'scale(1)' : 'scale(0.96)' }}>
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] h-full flex flex-col gap-5">
        <Stars />
        <p className="text-[15px] text-gray-700 leading-[1.72] flex-1">"{t.quote}"</p>
        <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 flex-shrink-0"
            loading="lazy"
          />
          <div>
            <div className="font-heading font-bold text-[15px] text-gray-900">{t.name}</div>
            <div className="text-[13px] text-gray-400 mt-0.5">{t.role}</div>
          </div>
          {/* Verified badge */}
          <div className="ml-auto flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-full">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[11px] font-heading font-bold text-emerald-600">Verified</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Testimonials Carousel ──────────────────────────────────────────────────
export function Testimonials() {
  const [idx,     setIdx]     = useState(0)
  const [paused,  setPaused]  = useState(false)
  const total = TESTIMONIALS.length

  const next = useCallback(() => setIdx(i => (i + 1) % total), [total])
  const prev = useCallback(() => setIdx(i => (i - 1 + total) % total), [total])

  // Auto-advance every 4 s unless paused
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [paused, next])

  // Show 3 cards at a time on desktop — build visible window of indices
  const perView = 3   // desktop
  const visible = Array.from({ length: perView }, (_, k) => (idx + k) % total)

  return (
    <section id="testimonials" className="py-20 bg-gray-50 section-hidden">
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <SectionBadge className="justify-center">Testimonials</SectionBadge>
          <h2 className="font-heading font-extrabold tracking-tight"
            style={{ fontSize: 'clamp(28px,3.5vw,48px)', lineHeight: 1.1 }}>
            What our customers are
            <em className="text-brand-red not-italic italic block">saying about us</em>
          </h2>
        </div>

        {/* Carousel desktop: 3 visible cards */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>

          {/* Cards grid — desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-5 transition-all duration-500">
            {visible.map((ti, k) => (
              <TestiCard key={`${ti}-${k}`} t={TESTIMONIALS[ti]} active={k === 0} />
            ))}
          </div>

          {/* Cards single — mobile */}
          <div className="md:hidden">
            <TestiCard t={TESTIMONIALS[idx]} active />
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white
              border border-gray-200 shadow-md flex items-center justify-center text-gray-500
              hover:bg-gray-50 hover:border-gray-300 transition-colors z-10 max-sm:left-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white
              border border-gray-200 shadow-md flex items-center justify-center text-gray-500
              hover:bg-gray-50 hover:border-gray-300 transition-colors z-10 max-sm:right-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIdx(i); setPaused(true); setTimeout(() => setPaused(false), 6000) }}
              className="rounded-full transition-all duration-300"
              style={{
                width:      i === idx ? 24 : 8,
                height:     8,
                background: i === idx ? '#E31B23' : '#e5e7eb',
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-12 flex items-center justify-center gap-10 flex-wrap opacity-50">
          {['2,000+ Corporate Clients', 'Verified Reviews', '4.9 / 5.0 Rating'].map(s => (
            <div key={s} className="flex items-center gap-2 text-[13px] font-heading font-semibold text-gray-500">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#E31B23" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {s}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ── FAQ Accordion ──────────────────────────────────────────────────────────
export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-20 bg-white border-t border-gray-100 section-hidden">
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-20 max-lg:gap-10 items-start">

          {/* Left – sticky heading */}
          <div className="lg:sticky lg:top-[100px]">
            <SectionBadge>FAQs</SectionBadge>
            <h2 className="font-heading font-extrabold tracking-tight mt-2"
              style={{ fontSize: 'clamp(28px,3vw,44px)', lineHeight: 1.1 }}>
              Frequently asked
              <em className="text-brand-red not-italic italic block">questions</em>
            </h2>
            <p className="text-[14px] text-gray-400 mt-5 leading-relaxed max-w-[280px]">
              Still have questions? Reach us on WhatsApp and we'll respond within minutes.
            </p>
            <a
              href="https://wa.me/254700000000?text=Hello%20Jelani%20Motors%2C%20I%20have%20a%20question."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-5 font-heading font-bold text-white
                text-[13px] px-5 py-3 rounded-xl transition-colors"
              style={{ background: '#25D366' }}>
              <svg width="16" height="16" viewBox="0 0 32 32" fill="white">
                <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.822 6.51L4 29l7.703-1.797A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm-3.89 8.539c-.199 0-.522.075-.795.375s-1.044 1.02-1.044 2.487 1.069 2.886 1.218 3.085c.149.2 2.055 3.285 5.09 4.478 2.516.993 3.034.795 3.582.745s1.771-.723 2.02-1.42.249-1.296.174-1.42c-.074-.124-.274-.199-.573-.348s-1.77-.873-2.044-.972c-.273-.1-.472-.149-.671.149s-.771.972-.945 1.17c-.174.2-.348.225-.647.075s-1.262-.465-2.403-1.484c-.888-.793-1.488-1.772-1.662-2.072s-.019-.462.131-.612c.134-.134.3-.348.448-.523.15-.174.2-.298.3-.497s.05-.373-.025-.523c-.074-.149-.647-1.62-.895-2.217-.24-.58-.484-.49-.659-.49z"/>
              </svg>
              Ask on WhatsApp
            </a>
          </div>

          {/* Right – accordion */}
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex items-center justify-between w-full py-[22px] gap-4 text-left cursor-pointer
                    font-heading font-semibold text-[16px] text-gray-900 hover:text-gray-700 transition-colors">
                  {faq.q}
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center
                      text-[18px] font-light transition-all duration-200"
                    style={
                      open === i
                        ? { background: '#E31B23', borderColor: '#E31B23', color: '#fff' }
                        : { borderColor: '#d1d5db', color: '#9ca3af' }
                    }>
                    {open === i ? '–' : '+'}
                  </span>
                </button>
                <div className={`faq-answer text-[14px] text-gray-500 leading-[1.7] ${open === i ? 'open' : ''}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
