import { useEffect, useState } from 'react'

// ── Page components ───────────────────────────────────────
import Navbar            from './components/Navbar'
import HeroSection       from './components/HeroSection'
import BookingWidget     from './components/BookingWidget'
import { FeatureCards, AboutSection, HowWeWork, ServicesSection } from './components/Sections'
import FleetSection      from './components/FleetSection'
import { Testimonials, FAQ } from './components/TestimonialsAndFAQ'
import { CTABanner, Footer } from './components/CTABannerAndFooter'

// ── Utility & overlay components ─────────────────────────
import SplashScreen      from './components/SplashScreen'
import AdminLogin        from './components/AdminLogin'
import WhatsAppButton    from './components/WhatsAppButton'
import ScrollToTop       from './components/ScrollToTop'

export default function App() {
  const [splashDone, setSplashDone] = useState(false)
  const [showAdmin,  setShowAdmin]  = useState(false)

  // ── Scroll-triggered section reveal ──────────────────
  useEffect(() => {
    if (!splashDone) return
    const els = document.querySelectorAll('.section-hidden')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('section-hidden')
            e.target.classList.add('section-visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [splashDone])

  // ── Splash gate ───────────────────────────────────────
  if (!splashDone) {
    return <SplashScreen onComplete={() => setSplashDone(true)} />
  }

  // ── Admin portal route ────────────────────────────────
  if (showAdmin) {
    return <AdminLogin onLogout={() => setShowAdmin(false)} />
  }

  // ── Public site ───────────────────────────────────────
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BookingWidget />
      <FeatureCards />
      <AboutSection />
      <HowWeWork />
      <ServicesSection />
      <FleetSection />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer onStaffPortal={() => setShowAdmin(true)} />

      {/* ── Global floating UI ───────────────────────── */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
