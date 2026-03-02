// ── Demo Local Storage Store for Bookings & KYC ────────────────

const STORE_KEY = 'jelani_bookings_demo'

export function getBookings() {
  try {
    const data = localStorage.getItem(STORE_KEY)
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.error('Failed to parse bookings from localStorage', err)
    return []
  }
}

export function saveBooking(bookingContent) {
  const current = getBookings()
  const newBooking = {
    id: `BKG-${Math.floor(1000 + Math.random() * 9000)}`,
    ...bookingContent,
    createdAt: new Date().toISOString()
  }
  // Insert at the beginning so newest is top
  localStorage.setItem(STORE_KEY, JSON.stringify([newBooking, ...current]))
  return newBooking
}

export function updateBookingStatus(id, newStatus) {
  const current = getBookings()
  const updated = current.map(b => b.id === id ? { ...b, status: newStatus } : b)
  localStorage.setItem(STORE_KEY, JSON.stringify(updated))
  return updated
}

export function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}
