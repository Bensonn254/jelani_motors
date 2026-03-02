import { createPortal } from 'react-dom'

export default function ComingSoon({ page = 'This Page', onClose }) {
  return createPortal(
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center p-5"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}>
      <div
        className="absolute inset-0"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-3xl p-10 max-w-sm w-full text-center shadow-2xl">

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
          style={{ background: 'rgba(227,27,35,0.08)' }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M12 2a10 10 0 110 20A10 10 0 0112 2z"
              stroke="#E31B23" strokeWidth="1.6"/>
            <path d="M12 6v6l4 2"
              stroke="#E31B23" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-1">
          <svg width="28" height="18" viewBox="0 0 38 24" fill="none">
            <path d="M3 16 Q19 3 35 12"
              stroke="#E31B23" strokeWidth="2.5"
              strokeLinecap="round" fill="none"/>
            <ellipse cx="19" cy="18" rx="15" ry="5.5"
              fill="none" stroke="#111" strokeWidth="1.5"/>
            <circle cx="9"  cy="22" r="3" fill="#111"/>
            <circle cx="29" cy="22" r="3" fill="#111"/>
          </svg>
          <span className="font-heading font-bold text-gray-900 text-[15px]">
            Jelani Motors Kenya
          </span>
        </div>

        <h2 className="font-heading font-extrabold text-[20px] text-gray-900 mt-4 mb-2">
          Coming Soon
        </h2>
        <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
          <strong className="text-gray-700">{page}</strong> is currently under development
          and will be available before launch.
        </p>

        {/* Progress bar decoration */}
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-6">
          <div
            className="h-full rounded-full"
            style={{
              width: '68%',
              background: 'linear-gradient(to right, #E31B23, #ff6b6b)',
            }}
          />
        </div>
        <p className="text-[11px] text-gray-400 mb-6">68% complete</p>

        <button
          onClick={onClose}
          className="w-full font-heading font-bold text-white py-3.5 rounded-xl transition-colors"
          style={{ background: '#E31B23' }}>
          Back to Site
        </button>
      </div>
    </div>,
    document.body
  )
}
