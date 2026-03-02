// ── Shared tiny components ──────────────────────────────────

export function ArrowIcon({ color = '#E31B23', size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
      <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function BtnRed({ href = '#', children, onClick, className = '' }) {
  const cls = `inline-flex items-center gap-3 bg-brand-red text-white font-heading font-semibold text-[14px] px-7 py-[14px] rounded-full hover:bg-brand-dark transition-all group shadow-lg shadow-red-200 ${className}`
  if (onClick) return <button onClick={onClick} className={cls}>{children}</button>
  return <a href={href} className={cls}>{children}</a>
}

export function BtnIconRed() {
  return (
    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
      <ArrowIcon color="#E31B23" />
    </span>
  )
}

export function BtnGhost({ href = '#', children }) {
  return (
    <a href={href} className="inline-flex items-center gap-3 text-white font-heading font-semibold text-[14px] px-7 py-[14px] rounded-full border border-white/30 hover:border-brand-red hover:bg-brand-red transition-all group">
      {children}
    </a>
  )
}

export function BtnIconGhost() {
  return (
    <span className="w-7 h-7 rounded-full bg-[#222] group-hover:bg-brand-dark flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-colors duration-300">
      <ArrowIcon color="white" />
    </span>
  )
}

export function SectionBadge({ children, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-1.5 rounded-full text-[13px] font-medium text-brand-red mb-5 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-brand-red" />
      {children}
    </div>
  )
}

export function CheckIcon() {
  return (
    <div className="flex-shrink-0 w-[26px] h-[26px] rounded-full bg-brand-red flex items-center justify-center mt-0.5">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.5 7l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export function LogoSVG({ dark = false }) {
  const stroke = dark ? '#111' : '#fff'
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
      <path d="M3 16 Q19 3 35 12" stroke="#E31B23" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="19" cy="18" rx="15" ry="5.5" fill="none" stroke={stroke} strokeWidth="1.5"/>
      <circle cx="9" cy="22" r="3" fill={stroke}/>
      <circle cx="29" cy="22" r="3" fill={stroke}/>
    </svg>
  )
}

export function Spinner({ size = 24, className = 'text-brand-red' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`animate-spin ${className}`}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity=".25"/>
      <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

export function FallbackSpinner() {
  return (
    <div className="w-full h-[30vh] min-h-[300px] flex items-center justify-center">
      <Spinner size={32} />
    </div>
  )
}
