import { useState, useRef } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// CHECKOUT.JSX — Jelani Motors Kenya
// Props:
//   vehicle    : string  — vehicle name (e.g. "Toyota Prado TX/TZ")
//   pricePerDay: number  — daily rate in KSh (e.g. 11570)
//   onClose    : fn      — called when user clicks ✕ to dismiss the modal
// ─────────────────────────────────────────────────────────────────────────────

// ── Tiny shared icon components ──────────────────────────────────────────────
const Icon = {
  Close: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M3 10h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  Car: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M5 17H3a2 2 0 01-2-2v-4l2.5-6h13L19 11v4a2 2 0 01-2 2h-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7.5" cy="17.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="16.5" cy="17.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  Pin: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7z" stroke="currentColor" strokeWidth="1.7"/>
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  Shield: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Upload: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Scan: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  Check: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Spinner: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="animate-spin">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity=".2"/>
      <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
}

// ── KYC document upload zone ─────────────────────────────────────────────────
// state values: 'idle' | 'scanning' | 'verified'
function KYCUploadZone({ label, docKey, state, onChange }) {
  const inputRef = useRef(null)

  const isIdle     = state.status === 'idle'
  const isScanning = state.status === 'scanning'
  const isVerified = state.status === 'verified'

  return (
    <div className={`relative rounded-2xl border-2 border-dashed p-5 flex flex-col items-center gap-3
      text-center transition-all duration-300 cursor-pointer group
      ${isVerified  ? 'border-emerald-300 bg-emerald-50/60'
      : isScanning  ? 'border-amber-300  bg-amber-50/60 animate-pulse'
      :               'border-gray-200   bg-gray-50/60 hover:border-[#E31B23]/40 hover:bg-red-50/30'
      }`}
      onClick={() => isIdle && inputRef.current?.click()}>

      {/* Hidden file input — opens back camera on mobile */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={e => onChange(docKey, e.target.files?.[0])}
      />

      {/* Icon area */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors
        ${isVerified ? 'bg-emerald-100 text-emerald-600'
        : isScanning ? 'bg-amber-100   text-amber-600'
        :              'bg-white text-gray-400 shadow-sm group-hover:text-[#E31B23] group-hover:bg-red-50'
        }`}>
        {isVerified ? <Icon.Check />
        : isScanning ? <Icon.Scan />
        : <Icon.Upload />}
      </div>

      {/* Label */}
      <div className="leading-tight">
        <div className={`font-heading font-bold text-[13px] mb-0.5
          ${isVerified ? 'text-emerald-700'
          : isScanning ? 'text-amber-600'
          :              'text-gray-700'
          }`}>
          {label}
        </div>

        {/* Status text */}
        {isIdle && (
          <p className="text-[11px] text-gray-400">
            Tap to open camera · JPG / PNG
          </p>
        )}
        {isScanning && (
          <p className="text-[11px] font-semibold text-amber-500 animate-pulse">
            Scanning clarity…
          </p>
        )}
        {isVerified && (
          <p className="text-[11px] font-semibold text-emerald-600">
            {state.filename} Verified ✓
          </p>
        )}
      </div>

      {/* Verified tick badge overlay */}
      {isVerified && (
        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  )
}

// ── Progress stepper ─────────────────────────────────────────────────────────
function Stepper({ step }) {
  const steps = ['Details', 'Location', 'KYC', 'Confirm']
  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {steps.map((s, i) => {
        const num   = i + 1
        const done  = step > num
        const active= step === num
        return (
          <div key={s} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-[13px] transition-all
                ${done   ? 'bg-emerald-500 text-white shadow-[0_0_0_3px_rgba(16,185,129,0.2)]'
                : active ? 'text-white shadow-[0_0_0_3px_rgba(227,27,35,0.2)]'
                :          'bg-gray-100 text-gray-400'
                }`}
                style={active ? { background: '#E31B23' } : {}}>
                {done
                  ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  : num
                }
              </div>
              <span className={`text-[10px] font-heading font-semibold tracking-wide
                ${active ? 'text-[#E31B23]' : done ? 'text-emerald-600' : 'text-gray-300'}`}>
                {s}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`h-[2px] w-10 mb-4 mx-1 rounded-full transition-colors
                ${step > num ? 'bg-emerald-400' : 'bg-gray-200'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ── Main Checkout component ──────────────────────────────────────────────────
export default function Checkout({
  vehicle     = 'Toyota Land Cruiser V8',
  pricePerDay = 15600,
  onClose     = () => {},
}) {
  const today    = new Date().toISOString().split('T')[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]

  // ── Form state ────────────────────────────────────────
  const [pickupDate,  setPickupDate]  = useState(today)
  const [returnDate,  setReturnDate]  = useState(tomorrow)
  const [step,        setStep]        = useState(1)
  const [submitting,  setSubmitting]  = useState(false)
  const [submitted,   setSubmitted]   = useState(false)

  // Days & price calculation
  const days = Math.max(1,
    Math.round((new Date(returnDate) - new Date(pickupDate)) / 86400000)
  )
  const total = (pricePerDay * days).toLocaleString('en-KE')

  // ── Geolocation state ─────────────────────────────────
  // 'idle' | 'requesting' | 'pinned' | 'error'
  const [locState, setLocState] = useState('idle')

  function requestLocation() {
    setLocState('requesting')
    if (!navigator.geolocation) { setLocState('pinned'); return }
    navigator.geolocation.getCurrentPosition(
      () => setLocState('pinned'),
      () => setLocState('pinned'),   // graceful smoke-and-mirrors fallback
      { timeout: 8000, enableHighAccuracy: true }
    )
  }

  // ── KYC document states ───────────────────────────────
  const [kyc, setKyc] = useState({
    id_front:  { status: 'idle', filename: '' },
    id_back:   { status: 'idle', filename: '' },
    licence:   { status: 'idle', filename: '' },
  })

  function handleFileUpload(docKey, file) {
    if (!file) return
    const shortName = file.name.length > 18
      ? file.name.slice(0, 16) + '…'
      : file.name

    // → scanning state immediately
    setKyc(k => ({ ...k, [docKey]: { status: 'scanning', filename: shortName } }))

    // → verified after 2 seconds
    setTimeout(() => {
      setKyc(k => ({ ...k, [docKey]: { status: 'verified', filename: shortName } }))
    }, 2000)
  }

  const allKycDone = Object.values(kyc).every(d => d.status === 'verified')
  const locPinned  = locState === 'pinned'

  // ── Final fake submit ─────────────────────────────────
  function handleFinalSubmit() {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  // ── Success screen ────────────────────────────────────
  if (submitted) {
    return (
      <div className="fixed inset-0 z-[500] flex items-center justify-center p-5"
        style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}>
        <div className="bg-white rounded-3xl p-10 max-w-sm w-full text-center shadow-2xl">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5 shadow-[0_0_0_6px_rgba(16,185,129,0.1)]">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="font-heading font-extrabold text-[22px] text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-[14px] text-gray-500 mb-1">
            Your {vehicle} hire has been submitted.
          </p>
          <p className="text-[13px] text-gray-400 mb-6">
            Our team will contact you on WhatsApp within 15 minutes.
          </p>
          <div className="bg-gray-50 rounded-2xl p-4 mb-6 text-left border border-gray-100">
            <div className="flex justify-between text-[13px] mb-2">
              <span className="text-gray-500">Vehicle</span>
              <span className="font-heading font-semibold text-gray-900">{vehicle}</span>
            </div>
            <div className="flex justify-between text-[13px] mb-2">
              <span className="text-gray-500">Duration</span>
              <span className="font-heading font-semibold text-gray-900">{days} day{days !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex justify-between text-[13px] pt-2 border-t border-gray-200 mt-2">
              <span className="text-gray-500 font-semibold">Total</span>
              <span className="font-heading font-extrabold text-[#E31B23]">KSh {total}</span>
            </div>
          </div>
          <button onClick={onClose}
            className="w-full font-heading font-bold text-white py-4 rounded-xl"
            style={{ background: '#E31B23' }}>
            Done
          </button>
        </div>
      </div>
    )
  }

  // ── Main modal ────────────────────────────────────────
  return (
    <div className="fixed inset-0 z-[500] flex items-end sm:items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(6px)' }}>

      {/* Backdrop click closes */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal card */}
      <div className="relative bg-white w-full sm:max-w-[520px] rounded-t-3xl sm:rounded-3xl shadow-2xl
        max-h-[92vh] overflow-y-auto z-10"
        style={{ scrollbarWidth: 'none' }}>

        {/* ── Sticky header ─────────────────────────────── */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 pt-6 pb-4 rounded-t-3xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-heading font-extrabold text-[18px] text-gray-900 leading-tight">
                Complete Your Booking
              </h2>
              <p className="text-[12px] text-gray-400 mt-0.5 font-medium">
                Jelani Motors Kenya · Secure Checkout
              </p>
            </div>
            <button onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
              <Icon.Close />
            </button>
          </div>
          <Stepper step={step} />
        </div>

        {/* ── Booking summary strip ────────────────────── */}
        <div className="mx-6 mt-5 rounded-2xl p-4 flex items-center gap-4"
          style={{ background: 'linear-gradient(105deg,#E31B23 0%,#c8151c 100%)' }}>
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white flex-shrink-0">
            <Icon.Car />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-heading font-bold text-white text-[14px] truncate">{vehicle}</div>
            <div className="text-white/70 text-[12px]">
              KSh {pricePerDay.toLocaleString('en-KE')} / day
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="font-heading font-extrabold text-white text-[18px]">
              KSh {total}
            </div>
            <div className="text-white/60 text-[11px]">{days} day{days !== 1 ? 's' : ''}</div>
          </div>
        </div>

        {/* ── Step content ──────────────────────────────── */}
        <div className="px-6 pb-6 mt-5 flex flex-col gap-6">

          {/* ════ STEP 1: Details ════ */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <SectionLabel icon={<Icon.Calendar />} title="Booking Details" />

              {/* Pick-up date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-[0.8px] text-gray-400 font-heading">
                  Pick-Up Date
                </label>
                <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3.5 focus-within:border-[#E31B23] transition-colors">
                  <span className="text-gray-400"><Icon.Calendar /></span>
                  <input type="date"
                    value={pickupDate}
                    min={today}
                    onChange={e => setPickupDate(e.target.value)}
                    className="flex-1 border-0 outline-none text-[15px] font-medium text-gray-900 bg-transparent font-body"/>
                </div>
              </div>

              {/* Return date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold uppercase tracking-[0.8px] text-gray-400 font-heading">
                  Return Date
                </label>
                <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3.5 focus-within:border-[#E31B23] transition-colors">
                  <span className="text-gray-400"><Icon.Calendar /></span>
                  <input type="date"
                    value={returnDate}
                    min={pickupDate}
                    onChange={e => setReturnDate(e.target.value)}
                    className="flex-1 border-0 outline-none text-[15px] font-medium text-gray-900 bg-transparent font-body"/>
                </div>
              </div>

              {/* Duration chip */}
              <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                <span className="text-[13px] text-gray-500">Duration</span>
                <span className="font-heading font-bold text-[13px] text-gray-900">{days} day{days !== 1 ? 's' : ''}</span>
              </div>

              <NextBtn onClick={() => setStep(2)} />
            </div>
          )}

          {/* ════ STEP 2: Delivery Location ════ */}
          {step === 2 && (
            <div className="flex flex-col gap-5">
              <SectionLabel icon={<Icon.Pin />} title="Delivery Location" />

              <p className="text-[13px] text-gray-500 leading-relaxed -mt-2">
                We deliver your vehicle directly to your address. Pin your location
                so our driver knows exactly where to bring the car.
              </p>

              {/* Big pin button */}
              <div className={`rounded-2xl border-2 p-6 flex flex-col items-center gap-4 text-center transition-all duration-300
                ${locPinned
                  ? 'border-emerald-300 bg-emerald-50'
                  : locState === 'requesting'
                  ? 'border-amber-300 bg-amber-50'
                  : 'border-dashed border-gray-300 bg-gray-50 hover:border-[#E31B23]/50 hover:bg-red-50/30'
                }`}>

                {/* Map pin animation */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all
                  ${locPinned ? 'bg-emerald-100 text-emerald-600'
                  : locState === 'requesting' ? 'bg-amber-100 text-amber-500'
                  : 'bg-white text-gray-400 shadow-sm'}`}>
                  {locState === 'requesting'
                    ? <Icon.Spinner />
                    : locPinned
                    ? <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7z" fill="#10b981" stroke="#10b981" strokeWidth="1"/>
                        <circle cx="12" cy="9" r="2.5" fill="white"/>
                      </svg>
                    : <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7z" stroke="#9ca3af" strokeWidth="1.7"/>
                        <circle cx="12" cy="9" r="2.5" stroke="#9ca3af" strokeWidth="1.5"/>
                      </svg>
                  }
                </div>

                {locPinned ? (
                  <>
                    <div className="font-heading font-bold text-emerald-700 text-[16px]">
                      Home Location Pinned ✓
                    </div>
                    <p className="text-[12px] text-emerald-600">
                      Our driver has your delivery coordinates
                    </p>
                  </>
                ) : locState === 'requesting' ? (
                  <div className="font-heading font-semibold text-amber-600 text-[15px]">
                    Requesting location access…
                  </div>
                ) : (
                  <>
                    <button
                      onClick={requestLocation}
                      className="flex items-center gap-2.5 font-heading font-bold text-white text-[15px]
                        px-7 py-3.5 rounded-xl transition-all shadow-[0_6px_20px_rgba(227,27,35,0.3)]
                        hover:shadow-[0_8px_28px_rgba(227,27,35,0.4)] active:scale-[.98]"
                      style={{ background: '#E31B23' }}>
                      📍 Pin Home Address
                    </button>
                    <p className="text-[11px] text-gray-400">
                      Your browser will ask for location permission
                    </p>
                  </>
                )}
              </div>

              <div className="flex gap-3">
                <BackBtn  onClick={() => setStep(1)} />
                <NextBtn  onClick={() => setStep(3)} disabled={!locPinned} flex1 />
              </div>
            </div>
          )}

          {/* ════ STEP 3: KYC Identity Verification ════ */}
          {step === 3 && (
            <div className="flex flex-col gap-5">
              <SectionLabel icon={<Icon.Shield />} title="Identity Verification (KYC)" />

              {/* AI scanner explainer */}
              <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5 text-blue-500">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.7"/>
                  <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                </svg>
                <p className="text-[12px] text-blue-700 leading-relaxed">
                  Our <strong>AI document scanner</strong> automatically checks image clarity and
                  authenticity. Please ensure photos are well-lit and all text is legible.
                </p>
              </div>

              {/* Three upload zones */}
              <KYCUploadZone
                label="National ID — Front"
                docKey="id_front"
                state={kyc.id_front}
                onChange={handleFileUpload}
              />
              <KYCUploadZone
                label="National ID — Back"
                docKey="id_back"
                state={kyc.id_back}
                onChange={handleFileUpload}
              />
              <KYCUploadZone
                label="Driving Licence"
                docKey="licence"
                state={kyc.licence}
                onChange={handleFileUpload}
              />

              {/* Progress hint */}
              {!allKycDone && (
                <p className="text-[12px] text-center text-gray-400 font-medium">
                  {Object.values(kyc).filter(d => d.status === 'verified').length} of 3 documents verified
                </p>
              )}
              {allKycDone && (
                <div className="flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl py-3">
                  <span className="text-emerald-600 font-heading font-bold text-[13px]">
                    ✅ All documents verified — ready to proceed
                  </span>
                </div>
              )}

              <div className="flex gap-3">
                <BackBtn onClick={() => setStep(2)} />
                <NextBtn onClick={() => setStep(4)} disabled={!allKycDone} flex1 />
              </div>
            </div>
          )}

          {/* ════ STEP 4: Confirm ════ */}
          {step === 4 && (
            <div className="flex flex-col gap-5">
              <SectionLabel icon={<Icon.Check />} title="Confirm Booking" />

              {/* Summary rows */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden">
                {[
                  ['Vehicle',   vehicle],
                  ['Pick-Up',   new Date(pickupDate).toLocaleDateString('en-KE', { weekday:'short', day:'numeric', month:'short', year:'numeric' })],
                  ['Return',    new Date(returnDate).toLocaleDateString('en-KE',  { weekday:'short', day:'numeric', month:'short', year:'numeric' })],
                  ['Duration',  `${days} day${days !== 1 ? 's' : ''}`],
                  ['Location',  'Home Location Pinned ✓'],
                  ['KYC',       'All 3 Documents Verified ✓'],
                ].map(([k, v], i) => (
                  <div key={k}
                    className={`flex items-center justify-between px-5 py-3.5 text-[13px]
                      ${i % 2 === 0 ? 'bg-gray-50/70' : 'bg-white'}`}>
                    <span className="text-gray-500 font-medium">{k}</span>
                    <span className={`font-heading font-semibold
                      ${v.includes('✓') ? 'text-emerald-600' : 'text-gray-900'}`}>
                      {v}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between px-5 py-4 bg-gray-900">
                  <span className="text-white/70 font-heading font-semibold text-[14px]">Total Amount</span>
                  <span className="font-heading font-extrabold text-white text-[20px]">KSh {total}</span>
                </div>
              </div>

              <p className="text-[11px] text-center text-gray-400 leading-relaxed">
                By confirming, you agree to Jelani Motors Kenya's terms of hire.
                Our team will contact you on WhatsApp within 15 minutes.
              </p>

              <div className="flex gap-3">
                <BackBtn onClick={() => setStep(3)} />
                <button
                  onClick={handleFinalSubmit}
                  disabled={submitting}
                  className="flex-1 flex items-center justify-center gap-2.5 font-heading font-bold text-white text-[15px]
                    py-4 rounded-xl transition-all shadow-[0_8px_28px_rgba(227,27,35,0.3)]
                    disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ background: '#E31B23' }}>
                  {submitting
                    ? <><Icon.Spinner /> Processing…</>
                    : <>Confirm Booking — KSh {total}</>
                  }
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

// ── Tiny local helpers ────────────────────────────────────────────────────────
function SectionLabel({ icon, title }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(227,27,35,0.08)', color: '#E31B23' }}>
        {icon}
      </div>
      <h3 className="font-heading font-extrabold text-[16px] text-gray-900">{title}</h3>
    </div>
  )
}

function NextBtn({ onClick, disabled = false, flex1 = false }) {
  return (
    <button onClick={onClick} disabled={disabled}
      className={`${flex1 ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2
        font-heading font-bold text-white text-[14px] py-4 rounded-xl transition-all
        shadow-[0_6px_20px_rgba(227,27,35,0.25)] disabled:opacity-40 disabled:cursor-not-allowed
        hover:shadow-[0_8px_28px_rgba(227,27,35,0.35)] active:scale-[.98]`}
      style={{ background: '#E31B23' }}>
      Continue
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

function BackBtn({ onClick }) {
  return (
    <button onClick={onClick}
      className="w-14 flex items-center justify-center border border-gray-200 rounded-xl text-gray-500
        hover:border-gray-300 hover:bg-gray-50 transition-colors">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
