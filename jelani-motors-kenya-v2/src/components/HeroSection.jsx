import { BtnRed, BtnGhost, BtnIconRed, BtnIconGhost } from './ui'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(108deg,#0e0e0e 0%,#161616 38%,#1f1a12 65%,#2d2010 100%)' }}>

      {/* Background photo */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80&auto=format&fit=crop')",
          backgroundSize: 'cover', backgroundPosition: 'center 40%', opacity: 0.18
        }} />
      {/* Gradient overlay */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(to right,rgba(10,10,10,1) 0%,rgba(10,10,10,.85) 45%,rgba(10,10,10,.28) 100%)' }} />
      {/* Red bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-red z-10" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-10 max-sm:px-5">
        <div className="grid lg:grid-cols-2 gap-10 items-center pt-[110px] pb-[80px]">

          {/* ── Left ────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            {/* Trust badge */}
            <div className="anim-fade-up anim-delay-1 inline-flex items-center gap-2 w-fit
              bg-white/[0.08] border border-white/[0.12] backdrop-blur-sm px-[18px] py-2 rounded-full
              text-white text-[13px] font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse-dot" />
              Kenya's #1 Corporate Car Hire — 2,000+ Executive Clients
            </div>

            {/* Heading */}
            <h1 className="anim-fade-up anim-delay-2 font-heading font-extrabold leading-[1.07] tracking-[-1px]">
              <span className="block text-white" style={{ fontSize: 'clamp(34px,4.5vw,60px)' }}>Executive &amp; Reliable</span>
              <span className="block" style={{ fontSize: 'clamp(34px,4.5vw,60px)' }}>
                <em className="text-brand-red not-italic italic">Car Hire</em>
                <span className="text-white"> Services</span>
              </span>
            </h1>

            {/* Sub */}
            <p className="anim-fade-up anim-delay-3 text-[15px] leading-[1.72] text-white/50 max-w-[420px]">
              Kenya's premier corporate fleet for Nairobi, Kitengela &amp; beyond.<br />
              From board meetings to safari transfers — we've got you covered.
            </p>

            {/* CTAs */}
            <div className="anim-fade-up anim-delay-4 flex flex-wrap items-center gap-4">
              <BtnRed href="#booking">Book Now <BtnIconRed /></BtnRed>
              <BtnGhost href="#fleet">View Fleet <BtnIconGhost /></BtnGhost>
            </div>

            {/* Divider */}
            <div className="anim-fade-up anim-delay-5 w-[180px] h-px bg-white/[0.13]" />

            {/* Stats */}
            <div className="anim-fade-up anim-delay-6 flex gap-11">
              {[['200+', 'Executive Cars'], ['2K+', 'Corporate Clients'], ['24/7', 'Support']].map(([v, l]) => (
                <div key={l}>
                  <div className="font-heading font-extrabold text-white leading-none"
                    style={{ fontSize: 'clamp(26px,3vw,40px)' }}>{v}</div>
                  <div className="text-[12px] text-white/45 mt-1 tracking-[0.3px]">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right ───────────────────────────────── */}
          <div className="anim-slide-in anim-delay-car relative flex items-center justify-end">
            <div className="absolute inset-[-20px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 70% 55% at 60% 55%,rgba(180,100,40,.22) 0%,transparent 68%)' }} />
            <div className="relative z-10 w-full max-w-[620px] rounded-xl overflow-hidden
              shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900&q=85&auto=format&fit=crop"
                alt="Toyota Land Cruiser V8 – Jelani Motors Kenya"
                className="w-full h-[380px] object-cover max-sm:h-[240px]"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
