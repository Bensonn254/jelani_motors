import { BtnRed, BtnGhost, BtnIconRed, BtnIconGhost } from './ui'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh' }}>

      {/* Background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1600&q=80&auto=format&fit=crop')",
          backgroundSize:     'cover',
          backgroundPosition: '50% 100%',
          opacity:            0.88,
        }}
      />

      {/* Directional dark overlay — heavy left, fades right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(108deg, rgba(5,5,8,0.93) 0%, rgba(5,5,8,0.82) 35%, rgba(5,5,8,0.50) 60%, rgba(5,5,8,0.15) 100%)',
        }}
      />

      {/* Red bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] z-10"
        style={{ background: '#E31B23' }}
      />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-10 max-sm:px-5">

        {/*
          Key fix: Ensure bottom padding isn't excessive on small screens.
          The car is on the right/bottom, so content sits top-left.
        */}
        <div className="flex flex-col gap-5 sm:gap-6 max-w-[600px] w-full pt-[100px] sm:pt-[132px] pb-[40px] sm:pb-[90px]">

          {/* Trust badge */}
          <div className="anim-fade-up anim-delay-1 inline-flex items-center gap-2 w-fit
            bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm
            px-[16px] py-1.5 sm:px-[18px] sm:py-2 rounded-full text-white text-[11px] sm:text-[13px] font-medium leading-tight">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse-dot" style={{ background: '#E31B23' }} />
            Kenya's #1 Corporate Car Hire — 2,000+ Executive Clients
          </div>

          {/* Heading */}
          <h1
            className="anim-fade-up anim-delay-2 font-heading font-extrabold leading-[1.07] tracking-[-1px]"
            style={{ fontSize: 'clamp(34px, 5vw, 66px)' }}>
            <span className="block text-white">Executive &amp; Reliable</span>
            <span className="block">
              <em className="not-italic italic" style={{ color: '#E31B23' }}>Car Hire</em>
              <span className="text-white"> Services</span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="anim-fade-up anim-delay-3 text-white/75 leading-[1.72] max-w-[460px]"
            style={{ fontSize: 'clamp(14px, 1.4vw, 17px)' }}>
            Kenya's premier corporate fleet for Nairobi, Kitengela &amp; beyond.<br />
            From board meetings to safari transfers — we've got you covered.
          </p>

          {/* CTAs */}
          <div className="anim-fade-up anim-delay-4 flex flex-wrap items-center gap-4">
            <BtnRed href="#booking">Book Now <BtnIconRed /></BtnRed>
            <BtnGhost href="#fleet">View Fleet <BtnIconGhost /></BtnGhost>
          </div>

          {/* Divider */}
          <div className="anim-fade-up anim-delay-5 w-[120px] sm:w-[160px] h-px bg-white/[0.15] mt-2 sm:mt-0" />

          {/* Stats */}
          <div className="anim-fade-up anim-delay-6 flex gap-6 sm:gap-10 flex-wrap">
            {[
              ['200+', 'Executive Cars'],
              ['2K+',  'Corporate Clients'],
              ['24/7', 'Support'],
            ].map(([v, l]) => (
              <div key={l}>
                <div
                  className="font-heading font-extrabold text-white leading-none"
                  style={{ fontSize: 'clamp(22px, 2.8vw, 42px)' }}>
                  {v}
                </div>
                <div className="text-[10px] sm:text-[12px] text-white/50 mt-1 sm:mt-2 tracking-[0.3px] uppercase">{l}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}