// ─────────────────────────────────────────────────────────────
// FLEET DATA – Kenyan corporate market vehicles
// ─────────────────────────────────────────────────────────────
export const FLEET = [
  {
    name: 'Toyota Land Cruiser V8',
    tag: 'Executive',
    tagColor: 'bg-red-50 text-brand-red',
    price: '15,600',
    fleet: '40+',
    types: 'SUV • 4WD',
    trans: 'Auto',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=700&q=80&auto=format&fit=crop',
  },
  {
    name: 'Toyota Prado TX/TZ',
    tag: 'Premium',
    tagColor: 'bg-red-50 text-brand-red',
    price: '11,570',
    fleet: '25+',
    types: 'SUV • 4WD',
    trans: 'Auto',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=700&q=80&auto=format&fit=crop',
  },
  {
    name: 'Range Rover Vogue',
    tag: 'Luxury',
    tagColor: 'bg-red-50 text-brand-red',
    price: '20,800',
    fleet: '12+',
    types: 'SUV • 4WD',
    trans: 'Auto',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=700&q=80&auto=format&fit=crop',
  },
  {
    name: 'Toyota Alphard VIP',
    tag: 'VIP Van',
    tagColor: 'bg-red-50 text-brand-red',
    price: '18,200',
    fleet: '8+',
    types: 'MPV • Executive',
    trans: 'Auto',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=700&q=80&auto=format&fit=crop',
  },
  {
    name: 'Mercedes-Benz S-Class',
    tag: 'Luxury',
    tagColor: 'bg-red-50 text-brand-red',
    price: '26,000',
    fleet: '5+',
    types: 'Sedan • Executive',
    trans: 'Auto',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=700&q=80&auto=format&fit=crop',
  },
  {
    name: 'Subaru Outback / Forester',
    tag: 'Reliable',
    tagColor: 'bg-red-50 text-brand-red',
    price: '7,800',
    fleet: '30+',
    types: 'SUV • AWD',
    trans: 'Auto / CVT',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=700&q=80&auto=format&fit=crop',
  },
]

// ─────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────
export const SERVICES = [
  { title: 'Car Hire With Driver',      desc: 'Travel in comfort with a professional, vetted driver.', featured: true },
  { title: 'Corporate Car Hire',        desc: 'Flexible and reliable solutions for your business trips.', featured: false },
  { title: 'Airport Transfer',          desc: 'Seamless pickup or drop-off right at JKIA & Wilson.', featured: false },
  { title: 'Chauffeur Service',         desc: 'Arrive in style with our premium chauffeur service.', featured: false },
  { title: 'One-Way Rentals',           desc: 'Travel between cities without needing to return.', featured: false },
  { title: 'Long-Term Hire',            desc: 'Flexible hire options for a month or more.', featured: false },
  { title: 'Safari & Upcountry',        desc: 'Rugged 4WD vehicles ready for any Kenyan terrain.', featured: false },
  { title: 'Corporate Fleet Solutions', desc: 'Customizable fleet plans for your entire organisation.', featured: false },
]

// ─────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  { quote: 'Booking was quick and simple, the Land Cruiser was immaculate and on time. Jelani Motors made our Nairobi board meetings stress-free.', name: 'James R.', role: 'Business Traveler', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&auto=format&fit=crop&crop=face' },
  { quote: 'I found the perfect Prado for our NGO field visit without any confusion. The pickup and return from Kitengela was fast and well organised.', name: 'Sophia L.', role: 'NGO Programme Officer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&auto=format&fit=crop&crop=face' },
  { quote: 'The website was easy to use and showed clear options. Customer support was responsive even over the weekend during our safari transfer.', name: 'Michael T.', role: 'Frequent Renter', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80&auto=format&fit=crop&crop=face' },
  { quote: 'Jelani Motors offered reliable vehicles at fair KSh rates with a very smooth booking flow. Professional from start to finish.', name: 'Carlos M.', role: 'Corporate Client', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80&auto=format&fit=crop&crop=face' },
  { quote: 'I appreciated the KYC upload feature — it sped up the verification process enormously. The Alphard VIP was perfect for our delegation.', name: 'Emily K.', role: 'Government Liaison', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80&auto=format&fit=crop&crop=face' },
  { quote: 'From browsing to booking everything was smooth. The Range Rover was in pristine condition for our Maasai Mara transfer.', name: 'David P.', role: 'Safari Operator', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&q=80&auto=format&fit=crop&crop=face' },
]

// ─────────────────────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────────────────────
export const FAQS = [
  { q: 'What documents do I need to hire a car with Jelani Motors?', a: 'You will need a valid Kenyan driving licence (or international licence for foreigners), a national ID or passport, and a corporate letter on company letterhead for corporate hires. KYC verification is completed digitally on our platform.' },
  { q: 'Is there a minimum age to hire a car in Kenya?', a: 'The minimum age is 23 years old. Drivers between 23 and 25 may be subject to a young driver surcharge depending on the vehicle category.' },
  { q: 'What is included in the hire rate?', a: 'The daily rate includes the vehicle, comprehensive insurance, unlimited mileage within Kenya, and 24/7 roadside assistance. A driver can be added for an additional KSh 3,000/day.' },
  { q: 'What is your fuel policy?', a: 'Our standard policy is full-to-full. You receive the car with a full tank and return it full. If returned with less, a refuelling fee applies at current Kenyan pump prices.' },
  { q: 'Can I pick up and drop off at different locations?', a: 'Yes. One-way hires are available across Nairobi, Mombasa, Kisumu, and upcountry. A one-way drop-off fee applies and is quoted at booking time.' },
]

// ─────────────────────────────────────────────────────────────
// NAV LINKS
// ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'Fleet',    href: '#fleet',    dropdown: true },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services', dropdown: true },
  { label: 'Pages',    href: '#how',      dropdown: true },
  { label: 'Contact',  href: '#contact' },
]
