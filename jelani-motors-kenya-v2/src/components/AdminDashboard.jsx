import { useState } from 'react'

// ─── Design tokens (mirrors the public site's brand palette) ───────────────
const RED   = '#E31B23'
const DARK  = '#0f0f0f'

// ─── Icons ─────────────────────────────────────────────────────────────────
const Icon = {
  Car: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M5 17H3a2 2 0 01-2-2v-4l2.5-6h13L19 11v4a2 2 0 01-2 2h-2M5 17a2 2 0 104 0m6 0a2 2 0 104 0M5 17a2 2 0 004 0m6 0a2 2 0 004 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  KYC: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7"/>
      <circle cx="9" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 18c0-2.2 1.8-4 4-4s4 1.8 4 4M13 8h4M13 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Revenue: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  Pin: () => (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5a4.5 4.5 0 014.5 4.5c0 3.5-4.5 8.5-4.5 8.5S3.5 9.5 3.5 6A4.5 4.5 0 018 1.5z" fill="#22c55e" stroke="#22c55e" strokeWidth="1"/>
      <circle cx="8" cy="6" r="1.5" fill="white"/>
    </svg>
  ),
  Bell: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Search: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  Dispatch: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  Check: () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Spinner: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="animate-spin">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity=".25"/>
      <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  Eye: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  ),
  Dots: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="5" cy="12" r="1.5" fill="currentColor"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      <circle cx="19" cy="12" r="1.5" fill="currentColor"/>
    </svg>
  ),
  Chart: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M7 14l4-5 4 3 4-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Fleet2: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="1" y="3" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 8h4l3 3v5h-7V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="5" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  Users: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Settings: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
}

