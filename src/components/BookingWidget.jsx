import { useState } from 'react'
import Checkout from './Checkout'

const PinIcon = ({ green }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    {green
      ? <path d="M3 8l4 4 6-6" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      : <>
          <path d="M8 1.5a4.5 4.5 0 014.5 4.5c0 3.5-4.5 8.5-4.5 8.5S3.5 9.5 3.5 6A4.5 4.5 0 018 1.5z" stroke="#E31B23" strokeWidth="1.5"/>
          <circle cx="8" cy="6" r="1.5" stroke="#E31B23" strokeWidth="1.3"/>
        </>
    }
  </svg>
)

const ClipIcon = ({ green }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    {green
      ? <path d="M3 8l4 4 6-6" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      : <path d="M13 7.5L7.5 13A4.243 4.243 0 011.5 7L7 1.5A2.828 2.828 0 0111 5.5L5.5 11A1.414 1.414 0 013.5 9L9 3.5"
              stroke="#E31B23" strokeWidth="1.5" strokeLinecap="round"/>
    }
  </svg>
)

export default function BookingWidget() {
  const today = new Date().toISOString().split('T')[0]
  const [locState, setLocState] = useState('idle')
  const [kycFile,  setKycFile]  = useState(null)
  const [carType,  setCarType]  = useState('')
  const [checkout, setCheckout] = useState(null)

  const PRICES = {
    'Toyota Land Cruiser V8':        15600,
    'Toyota Prado TX/TZ':            11570,
    'Range Rover Vogue':             20800,
    'Mercedes-Benz S-Class':         26000,
    'Toyota Alphard (VIP)':          18200,
    'Toyota HiAce Executive Van':     9100,
    'Subaru Outback / Forester':      7800,
  }

  function requestLocation() {
    setLocState('loading')
    if (!navigator.geolocation) { setLocState('secured'); return }
    navigator.geolocation.getCurrentPosition(
      () => setLocState('secured'),
      () => setLocState('secured'),
      { timeout: 8000, enableHighAccuracy: true }
    )
  }

  function handleKYC(e) {
    const file = e.target.files?.[0]
    if (file) setKycFile(file.name.length > 22 ? file.name.slice(0, 20) + '…' : file.name)
  }

  function handleCheckAvailability() {
    const vehicle = carType || 'Toyota Land Cruiser V8'
    setCheckout({ vehicle, pricePerDay: PRICES[vehicle] || 15600 })
  }

  const locGreen = locState === 'secured'
  const kycGreen = !!kycFile

  return (
    <>
      <section id="booking" className="relative z-10">
        <div className="max-w-[1280px] mx-auto max-sm:px-0">
          <div className="grid grid-cols-[repeat(4,1fr)_auto] max-lg:grid-cols-2 max-sm:grid-cols-1
            bg-white shadow-[0_16px_48px_rgba(0,0,0,0.1)] overflow-hidden
            rounded-b-2xl max-sm:rounded-none">

            {/* Car Type */}
            <div className="flex flex-col gap-1.5 px-6 py-[22px] border-r border-gray-100 max-sm:border-r-0 max-sm:border-b">
              <span className="text-[11px] font-bold uppercase tracking-[0.8px] text-gray-400 font-heading">Car Type</span>
              <select value={carType} onChange={e => setCarType(e.target.value)}
                className="border-0 outline-none bg-transparent text-[15px] font-medium text-gray-900 cursor-pointer font-body">
                <option value="">Select Vehicle Class</option>
                <option>Toyota Land Cruiser V8</option>
                <option>Toyota Prado TX/TZ</option>
                <option>Range Rover Vogue</option>
                <option>Mercedes-Benz S-Class</option>
                <option>Toyota Alphard (VIP)</option>
                <option>Toyota HiAce Executive Van</option>
                <option>Subaru Outback / Forester</option>
              </select>
            </div>

            {/* Pick Up Date */}
            <div className="flex flex-col gap-1.5 px-6 py-[22px] border-r border-gray-100 max-sm:border-r-0 max-sm:border-b">
              <span className="text-[11px] font-bold uppercase tracking-[0.8px] text-gray-400 font-heading">Pick Up Date</span>
              <input type="date" defaultValue={today}
                className="border-0 outline-none bg-transparent text-[15px] font-medium text-gray-900 cursor-pointer w-full font-body" />
            </div>

            {/* Location Pin */}
            <div className="flex flex-col gap-1.5 px-6 py-[22px] border-r border-gray-100 max-sm:border-r-0 max-sm:border-b">
              <span className="text-[11px] font-bold uppercase tracking-[0.8px] text-gray-400 font-heading">Corporate Address</span>
              <button onClick={requestLocation}
                className="flex items-center gap-2.5 border-0 bg-transparent p-0 cursor-pointer text-left">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${locGreen ? 'bg-green-100' : 'bg-red-50'}`}>
                  <PinIcon green={locGreen} />
                </div>
                <span className={`text-[15px] font-medium transition-colors font-body ${locState === 'loading' ? 'text-gray-400' : locGreen ? 'text-green-700 font-semibold' : 'text-gray-400'}`}>
                  {locState === 'idle' && 'Tap to pin location'}
                  {locState === 'loading' && 'Requesting…'}
                  {locState === 'secured' && 'Location Secured ✓'}
                </span>
              </button>
            </div>

            {/* KYC */}
            <div className="flex flex-col gap-1.5 px-6 py-[22px] max-lg:border-b max-sm:border-b border-gray-100">
              <span className="text-[11px] font-bold uppercase tracking-[0.8px] text-gray-400 font-heading">KYC Verification</span>
              <label htmlFor="kyc-widget" className="flex items-center gap-2.5 cursor-pointer">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${kycGreen ? 'bg-green-100' : 'bg-red-50'}`}>
                  <ClipIcon green={kycGreen} />
                </div>
                <span className={`text-[15px] font-medium leading-snug transition-colors font-body max-w-[160px] ${kycGreen ? 'text-green-700 font-semibold' : 'text-gray-400'}`}>
                  {kycFile ? `${kycFile} ✓` : 'Upload ID / Passport'}
                </span>
              </label>
              <input id="kyc-widget" type="file" accept="image/*,application/pdf"
                capture="environment" className="hidden" onChange={handleKYC} />
            </div>

            {/* Check Availability → opens Checkout */}
            <button onClick={handleCheckAvailability}
              className="bg-brand-red text-white font-heading font-bold text-[15px]
                px-9 flex items-center gap-2.5 whitespace-nowrap hover:bg-brand-dark transition-colors
                min-h-[90px] max-lg:col-span-2 max-lg:justify-center max-lg:min-h-[60px]
                max-sm:col-span-1 active:scale-[.98]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 5l4 4-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Check Availability
            </button>
          </div>
        </div>
      </section>

      {checkout && (
        <Checkout
          vehicle={checkout.vehicle}
          pricePerDay={checkout.pricePerDay}
          onClose={() => setCheckout(null)}
        />
      )}
    </>
  )
}
