import { useEffect, useState } from 'react'

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut,  setFadeOut]  = useState(false)

  useEffect(() => {
    // Animate progress bar 0 → 100 over 1.8s
    const start = performance.now()
    const duration = 1800

    function tick(now) {
      const elapsed = now - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      setProgress(pct)
      if (pct < 100) {
        requestAnimationFrame(tick)
      } else {
        // Hold briefly then fade out
        setTimeout(() => {
          setFadeOut(true)
          setTimeout(onComplete, 500)
        }, 300)
      }
    }
    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg,#060810 0%,#0d1017 45%,#110d0d 100%)',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}>

      {/* Background dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="sp-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.05)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sp-dots)"/>
        </svg>
        {/* Red glow */}
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse,rgba(227,27,35,0.12) 0%,transparent 70%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">

        {/* Logo mark */}
        <div
          className="flex flex-col items-center gap-4"
          style={{ animation: 'splashFadeUp 0.7s ease 0.1s both' }}>
          <div className="p-5 rounded-3xl"
            style={{ background: 'rgba(227,27,35,0.12)', border: '1px solid rgba(227,27,35,0.2)' }}>
            <svg width="62" height="40" viewBox="0 0 38 24" fill="none">
              <path d="M3 16 Q19 3 35 12" stroke="#E31B23" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <ellipse cx="19" cy="18" rx="15" ry="5.5" fill="none" stroke="white" strokeWidth="1.5"/>
              <circle cx="9" cy="22" r="3" fill="white"/>
              <circle cx="29" cy="22" r="3" fill="white"/>
            </svg>
          </div>

          <div className="text-center">
            <h1 className="font-heading font-extrabold text-white tracking-tight"
              style={{ fontSize: 28, letterSpacing: '-0.5px' }}>
              JELANI MOTORS
            </h1>
            <div className="font-heading font-semibold tracking-[4px] text-[13px] mt-0.5"
              style={{ color: '#E31B23' }}>
              KENYA
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div
          className="w-[220px] flex flex-col items-center gap-3"
          style={{ animation: 'splashFadeUp 0.7s ease 0.3s both' }}>
          <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-none"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(to right, #E31B23, #ff6b6b)',
                boxShadow: '0 0 8px rgba(227,27,35,0.6)',
              }}
            />
          </div>
          <p className="text-white/30 text-[12px] font-heading tracking-widest uppercase">
            Loading Portal…
          </p>
        </div>

        {/* Tagline */}
        <p
          className="text-white/20 text-[12px] tracking-widest font-heading uppercase"
          style={{ animation: 'splashFadeUp 0.7s ease 0.5s both' }}>
          Executive Fleet Management
        </p>
      </div>

      {/* Bottom address */}
      <p className="absolute bottom-7 text-white/10 text-[11px] font-heading tracking-wide">
        FXQ2+5V3 Namanga Road, Yukos, Kitengela
      </p>

      <style>{`
        @keyframes splashFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
