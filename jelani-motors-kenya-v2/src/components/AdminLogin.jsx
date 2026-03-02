import { useState } from 'react'
import AdminDashboard from './AdminDashboard'

// ─── Logo SVG ───────────────────────────────────────────────────────────────
function JelaniLogo({ size = 48 }) {
  return (
    <svg width={size} height={Math.round(size * 0.63)} viewBox="0 0 38 24" fill="none">
      <path d="M3 16 Q19 3 35 12" stroke="#E31B23" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="19" cy="18" rx="15" ry="5.5" fill="none" stroke="white" strokeWidth="1.5"/>
      <circle cx="9" cy="22" r="3" fill="white"/>
      <circle cx="29" cy="22" r="3" fill="white"/>
    </svg>
  )
}

// ─── Eye toggle icon ────────────────────────────────────────────────────────
function EyeIcon({ open }) {
  return open ? (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  ) : (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  )
}

// ─── Animated background grid dots ─────────────────────────────────────────
function GridDots() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Radial glow */}
      <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(ellipse,#E31B23 0%,transparent 70%)' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[400px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse,#3b82f6 0%,transparent 70%)' }} />

      {/* Dot grid */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.06)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)"/>
      </svg>

      {/* Thin accent lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] opacity-20"
        style={{ background: 'linear-gradient(to right,transparent,#E31B23 50%,transparent)' }} />
      <div className="absolute bottom-0 left-0 w-full h-[1px] opacity-10"
        style={{ background: 'linear-gradient(to right,transparent,rgba(255,255,255,0.4) 50%,transparent)' }} />
    </div>
  )
}

// ─── Main AdminLogin Component ──────────────────────────────────────────────
export default function AdminLogin({ onLogout = () => {} }) {
  const [email,          setEmail]          = useState('')
  const [password,       setPassword]       = useState('')
  const [showPassword,   setShowPassword]   = useState(false)
  const [error,          setError]          = useState('')
  const [loading,        setLoading]        = useState(false)
  const [isAuthenticated,setIsAuthenticated]= useState(false)

  // ── Fake auth handler ─────────────────────────────────
  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate a network round-trip (800 ms)
    setTimeout(() => {
      if (
        email.trim().toLowerCase() === 'admin@jelanimotors.co.ke' &&
        password === 'admin123'
      ) {
        setIsAuthenticated(true)
      } else {
        setError('Unauthorized Access. Check Credentials.')
        setLoading(false)
        // Shake the card — add class then remove
        const card = document.getElementById('login-card')
        if (card) {
          card.style.animation = 'shake 0.4s ease'
          setTimeout(() => card.style.animation = '', 450)
        }
      }
    }, 800)
  }

  // ── If authenticated → render the dashboard ───────────
  if (isAuthenticated) return <AdminDashboard onLogout={onLogout} />

  // ── Login screen ──────────────────────────────────────
  return (
    <>
      {/* Shake keyframe injected inline so no extra CSS file needed */}
      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-8px)}
          40%{transform:translateX(8px)}
          60%{transform:translateX(-5px)}
          80%{transform:translateX(5px)}
        }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(20px)}
          to{opacity:1;transform:translateY(0)}
        }
        .anim-login{animation:fadeUp 0.6s ease forwards}
        .anim-login-d1{animation-delay:0.05s;opacity:0}
        .anim-login-d2{animation-delay:0.15s;opacity:0}
        .anim-login-d3{animation-delay:0.25s;opacity:0}
        .anim-login-d4{animation-delay:0.35s;opacity:0}
      `}</style>

      <div className="min-h-screen flex items-center justify-center p-5 relative font-body"
        style={{ background: 'linear-gradient(135deg,#060810 0%,#0d1017 40%,#110d0d 100%)' }}>

        <GridDots />

        {/* ── Login card ─────────────────────────────── */}
        <div id="login-card"
          className="relative w-full max-w-[420px] z-10">

          {/* Card glow */}
          <div className="absolute inset-[-1px] rounded-3xl opacity-30 pointer-events-none"
            style={{ background: 'linear-gradient(135deg,#E31B23 0%,transparent 50%,rgba(59,130,246,0.3) 100%)',
                     filter: 'blur(0px)' }} />

          <div className="relative bg-[#12151c] border border-white/[0.07] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]">

            {/* Top red accent line */}
            <div className="h-[3px] w-full" style={{ background: 'linear-gradient(to right,#E31B23,#ff6b6b,#E31B23)' }} />

            <div className="px-9 pt-10 pb-10">

              {/* ── Branding ─────────────────────────── */}
              <div className="anim-login anim-login-d1 flex flex-col items-center text-center mb-9">
                <div className="mb-5 p-4 rounded-2xl"
                  style={{ background: 'rgba(227,27,35,0.1)', border: '1px solid rgba(227,27,35,0.2)' }}>
                  <JelaniLogo size={42} />
                </div>
                <h1 className="font-heading font-extrabold text-white text-[22px] tracking-tight leading-snug mb-1.5">
                  JELANI MOTORS KENYA
                </h1>
                <p className="text-[13px] text-white/35 font-medium tracking-wide">
                  Secure Fleet Management Portal
                </p>

                {/* Security badge */}
                <div className="flex items-center gap-1.5 mt-4 bg-white/[0.04] border border-white/[0.07]
                  px-3.5 py-1.5 rounded-full">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#10b981" stroke="#10b981" strokeWidth="1"/>
                  </svg>
                  <span className="text-[11px] font-semibold font-heading text-emerald-400 tracking-wider">
                    256-BIT ENCRYPTED · ADMIN ONLY
                  </span>
                </div>
              </div>

              {/* ── Form ─────────────────────────────── */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Email field */}
                <div className="anim-login anim-login-d2 flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.9px] text-white/40 font-heading">
                    Admin Email
                  </label>
                  <div className="flex items-center gap-3 bg-white/[0.04] border rounded-xl px-4 py-3.5 transition-all focus-within:border-[#E31B23] focus-within:bg-white/[0.06]"
                    style={{ borderColor: error ? 'rgba(227,27,35,0.4)' : 'rgba(255,255,255,0.08)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-white/25">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                      <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                    <input
                      type="email"
                      value={email}
                      onChange={e => { setEmail(e.target.value); setError('') }}
                      placeholder="admin@jelanimotors.co.ke"
                      autoComplete="username"
                      required
                      className="flex-1 bg-transparent border-0 outline-none text-white text-[14px] placeholder:text-white/20 font-body"
                    />
                  </div>
                </div>

                {/* Password field */}
                <div className="anim-login anim-login-d3 flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.9px] text-white/40 font-heading">
                    Password
                  </label>
                  <div className="flex items-center gap-3 bg-white/[0.04] border rounded-xl px-4 py-3.5 transition-all focus-within:border-[#E31B23] focus-within:bg-white/[0.06]"
                    style={{ borderColor: error ? 'rgba(227,27,35,0.4)' : 'rgba(255,255,255,0.08)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-white/25">
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                      <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={e => { setPassword(e.target.value); setError('') }}
                      placeholder="••••••••••"
                      autoComplete="current-password"
                      required
                      className="flex-1 bg-transparent border-0 outline-none text-white text-[14px] placeholder:text-white/20 tracking-widest font-body"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(p => !p)}
                      className="flex-shrink-0 text-white/25 hover:text-white/60 transition-colors">
                      <EyeIcon open={showPassword} />
                    </button>
                  </div>
                </div>

                {/* Error message */}
                <div className={`flex items-center gap-2 transition-all duration-300 overflow-hidden
                  ${error ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <circle cx="12" cy="12" r="10" stroke="#E31B23" strokeWidth="1.7"/>
                    <path d="M12 8v4M12 16h.01" stroke="#E31B23" strokeWidth="1.7" strokeLinecap="round"/>
                  </svg>
                  <p className="text-[12px] font-semibold font-heading" style={{ color: '#E31B23' }}>
                    {error}
                  </p>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="anim-login anim-login-d4 relative mt-1 w-full flex items-center justify-center gap-2.5
                    font-heading font-bold text-[15px] text-white py-4 rounded-xl
                    transition-all duration-200 overflow-hidden group
                    disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ background: loading ? '#9a1219' : '#E31B23',
                           boxShadow: loading ? 'none' : '0 8px 32px rgba(227,27,35,0.35)' }}>

                  {/* Shimmer on hover */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.12) 50%,transparent 60%)' }} />

                  {loading ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="animate-spin">
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.25)" strokeWidth="3"/>
                        <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                      Authenticating…
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Access Portal
                    </>
                  )}
                </button>

              </form>

              {/* ── Hint for demo ─────────────────────── */}
              <div className="mt-7 p-4 rounded-xl border border-dashed border-white/[0.08] bg-white/[0.02]">
                <p className="text-center text-[11px] text-white/25 font-heading tracking-wide uppercase mb-2">
                  Demo Credentials
                </p>
                <div className="flex flex-col gap-1.5 text-center">
                  <p className="text-[12px] font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    📧 admin@jelanimotors.co.ke
                  </p>
                  <p className="text-[12px] font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    🔑 admin123
                  </p>
                </div>
              </div>

            </div>

            {/* Card footer */}
            <div className="px-9 py-4 border-t border-white/[0.05] flex items-center justify-between bg-white/[0.01]">
              <span className="text-[11px] text-white/20 font-heading tracking-wide">
                © 2026 JELANI MOTORS KENYA
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-white/20 font-heading">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
                v1.0 · Secure
              </span>
            </div>

          </div>
        </div>

        {/* Bottom centre watermark */}
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] text-white/10 font-heading tracking-widest uppercase whitespace-nowrap">
          FXQ2+5V3 Namanga Road, Yukos, Kitengela · +254 700 000 000
        </p>

      </div>
    </>
  )
}
