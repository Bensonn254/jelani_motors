import { LogoSVG } from './ui'

/* ── CTA Banner ────────────────────────────────────────── */
export function CTABanner() {
  return (
    <section className="relative overflow-hidden min-h-[420px] flex items-center justify-center text-center section-hidden">
      <div className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1400&q=80&auto=format&fit=crop')",
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 px-10 py-20 max-w-[760px] max-sm:px-5">
        <h2 className="font-heading font-extrabold text-white tracking-tight mb-4"
          style={{ fontSize: 'clamp(30px,4vw,54px)', lineHeight: 1.1 }}>
          Ready to book your ride?
        </h2>
        <p className="text-[15px] text-white/70 leading-relaxed mb-9 max-w-[580px] mx-auto">
          Browse our fleet, choose your pickup and return dates, and complete your booking
          quickly with clear KSh pricing and no hidden steps.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="#fleet"
            className="inline-flex items-center gap-3 bg-brand-red text-white font-heading font-semibold text-sm px-7 py-[14px] rounded-full hover:bg-brand-dark transition group shadow-[0_8px_28px_rgba(227,27,35,0.3)]">
            Browse Cars
            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="#E31B23" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </a>
          <a href="#contact"
            className="inline-flex items-center gap-3 bg-white text-gray-900 font-heading font-semibold text-sm px-7 py-[14px] rounded-full hover:bg-gray-100 transition group">
            Contact Us
            <span className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ────────────────────────────────────────────── */
export function Footer({ onStaffPortal = () => {} }) {
  return (
    <footer id="contact" className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Subtle bg image */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=60&auto=format&fit=crop')",
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.04,
        }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-10 max-sm:px-5">
        {/* Top grid */}
        <div className="grid grid-cols-[1.2fr_1fr_1.3fr_1.5fr] gap-12 py-[70px] border-b border-white/[0.08]
          max-lg:grid-cols-2 max-lg:gap-9 max-sm:grid-cols-1 max-sm:gap-7">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <LogoSVG />
              <span className="font-heading font-bold text-white text-[20px]">Jelani Motors Kenya</span>
            </div>
            <p className="text-[14px] text-white/45 leading-relaxed max-w-[230px]">
              Executive car hire for corporate clients, government, NGOs &amp; safari transfers across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-heading font-bold text-white text-[15px] mb-5">Quick Links</div>
            <div className="flex flex-col gap-3">
              {[['About', '#about'], ['Fleet', '#fleet'], ['Services', '#services'], ['Contact', '#contact']].map(([l, h]) => (
                <a key={l} href={h} className="text-[14px] text-white/50 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-heading font-bold text-white text-[15px] mb-5">Contact Info</div>
            <div className="flex flex-col gap-4">
              {[
                { icon: 'phone', text: '+254 700 000 000' },
                { icon: 'mail',  text: 'info@jelanimotors.co.ke' },
                { icon: 'pin',   text: 'FXQ2+5V3, Namanga Road, Yukos, Kitengela' },
              ].map(({ icon, text }) => (
                <div key={icon} className="flex items-start gap-3 text-[14px] text-white/50">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                    {icon === 'phone' && <path d="M3 3h3l1.5 3-1.5 1.5c.8 1.5 2 2.7 3.5 3.5L11 9.5l3 1.5v3c-5.5 0-11-5.5-11-11z" stroke="#E31B23" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>}
                    {icon === 'mail'  && <><rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#E31B23" strokeWidth="1.4"/><path d="M2 5l6 4.5L14 5" stroke="#E31B23" strokeWidth="1.4" strokeLinecap="round"/></>}
                    {icon === 'pin'   && <><path d="M8 2a4 4 0 014 4c0 3-4 8-4 8S4 9 4 6a4 4 0 014-4z" stroke="#E31B23" strokeWidth="1.4"/><circle cx="8" cy="6" r="1.5" stroke="#E31B23" strokeWidth="1.3"/></>}
                  </svg>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="font-heading font-bold text-white text-[15px] mb-2">Newsletter</div>
            <p className="text-[14px] text-white/45 mb-4">Get updates and rental news.</p>
            <div className="flex rounded-full overflow-hidden border border-white/15">
              <input
                type="email"
                placeholder="Your Email"
                className="newsletter-input"
              />
              <button className="bg-white text-gray-900 font-heading font-bold text-[13px] px-5 py-3 hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex items-center justify-between gap-4 flex-wrap max-sm:flex-col max-sm:items-start">
          <p className="text-[13px] text-white/35">© 2026 Jelani Motors Kenya. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13px] text-white/35 hover:text-white transition-colors">Terms &amp; Conditions</a>
            <a href="#" className="text-[13px] text-white/35 hover:text-white transition-colors">Privacy &amp; Policy</a>
            {/* Staff portal entry — subtle, for demo navigation */}
            <button
              onClick={onStaffPortal}
              className="flex items-center gap-1.5 text-[12px] text-white/20 hover:text-white/50 transition-colors font-heading tracking-wide">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Staff Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
