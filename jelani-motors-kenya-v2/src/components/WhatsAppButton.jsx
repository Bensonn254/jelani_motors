import { useState } from 'react'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  const number  = '254700000000'
  const message = encodeURIComponent(
    'Hello Jelani Motors Kenya 👋 I would like to hire a vehicle. Please assist.'
  )
  const href = `https://wa.me/${number}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-[400] flex items-center gap-3 select-none"
      aria-label="Chat on WhatsApp"
      style={{ filter: 'drop-shadow(0 6px 20px rgba(37,211,102,0.45))' }}>

      {/* Tooltip label — slides in on hover */}
      <div
        className="bg-gray-900 text-white text-[13px] font-heading font-semibold
          px-3.5 py-2 rounded-xl whitespace-nowrap transition-all duration-300"
        style={{
          opacity:   hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(8px)',
          pointerEvents: 'none',
        }}>
        Chat on WhatsApp
        {/* Arrow */}
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2
          border-4 border-transparent border-l-gray-900" />
      </div>

      {/* Green circle button */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200"
        style={{
          background: '#25D366',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}>
        {/* WhatsApp SVG icon */}
        <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.822 6.51L4 29l7.703-1.797A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-1.99 0-3.84-.58-5.4-1.578l-.387-.243-4.573 1.066 1.094-4.46-.263-.4A9.96 9.96 0 016 15c0-5.523 4.477-10 10-10zm-3.89 5.539c-.199 0-.522.075-.795.375s-1.044 1.02-1.044 2.487 1.069 2.886 1.218 3.085c.149.2 2.055 3.285 5.09 4.478 2.516.993 3.034.795 3.582.745s1.771-.723 2.02-1.42.249-1.296.174-1.42c-.074-.124-.274-.199-.573-.348s-1.77-.873-2.044-.972c-.273-.1-.472-.149-.671.149s-.771.972-.945 1.17c-.174.2-.348.225-.647.075s-1.262-.465-2.403-1.484c-.888-.793-1.488-1.772-1.662-2.072s-.019-.462.131-.612c.134-.134.3-.348.448-.523.15-.174.2-.298.3-.497s.05-.373-.025-.523c-.074-.149-.647-1.62-.895-2.217-.24-.58-.484-.49-.659-.49z"/>
        </svg>
      </div>

      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{
          background: 'rgba(37,211,102,0.35)',
          animationDuration: '2.5s',
        }}
      />
    </a>
  )
}
