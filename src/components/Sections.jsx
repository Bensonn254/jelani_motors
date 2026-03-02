import { SectionBadge, BtnRed, BtnIconRed, CheckIcon } from './ui'
import { SERVICES } from '../data'
import Reveal from './Reveal'

/* ── Feature Cards ─────────────────────────────────────── */
const FEATS = [
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Safe & Verified Fleet', desc: 'Every vehicle is inspected, insured, and GPS-tracked for your peace of mind.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2"/><path d="M9 10c0-1.5 1-2.5 3-2.5s3 1 3 2.5c0 2-3 2-3 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="17" r="1" fill="#fff"/></svg>, title: 'Transparent KSh Pricing', desc: 'Fair and well-balanced pricing with no hidden charges — quoted in Kenyan Shillings.' },
  { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: '24/7 Kenya Support', desc: 'Our Nairobi-based team is available round the clock — call, WhatsApp, or online.' },
]

export function FeatureCards() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5">
        <div className="grid md:grid-cols-3 divide-x divide-gray-100 max-md:divide-x-0 max-md:divide-y">
          {FEATS.map((f, i) => (
            <div key={i} className="flex items-start gap-5 py-9 px-8 first:pl-0 last:pr-0 max-md:px-0 max-md:py-7 hover:bg-gray-50 transition-colors group cursor-default">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-red flex items-center justify-center shadow-[0_6px_18px_rgba(227,27,35,0.2)] group-hover:scale-105 transition-transform">
                {f.icon}
              </div>
              <div>
                <div className="font-heading font-semibold text-[15px] text-gray-900 mb-2">{f.title}</div>
                <div className="text-[13px] text-brand-red leading-relaxed">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── About Section ─────────────────────────────────────── */
export function AboutSection() {
  return (
    <>
      {/* Part 1 */}
      <Reveal as="section" id="about" className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionBadge>About Jelani Motors Kenya</SectionBadge>
              <h2 className="font-heading font-extrabold leading-[1.12] tracking-tight mb-7"
                style={{ fontSize: 'clamp(28px,3.5vw,46px)' }}>
                We are committed to providing fast, reliable, and professional{' '}
                <span className="text-gray-400 italic">corporate car hire across Kenya.</span>
              </h2>
              <BtnRed href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('show-coming-soon', { detail: { page: 'Fleet Page' } })) }}>See Our Fleet <BtnIconRed /></BtnRed>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80&auto=format&fit=crop"
                alt="Range Rover – Jelani Motors Kenya" className="w-full h-80 object-cover max-sm:h-60" loading="lazy" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Part 2 – Trusted Partner */}
      <Reveal as="section" className="pb-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image with overlay */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80&auto=format&fit=crop"
                  alt="Toyota Prado – Jelani Motors Kenya"
                  className="w-full object-cover max-sm:h-72"
                  style={{ height: 440 }}
                  loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-6 rounded-b-2xl flex items-end justify-between gap-4 flex-wrap">
                  <p className="text-white font-heading font-bold text-base leading-snug max-w-[200px]">
                    No matter the situation, Jelani Motors is always just a call away.
                  </p>
                  <div className="bg-white text-gray-900 font-heading font-bold text-sm px-5 py-3 rounded-xl shadow-lg whitespace-nowrap">
                    +254 700 000 000
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5">
              <h2 className="font-heading font-extrabold leading-[1.12] tracking-tight"
                style={{ fontSize: 'clamp(26px,3.2vw,44px)' }}>
                Your trusted partner in{' '}
                <em className="text-brand-red not-italic italic block">reliable car hire</em>
              </h2>
              <p className="text-[15px] text-gray-500 leading-[1.72] max-w-[480px]">
                We take pride in our fleet and customer experience. Hire with confidence, knowing
                we're here to support every step of your journey across Kenya.
              </p>
              <div className="h-px bg-gray-100 my-1" />
              <div className="flex flex-col gap-6">
                {[
                  { t: 'Easy Booking Experience', d: "We've simplified the booking steps so you can choose a vehicle, set your dates, and confirm your hire in just a few clicks." },
                  { t: 'Convenient Pick-Up & Return', d: 'Flexible pick-up and return options are available to match your schedule — including JKIA, CBD Nairobi, and Kitengela.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckIcon />
                    <div>
                      <div className="font-heading font-bold text-[16px] text-gray-900 mb-1.5">{item.t}</div>
                      <div className="text-[14px] text-gray-500 leading-relaxed">{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <BtnRed href="#booking" className="w-fit mt-2">Book Now <BtnIconRed /></BtnRed>
            </div>

          </div>
        </div>
      </Reveal>
    </>
  )
}

/* ── How We Work ───────────────────────────────────────── */
export function HowWeWork() {
  return (
    <Reveal as="section" id="how" className="grid lg:grid-cols-2 min-h-[520px]" style={{ background: '#111' }}>
      <div className="overflow-hidden max-lg:h-[280px]">
        <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80&auto=format&fit=crop"
          alt="Executive car on Kenyan road" className="w-full h-full object-cover opacity-85" loading="lazy" />
      </div>
      <div className="px-[60px] py-[70px] flex flex-col justify-center gap-9 max-lg:px-6 max-lg:py-10">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-white text-[13px] font-medium w-fit">
          <span className="w-2 h-2 rounded-full bg-brand-red" />How We Work
        </div>
        <h2 className="font-heading font-extrabold text-white leading-[1.1] tracking-tight"
          style={{ fontSize: 'clamp(30px,3.5vw,50px)' }}>
          Hire your car in 3 easy steps
        </h2>
        <div>
          {[
            ['01', 'Choose Your Vehicle', 'Explore our diverse Kenyan fleet — from Prados to Land Cruisers. Find the perfect vehicle for your journey.'],
            ['02', 'Book Online', 'Book instantly on our platform. Select dates, corporate address and complete KYC verification in minutes.'],
            ['03', 'Pick Up & Drive', 'Head to your pickup location and grab your keys. Enjoy a smooth ride in a well-maintained Jelani Motors vehicle.'],
          ].map(([num, title, desc], i) => (
            <div key={i} className="flex items-start gap-5 py-[22px] border-b border-white/[0.08] last:border-b-0">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-brand-red flex items-center justify-center font-heading font-bold text-[14px] text-white mt-0.5">
                {num}
              </div>
              <div>
                <div className="font-heading font-bold text-[18px] text-white mb-2">{title}</div>
                <div className="text-[14px] text-white/55 leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

/* ── Services Section ──────────────────────────────────── */
export function ServicesSection() {
  return (
    <Reveal as="section" id="services" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5">
        <div className="flex items-end justify-between mb-10 gap-5 max-sm:flex-col max-sm:items-start">
          <div>
            <SectionBadge>Our Services</SectionBadge>
            <div className="font-heading font-extrabold tracking-tight" style={{ fontSize: 'clamp(28px,3.5vw,46px)', lineHeight: 1.1 }}>
              Flexible hire solutions
            </div>
            <div className="font-heading font-bold italic text-gray-400" style={{ fontSize: 'clamp(26px,3.3vw,44px)', lineHeight: 1.1 }}>
              for every journey
            </div>
          </div>
          <BtnRed href="#" className="flex-shrink-0">View Services <BtnIconRed /></BtnRed>
        </div>

        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {SERVICES.map((svc, i) => (
            <div key={i}
              className={`rounded-2xl p-7 flex flex-col gap-3.5 cursor-default transition-all
                ${svc.featured
                  ? 'bg-brand-red'
                  : 'bg-gray-100 hover:bg-gray-200 border border-transparent hover:border-gray-200'
                }`}>
              <div className={`w-[54px] h-[54px] rounded-full flex items-center justify-center
                ${svc.featured ? 'bg-white/20' : 'bg-white'}`}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <rect x="2" y="8" width="22" height="12" rx="3" stroke={svc.featured ? '#fff' : '#111'} strokeWidth="1.6"/>
                  <circle cx="7" cy="20" r="2" stroke={svc.featured ? '#fff' : '#111'} strokeWidth="1.4"/>
                  <circle cx="19" cy="20" r="2" stroke={svc.featured ? '#fff' : '#111'} strokeWidth="1.4"/>
                  <path d="M6 8V6a5 5 0 0114 0v2" stroke={svc.featured ? '#fff' : '#111'} strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
              <div className={`font-heading font-bold text-[18px] leading-snug ${svc.featured ? 'text-white' : 'text-gray-900'}`}>
                {svc.title}
              </div>
              <div className={`text-[13px] leading-relaxed flex-1 ${svc.featured ? 'text-white/80' : 'text-gray-500'}`}>
                {svc.desc}
              </div>
              <a href="#"
                onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('show-coming-soon', { detail: { page: svc.title } })) }}
                className={`text-[13px] font-semibold flex items-center gap-1.5 transition-gap
                  ${svc.featured ? 'text-white underline underline-offset-2' : 'text-brand-red'}`}>
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
