import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-6 z-[390] w-11 h-11 rounded-full
        flex items-center justify-center transition-all duration-300
        shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:scale-110 active:scale-95"
      style={{
        background:   '#111111',
        opacity:      visible ? 1 : 0,
        transform:    visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)',
        pointerEvents: visible ? 'all' : 'none',
      }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M18 15l-6-6-6 6"
          stroke="white" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