// ─── KYC Badge ─────────────────────────────────────────────────────────────
function KYCBadge({ status }) {
  const map = {
    Verified:       { bg: 'bg-emerald-50',  text: 'text-emerald-700', dot: 'bg-emerald-500',  label: 'Verified'       },
    Rejected:       { bg: 'bg-red-50',      text: 'text-red-700',     dot: 'bg-red-500',       label: 'Rejected'       },
    'Pending Review':{ bg: 'bg-amber-50',   text: 'text-amber-700',   dot: 'bg-amber-400',     label: 'Pending Review' },
    Processing:     { bg: 'bg-sky-50',      text: 'text-sky-700',     dot: 'bg-sky-400',       label: 'Processing…'    },
  }
  const s = map[status] || map['Pending Review']
  return (
    <span className={`inline-flex items-center gap-1.5 ${s.bg} ${s.text} text-[12px] font-semibold px-3 py-1 rounded-full font-heading`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot} ${status === 'Processing' ? 'animate-pulse' : ''}`} />
      {s.label}
    </span>
  )
}

// ─── Stat Card ─────────────────────────────────────────────────────────────
function StatCard({ icon: IconComp, label, value, sub, accent, trend }) {
  return (
    <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.05)] overflow-hidden group hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] transition-shadow">
      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: accent }} />

      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: accent + '18', color: accent }}>
          <IconComp />
        </div>
        {trend && (
          <span className={`text-[12px] font-semibold font-heading px-2.5 py-1 rounded-full
            ${trend > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>

      <div className="font-heading font-extrabold text-[28px] leading-none text-gray-900 mb-1.5">
        {value}
      </div>
      <div className="font-heading font-semibold text-[14px] text-gray-800 mb-0.5">{label}</div>
      {sub && <div className="text-[12px] text-gray-400 mt-1">{sub}</div>}
    </div>
  )
}

// ─── Sidebar ───────────────────────────────────────────────────────────────
function Sidebar({ active, setActive, onLogout }) {
  const links = [
    { id: 'dashboard', label: 'Dashboard',     Icon: Icon.Chart   },
    { id: 'fleet',     label: 'Fleet Manager', Icon: Icon.Fleet2  },
    { id: 'clients',   label: 'Clients',        Icon: Icon.Users   },
    { id: 'settings',  label: 'Settings',       Icon: Icon.Settings},
  ]
  return (
    <aside className="w-[220px] flex-shrink-0 bg-[#0f0f0f] flex flex-col min-h-screen">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/[0.07]">
        <div className="flex items-center gap-2.5">
          <svg width="34" height="22" viewBox="0 0 38 24" fill="none">
            <path d="M3 16 Q19 3 35 12" stroke={RED} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <ellipse cx="19" cy="18" rx="15" ry="5.5" fill="none" stroke="white" strokeWidth="1.5"/>
            <circle cx="9" cy="22" r="3" fill="white"/>
            <circle cx="29" cy="22" r="3" fill="white"/>
          </svg>
          <div className="leading-tight">
            <div className="font-heading font-bold text-white text-[14px]">Jelani Motors</div>
            <div className="text-[10px] font-semibold tracking-widest" style={{ color: RED }}>ADMIN PORTAL</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-5 flex flex-col gap-1">
        {links.map(({ id, label, Icon: NavIcon }) => (
          <button key={id} onClick={() => setActive(id)}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left text-[14px] font-medium transition-all
              ${active === id
                ? 'text-white font-semibold'
                : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04]'
              }`}
            style={active === id ? { background: RED + '22', color: '#fff' } : {}}>
            <span style={active === id ? { color: RED } : {}}><NavIcon /></span>
            {label}
            {id === 'fleet' && (
              <span className="ml-auto text-[11px] font-bold px-1.5 py-0.5 rounded-md"
                style={{ background: RED, color: '#fff' }}>3</span>
            )}
          </button>
        ))}
      </nav>

      {/* Staff profile + Logout */}
      <div className="px-4 py-5 border-t border-white/[0.07]">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-white text-[13px] flex-shrink-0"
            style={{ background: RED }}>JM</div>
          <div>
            <div className="text-white text-[13px] font-semibold font-heading">Admin Staff</div>
            <div className="text-white/35 text-[11px]">Operations · Kitengela HQ</div>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl
            text-white/40 hover:text-white hover:bg-white/[0.06] transition-all text-[13px] font-medium">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Sign Out
        </button>
      </div>
    </aside>
  )
}

// ─── Main Dashboard View ────────────────────────────────────────────────────
function DashboardView() {
  // ── Booking rows state ────────────────────────────────
  const INITIAL_ROWS = [
    {
      id: 1,
      client:   'Safaricom PLC',
      avatar:   'SF',
      vehicle:  'Mercedes S-Class',
      location: 'Kitengela',
      pinned:   true,
      kyc:      'Verified',
      date:     'Today, 09:14',
      amount:   '26,000',
      action:   null,
    },
    {
      id: 2,
      client:   'John Doe',
      avatar:   'JD',
      vehicle:  'Toyota Land Cruiser V8',
      location: 'GPS Unavailable',
      pinned:   false,
      kyc:      'Rejected',
      date:     'Today, 07:52',
      amount:   '15,600',
      action:   null,
    },
    {
      id: 3,
      client:   'TechCorp Exec',
      avatar:   'TC',
      vehicle:  'Executive Van',
      location: 'Westlands',
      pinned:   true,
      kyc:      'Pending Review',
      date:     'Today, 10:31',
      amount:   '18,200',
      action:   'review',   // this row has the interactive button
    },
  ]

  const [rows, setRows]           = useState(INITIAL_ROWS)
  const [processing, setProcessing] = useState(false)

  function handleApprove(rowId) {
    setProcessing(true)

    // Update KYC badge to "Processing" immediately
    setRows(r => r.map(row => row.id === rowId ? { ...row, kyc: 'Processing' } : row))

    // After 1 second → flip to Verified, remove action button
    setTimeout(() => {
      setRows(r => r.map(row =>
        row.id === rowId ? { ...row, kyc: 'Verified', action: null } : row
      ))
      setProcessing(false)
    }, 1000)
  }

  // ── Avatar colour pool ────────────────────────────────
  const avatarColors = {
    SF: { bg: '#dbeafe', text: '#1d4ed8' },
    JD: { bg: '#fce7f3', text: '#9d174d' },
    TC: { bg: '#d1fae5', text: '#065f46' },
  }

  return (
    <div className="flex flex-col gap-8">

      {/* ── Page header ────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading font-extrabold text-[24px] text-gray-900 tracking-tight">
            Operations Dashboard
          </h1>
          <p className="text-[13px] text-gray-400 mt-1">
            {new Date().toLocaleDateString('en-KE', { weekday:'long', day:'numeric', month:'long', year:'numeric' })}
            {' '}· Kitengela HQ
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-[13px] font-medium text-gray-500 bg-white border border-gray-200 px-4 py-2.5 rounded-xl hover:border-gray-300 transition">
            <Icon.Search /> Search
          </button>
          <button className="relative w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition text-gray-500">
            <Icon.Bell />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ background: RED }} />
          </button>
        </div>
      </div>

      {/* ── Stat cards ─────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
        <StatCard
          icon={Icon.Dispatch}
          label="Active Dispatches"
          value="12"
          sub="8 vehicles en route right now"
          accent="#E31B23"
          trend={14}
        />
        <StatCard
          icon={Icon.KYC}
          label="Pending KYC Approvals"
          value="5"
          sub="3 submitted in the last hour"
          accent="#f59e0b"
          trend={-2}
        />
        <StatCard
          icon={Icon.Revenue}
          label="Today's Revenue"
          value="KSh 487,200"
          sub="vs KSh 312,000 yesterday"
          accent="#10b981"
          trend={56}
        />
      </div>

      {/* ── Booking requests table ──────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.05)] overflow-hidden">

        {/* Table header bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h2 className="font-heading font-bold text-[16px] text-gray-900">Incoming Booking Requests</h2>
            <p className="text-[12px] text-gray-400 mt-0.5">Requires KYC review before dispatch approval</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[12px] text-gray-400 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg font-medium">
              {rows.length} requests
            </span>
            <button className="text-[13px] font-semibold text-white px-4 py-2 rounded-xl transition-colors"
              style={{ background: RED }}>
              + New Booking
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {['Client', 'Vehicle Requested', 'Delivery Location', 'Date & Time', 'Amount (KSh)', 'KYC Status', 'Actions'].map(h => (
                  <th key={h}
                    className="text-left font-heading font-semibold text-[11px] uppercase tracking-widest text-gray-400 px-6 py-4 whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => {
                const av = avatarColors[row.avatar]
                return (
                  <tr key={row.id}
                    className={`border-b border-gray-50 transition-colors
                      ${row.kyc === 'Verified' && row.id === 3 ? 'bg-emerald-50/30' : 'hover:bg-gray-50/60'}`}>

                    {/* Client */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center font-heading font-bold text-[12px] flex-shrink-0"
                          style={{ background: av.bg, color: av.text }}>
                          {row.avatar}
                        </div>
                        <div>
                          <div className="font-heading font-semibold text-[14px] text-gray-900 whitespace-nowrap">{row.client}</div>
                          <div className="text-[11px] text-gray-400">Corporate Account</div>
                        </div>
                      </div>
                    </td>

                    {/* Vehicle */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-700 whitespace-nowrap font-medium">
                        <span className="text-gray-400"><Icon.Car /></span>
                        {row.vehicle}
                      </div>
                    </td>

                    {/* Location */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        {row.pinned
                          ? <>
                              <Icon.Pin />
                              <span className="text-gray-700 font-medium">{row.location}</span>
                              <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded-md">Pinned 📍</span>
                            </>
                          : <span className="text-gray-400 italic text-[13px]">GPS Unavailable</span>
                        }
                      </div>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4">
                      <span className="text-gray-500 text-[13px] whitespace-nowrap">{row.date}</span>
                    </td>

                    {/* Amount */}
                    <td className="px-6 py-4">
                      <span className="font-heading font-semibold text-gray-900 whitespace-nowrap">
                        {row.amount}
                      </span>
                    </td>

                    {/* KYC Status */}
                    <td className="px-6 py-4">
                      <KYCBadge status={row.kyc} />
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {/* Eye icon always present */}
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors">
                          <Icon.Eye />
                        </button>

                        {/* Review & Approve button — only for pending row */}
                        {row.action === 'review' && (
                          <button
                            onClick={() => handleApprove(row.id)}
                            disabled={processing}
                            className="flex items-center gap-1.5 text-[12px] font-heading font-bold
                              px-3.5 py-2 rounded-xl border-2 transition-all whitespace-nowrap
                              disabled:opacity-60 disabled:cursor-not-allowed"
                            style={{
                              borderColor: processing ? '#f59e0b' : '#E31B23',
                              color:       processing ? '#f59e0b' : '#E31B23',
                              background:  processing ? '#fffbeb' : '#fff5f5',
                            }}>
                            {processing ? <Icon.Spinner /> : <Icon.Check />}
                            {processing ? 'Processing…' : 'Review & Approve'}
                          </button>
                        )}

                        {/* Verified confirmation chip after approval */}
                        {row.id === 3 && row.kyc === 'Verified' && row.action === null && (
                          <span className="flex items-center gap-1.5 text-[12px] font-heading font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl">
                            <Icon.Check /> Approved
                          </span>
                        )}

                        {/* Dots menu */}
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-300 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                          <Icon.Dots />
                        </button>
                      </div>
                    </td>

                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Table footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50/60 border-t border-gray-100">
          <span className="text-[12px] text-gray-400">Showing 3 of 3 requests · Updated just now</span>
          <button className="text-[12px] font-semibold font-heading hover:underline" style={{ color: RED }}>
            View Full History →
          </button>
        </div>
      </div>

      {/* ── Activity feed (bonus section) ──────────────── */}
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.05)] p-6">
          <h3 className="font-heading font-bold text-[15px] text-gray-900 mb-5">Recent Activity</h3>
          <div className="flex flex-col gap-4">
            {[
              { dot: '#10b981', msg: 'Safaricom PLC booking confirmed', time: '2 min ago' },
              { dot: RED,       msg: 'John Doe KYC rejected — missing ID', time: '18 min ago' },
              { dot: '#f59e0b', msg: 'TechCorp Exec KYC awaiting review', time: '34 min ago' },
              { dot: '#6366f1', msg: 'Land Cruiser V8 (KBZ 001X) dispatched', time: '1 hr ago' },
              { dot: '#10b981', msg: 'KSh 26,000 payment received', time: '2 hr ago' },
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full mt-1.5" style={{ background: a.dot }} />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] text-gray-700 font-medium truncate">{a.msg}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet Availability */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.05)] p-6">
          <h3 className="font-heading font-bold text-[15px] text-gray-900 mb-5">Fleet Availability</h3>
          <div className="flex flex-col gap-3.5">
            {[
              { name: 'Land Cruiser V8',   total: 40, active: 28, color: RED        },
              { name: 'Toyota Prado TX/TZ',total: 25, active: 18, color: '#f59e0b'  },
              { name: 'Range Rover Vogue', total: 12, active:  7, color: '#8b5cf6'  },
              { name: 'Alphard VIP',       total:  8, active:  5, color: '#10b981'  },
              { name: 'Executive Vans',    total: 15, active: 11, color: '#3b82f6'  },
            ].map((v, i) => {
              const pct = Math.round((v.active / v.total) * 100)
              return (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[13px] font-medium text-gray-700">{v.name}</span>
                    <span className="text-[12px] text-gray-400 font-heading">
                      <span className="font-bold text-gray-700">{v.active}</span>/{v.total} active
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, background: v.color }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

// ─── Root AdminDashboard Export ─────────────────────────────────────────────
export default function AdminDashboard({ onLogout = () => {} }) {
  const [activeNav, setActiveNav] = useState('dashboard')

  return (
    <div className="flex min-h-screen bg-[#f7f7f9] font-body">

      {/* Sidebar */}
      <Sidebar active={activeNav} setActive={setActiveNav} onLogout={onLogout} />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">

        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-8 h-[64px] flex items-center justify-between">
            <div className="flex items-center gap-2 text-[13px] text-gray-400">
              <span>Portal</span>
              <span>/</span>
              <span className="capitalize font-medium text-gray-700">{activeNav}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[12px] font-semibold px-3 py-1.5 rounded-full font-heading">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live · Kitengela HQ
              </div>
              <button
                onClick={onLogout}
                title="Sign Out"
                className="flex items-center gap-2 text-[12px] font-heading font-semibold
                  text-gray-500 hover:text-gray-800 border border-gray-200 hover:border-gray-300
                  px-3 py-1.5 rounded-lg transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
                    stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          {activeNav === 'dashboard' && <DashboardView />}
          {activeNav !== 'dashboard' && (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-gray-300"
                style={{ background: '#f5f5f5' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 className="font-heading font-bold text-[18px] text-gray-400">
                {activeNav.charAt(0).toUpperCase() + activeNav.slice(1)} module coming soon
              </h2>
              <p className="text-[13px] text-gray-300 mt-2">This section is under active development.</p>
            </div>
          )}
        </div>
      </main>

    </div>
  )
}
