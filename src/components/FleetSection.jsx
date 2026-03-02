import { useState } from 'react'
import { SectionBadge, BtnRed, BtnIconRed } from './ui'
import Reveal from './Reveal'
import { FLEET } from '../data'
import Checkout from './Checkout'
import ComingSoon from './ComingSoon'

const CarIcon  = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="5" width="14" height="8" rx="2" stroke="#555" strokeWidth="1.3"/><circle cx="4" cy="13" r="1.5" stroke="#555" strokeWidth="1.2"/><circle cx="12" cy="13" r="1.5" stroke="#555" strokeWidth="1.2"/></svg>
const TypeIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M8 2v12" stroke="#555" strokeWidth="1.3" strokeLinecap="round"/><circle cx="8" cy="8" r="6" stroke="#555" strokeWidth="1.3"/></svg>
const GearIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#555" strokeWidth="1.3"/><path d="M8 5v4l2.5 1.5" stroke="#555" strokeWidth="1.3" strokeLinecap="round"/></svg>
const UserIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11 14s-1-3-3-3-3 3-3 3M8 9a3 3 0 100-6 3 3 0 000 6z" stroke="#555" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>

export default function FleetSection() {
  const [checkout,   setCheckout]   = useState(null)   // { vehicle, pricePerDay }
  const [comingSoon, setComingSoon] = useState(false)

  function openCheckout(car) {
    // Parse price string "15,600" → 15600
    const price = parseInt(car.price.replace(/,/g, ''), 10)
    setCheckout({ vehicle: car.name, pricePerDay: price })
  }

  return (
    <Reveal as="section" id="fleet" className="py-20 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5">

        <div className="flex items-end justify-between mb-10 gap-5 max-sm:flex-col max-sm:items-start">
          <div>
            <SectionBadge>Our Fleet</SectionBadge>
            <div className="font-heading font-extrabold tracking-tight" style={{ fontSize: 'clamp(28px,3.5vw,46px)', lineHeight: 1.1 }}>
              Choose the perfect car
            </div>
            <div className="font-heading font-bold italic text-brand-red" style={{ fontSize: 'clamp(26px,3.3vw,44px)', lineHeight: 1.1 }}>
              for your trip
            </div>
          </div>
          <BtnRed onClick={() => setComingSoon(true)} className="flex-shrink-0 cursor-pointer">
            View Full Fleet <BtnIconRed />
          </BtnRed>
        </div>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {FLEET.map((car, i) => (
            <div key={i}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100
                hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] transition-all duration-300
                cursor-default group">

              {/* Image with hover overlay */}
              <div className="relative overflow-hidden h-60">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Quick View overlay — slides up on hover */}
                <div
                  className="absolute inset-0 flex items-end justify-center pb-5
                    transition-all duration-300 bg-grad-dark-overlay"
                  style={{ opacity: 0 }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0'}>
                  <button
                    onClick={() => openCheckout(car)}
                    className="font-heading font-bold text-white text-[13px]
                      px-6 py-2.5 rounded-full border-2 border-white/70
                      hover:bg-white hover:text-gray-900 transition-colors">
                    ⚡ Quick Book
                  </button>
                </div>
                {/* Always-visible overlay trigger via group-hover */}
                <div className="absolute inset-0 flex items-end justify-center pb-5
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-grad-dark-overlay">
                  <button
                    onClick={() => openCheckout(car)}
                    className="font-heading font-bold text-white text-[13px]
                      px-6 py-2.5 rounded-full border-2 border-white/70
                      hover:bg-white hover:text-gray-900 transition-colors pointer-events-auto">
                    ⚡ Quick Book
                  </button>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-heading font-bold text-[18px] text-gray-900">{car.name}</div>
                  <span className="text-[12px] font-semibold px-3 py-1 rounded-full bg-red-50 text-brand-red">{car.tag}</span>
                </div>
                <div className="flex flex-col gap-2 mb-5">
                  {[
                    [<CarIcon />,  `Fleet: ${car.fleet}`],
                    [<TypeIcon />, `Types: ${car.types}`],
                    [<GearIcon />, `Transmission: ${car.trans}`],
                    [<UserIcon />, `Seats: ${car.seats}`],
                  ].map(([icon, text], j) => (
                    <div key={j} className="flex items-center gap-2.5 text-[13px] text-gray-500">
                      {icon} {text}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="font-heading font-extrabold text-[20px] text-gray-900">
                    KSh {car.price}
                    <span className="text-[12px] font-normal text-gray-400 ml-1">/ day</span>
                  </div>
                  <button
                    onClick={() => openCheckout(car)}
                    className="inline-flex items-center gap-2 bg-brand-red text-white
                      font-heading font-semibold text-[13px] px-5 py-2.5 rounded-full
                      hover:bg-brand-dark transition-colors active:scale-95">
                    Hire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout modal */}
      {checkout && (
        <Checkout
          vehicle={checkout.vehicle}
          pricePerDay={checkout.pricePerDay}
          onClose={() => setCheckout(null)}
        />
      )}

      {/* Coming Soon modal */}
      {comingSoon && (
        <ComingSoon page="Full Fleet Catalogue" onClose={() => setComingSoon(false)} />
      )}
    </Reveal>
  )
}
