import { useState } from 'react'
import { LogoSVG } from './ui'
import { NAV_LINKS } from '../data'
import ComingSoon from './ComingSoon'

const ChevronDown = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="inline">
    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const ChevronRight = ({ open }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
    style={{ transition: 'transform .25s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

// Sub-links: real anchors get href, dead ones get a label for ComingSoon
const DRAWER_SUBS = {
  Fleet: [
    { label: 'Land Cruiser V8', href: '#fleet' },
    { label: 'Toyota Prado',    href: '#fleet' },
    { label: 'Range Rover',     href: '#fleet' },
    { label: 'Executive Vans',  href: '#fleet' },
  ],
  Services: [
    { label: 'All Services',       href: '#services' },
    { label: 'Hire With Driver',   href: '#services' },
    { label: 'Airport Transfer',   href: '#services' },
    { label: 'Corporate Solutions',href: '#services' },
  ],
  Pages: [
    { label: 'Blog Archive',  href: null },
    { label: 'Single Post',   href: null },
    { label: 'Testimonials',  href: '#testimonials' },
    { label: '404 Page',      href: null },
  ],
}

export default function Navbar() {
  const [drawerOpen,  setDrawerOpen]  = useState(false)
  const [openSub,     setOpenSub]     = useState(null)
  const [comingSoon,  setComingSoon]  = useState(null)   // page label string

  const toggleSub = (label) => setOpenSub(p => p === label ? null : label)

  function handleSubLink(sub) {
    if (sub.href) {
      setDrawerOpen(false)
      // smooth scroll if it's an anchor
      if (sub.href.startsWith('#')) {
        const el = document.querySelector(sub.href)
        el?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      setComingSoon(sub.label)
    }
  }

  return (
    <>
      {/* ── Desktop Nav ─────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-[200] bg-white shadow-[0_1px_10px_rgba(0,0,0,0.07)]">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2.5">
              <LogoSVG dark />
              <span className="font-heading font-bold leading-tight" style={{ fontSize: 18 }}>
                Jelani Motors
                <span className="block text-[11px] font-medium text-brand-red tracking-widest">KENYA</span>
              </span>
            </a>

            {/* Links – desktop */}
            <ul className="hidden lg:flex items-center gap-7 list-none">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href}
                    className="flex items-center gap-1 text-[14px] font-medium text-gray-700 hover:text-brand-red transition-colors">
                    {link.label}
                    {link.dropdown && <ChevronDown />}
                  </a>
                </li>
              ))}
            </ul>

            {/* Book Now – desktop */}
            <a href="#booking"
              className="hidden lg:inline-flex items-center gap-3 bg-brand-red text-white font-heading
                font-semibold text-sm px-6 py-3 rounded-full hover:bg-brand-dark transition
                shadow-[0_6px_20px_rgba(227,27,35,0.25)] group">
              Book Now
              <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="#E31B23" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>

            <div className="lg:hidden w-8 h-8" />
          </div>
        </div>
      </nav>

      {/* ── Floating hamburger (mobile) ──────────────── */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="fixed top-3 right-3 z-[250] w-[52px] h-[52px] rounded-full bg-brand-red
          flex items-center justify-center shadow-lg lg:hidden"
        aria-label="Open menu">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* ── Drawer overlay ────────────────────────────── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[300]"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* ── Side Drawer ───────────────────────────────── */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[280px] bg-[#111] z-[301] flex flex-col
          overflow-y-auto scrollbar-hide transition-transform duration-[350ms]
          ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        {/* Head */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <LogoSVG />
            <span className="font-heading font-bold text-white text-[16px] leading-tight">
              Jelani Motors<br/>
              <span className="text-[11px] font-semibold tracking-widest text-brand-red">KENYA</span>
            </span>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-9 h-9 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 4l8 8M12 4l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="py-4 flex-1">
          {NAV_LINKS.map(link => (
            <div key={link.label}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleSub(link.label)}
                    className="flex w-full items-center justify-between px-6 py-[14px]
                      text-[16px] font-medium text-white/75 hover:text-white transition-colors text-left">
                    {link.label}
                    <ChevronRight open={openSub === link.label} />
                  </button>
                  {openSub === link.label && (
                    <div className="bg-white/[0.04]">
                      {DRAWER_SUBS[link.label]?.map(sub => (
                        <button
                          key={sub.label}
                          onClick={() => handleSubLink(sub)}
                          className="flex w-full items-center justify-between py-2.5 pl-10 pr-6
                            text-[14px] text-white/55 hover:text-white transition-colors text-left">
                          {sub.label}
                          {!sub.href && (
                            <span className="text-[10px] font-heading font-bold text-white/20 bg-white/10
                              px-1.5 py-0.5 rounded-md tracking-wide">SOON</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="block px-6 py-[14px] text-[16px] font-medium text-white/75 hover:text-white transition-colors">
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA in drawer */}
        <div className="px-6 py-5 border-t border-white/[0.08]">
          <a href="#booking"
            onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-center gap-2 w-full font-heading font-bold text-white
              text-[14px] py-3.5 rounded-xl transition-colors"
            style={{ background: '#E31B23' }}>
            Book Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </aside>

      {/* ── Coming Soon modal for dead links ─────────── */}
      {comingSoon && (
        <ComingSoon page={comingSoon} onClose={() => setComingSoon(null)} />
      )}
    </>
  )
}
