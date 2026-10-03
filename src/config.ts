// Single source of truth for all contact details.
export const clinic = {
  name: 'KNOT CLINIC AND MATERNITY', bn: '3350530', est: 2019,
  address: '90, Ajuwon - Akute Road, White House Bus Stop, Ajuwon, Ogun State, Nigeria.',
  emails: ['info@knotclinic.com.ng', 'knotclinic@gmail.com'],
  whatsapp: { display: '08034141587', intl: '2348034141587', message: 'Hello KNOT CLINIC AND MATERNITY, I would like to make an enquiry about your healthcare services.' },
  phones: [{ display: '08034141587', tel: '+2348034141587' }, { display: '09020247790', tel: '+2349020247790' }],
  social: { facebook: 'https://www.facebook.com/share/1HKBGsi8Ru/', tiktok: 'https://www.tiktok.com/@knotclinic' },
  devCredit: { label: 'Dev by Ajsoft', href: 'https://linktr.ee/sheriffdeen_ajijolaanabi' },
}
export const waLink = (m = clinic.whatsapp.message) => `https://wa.me/${clinic.whatsapp.intl}?text=${encodeURIComponent(m)}`
export const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.address)}`
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`

export const leaders = [
  { name: 'Badru Olayode Ganiyu', role: 'Head of Administrative', photo: '/images/admin.jpg', bio: 'Leading the administrative operations of KNOT CLINIC AND MATERNITY, ensuring the facility runs smoothly so that clinical teams can focus on patient care.' },
  { name: 'Kazeem-olowolagba Temitayo', role: 'Medical Director', photo: '/images/director.jpg', bio: 'Providing medical leadership and oversight across the clinic\'s integrated specialties, with a commitment to compassionate, evidence-based care.' },
]
