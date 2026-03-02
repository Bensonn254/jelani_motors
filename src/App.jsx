import { useEffect, useState, lazy, Suspense } from 'react'

// ── Critical initial render components ────────────────────
import Navbar            from './components/Navbar'
import HeroSection       from './components/HeroSection'
import BookingWidget     from './components/BookingWidget'
import { FeatureCards, AboutSection, HowWeWork, ServicesSection } from './components/Sections'

// ── Utility & overlay components ─────────────────────────
import SplashScreen      from './components/SplashScreen'
import WhatsAppButton    from './components/WhatsAppButton'
import ScrollToTop       from './components/ScrollToTop'
import ComingSoon        from './components/ComingSoon'
import { FallbackSpinner } from './components/ui'

// ── Lazy-loaded components (Below the fold) ──────────────
const FleetSection = lazy(() => import('./components/FleetSection'))
const TestimonialsCode = lazy(() => import('./components/TestimonialsAndFAQ').then(m => ({ default: m.Testimonials })))
const FAQCode          = lazy(() => import('./components/TestimonialsAndFAQ').then(m => ({ default: m.FAQ })))
const CTABannerCode    = lazy(() => import('./components/CTABannerAndFooter').then(m => ({ default: m.CTABanner })))
const FooterCode       = lazy(() => import('./components/CTABannerAndFooter').then(m => ({ default: m.Footer })))
const AdminLogin       = lazy(() => import('./components/AdminLogin'))

export default function App() {
  const [splashDone, setSplashDone] = useState(false)
  const [showAdmin,  setShowAdmin]  = useState(false)
  const [comingSoonPage, setComingSoonPage] = useState(null)

  // ── Global Coming Soon Listener ────────────────────────
  useEffect(() => {
    const handleComingSoon = (e) => {
      setComingSoonPage(e.detail.page)
    }
    window.addEventListener('show-coming-soon', handleComingSoon)
    return () => window.removeEventListener('show-coming-soon', handleComingSoon)
  }, [])

  // ── Scroll Reveal Observer ─────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    // Watch for DOM changes (lazy loaded components)
    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll('.section-hidden:not(.section-visible)').forEach(s => {
        observer.observe(s)
      })
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    // Initial check
    document.querySelectorAll('.section-hidden:not(.section-visible)').forEach(s => observer.observe(s))

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  // ── Splash gate ───────────────────────────────────────
  if (!splashDone) {
    return <SplashScreen onComplete={() => setSplashDone(true)} />
  }

  // ── Admin portal route ────────────────────────────────
  if (showAdmin) {
    return (
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><FallbackSpinner /></div>}>
        <AdminLogin onLogout={() => setShowAdmin(false)} />
      </Suspense>
    )
  }

  // ── Public site ───────────────────────────────────────
  return (
    <div className="min-h-screen">
      <Navbar onStaffPortal={() => setShowAdmin(true)} />
      <HeroSection />
      <BookingWidget />
      <FeatureCards />
      <AboutSection />
      <HowWeWork />
      <ServicesSection />

      {/* ── Below the fold (Lazy loaded) ─────────────── */}
      <Suspense fallback={<FallbackSpinner />}>
        <FleetSection />
        <TestimonialsCode />
        <FAQCode />
        <CTABannerCode />
        <FooterCode />
      </Suspense>

      {/* ── Global floating UI ───────────────────────── */}
      <WhatsAppButton />
      <ScrollToTop />

      {/* ── Global Coming Soon Modal ─────────────────── */}
      {comingSoonPage && (
        <ComingSoon page={comingSoonPage} onClose={() => setComingSoonPage(null)} />
      )}
    </div>
  )
}
