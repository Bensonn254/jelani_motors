import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', threshold = 0.08, as: Component = 'div', ...props }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <Component ref={ref} className={`${className} ${isVisible ? 'section-visible' : 'section-hidden'}`} {...props}>
      {children}
    </Component>
  )
}
