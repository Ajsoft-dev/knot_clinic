import { useState, type ReactNode } from 'react'; import { Link } from 'react-router-dom'; import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Mail, ChevronDown, Clock, HeartPulse, Layers, Users, ArrowRight } from 'lucide-react'
import { clinic, leaders, waLink, mapsDirections, mapsEmbed } from '../config'; import { services, faqs, articles } from '../data'
const Reveal = ({ children, className = '' }: { children: ReactNode; className?: string }) => <motion.div className={className} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: .45 }}>{children}</motion.div>
const Wrap = ({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) => <section id={id} className={`scroll-mt-20 px-4 py-16 lg:px-8 lg:py-24 ${className}`}><div className="mx-auto max-w-7xl">{children}</div></section>
const Call = ({ light = false }: { light?: boolean }) => <>{clinic.phones.map(p => <a key={p.tel} href={`tel:${p.tel}`} className={`btn ${light ? 'bg-white text-deep' : 'p'}`}><Phone size={18} />{p.display}</a>)}</>

export function Hero() { return (
  <section id="top" className="relative overflow-hidden bg-mint"><div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-leaf/15 blur-3xl" /><div aria-hidden className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-deep/10 blur-3xl" /><div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:px-8 lg:py-20">
    <div><p className="mb-3 font-semibold text-deep">Your health, our priority</p>
      <h1 className="h text-4xl text-deep sm:text-5xl lg:text-6xl">Compassionate Care. Professional Healthcare. Anytime.</h1>
      <p className="mt-5 max-w-xl text-lg">At KNOT CLINIC AND MATERNITY, we are committed to providing accessible healthcare services with professionalism, compassion, and attention to your wellbeing.</p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href="#appointment" className="btn p">Book an Appointment</a><a href="#services" className="btn o">Explore Our Services</a></div>
      <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm"><span className="rounded-full bg-deep px-3 py-1 font-semibold text-white">OPEN 24 HOURS</span><span className="flex items-center gap-1"><MapPin size={16} />Ajuwon, Ogun State, Nigeria</span></p></div>
    <figure className="relative"><img src="/images/hero.png" fetchPriority="high" alt="A smiling doctor consulting with a patient" className="aspect-square w-full rounded-[2rem] object-cover shadow-2xl shadow-deep/20 ring-1 ring-deep/10" /><a href={`tel:${clinic.phones[0].tel}`} aria-label="Call the clinic" className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-deep text-white shadow-lg transition hover:scale-105"><Phone size={22} /></a></figure></div></section>) }

export function About() { return (
  <Wrap id="about"><div className="grid items-center gap-10 lg:grid-cols-2">
    <Reveal><img loading="lazy" src="/images/exterior.jpg" alt="KNOT CLINIC AND MATERNITY signage" className="rounded-3xl" /></Reveal>
    <Reveal><p className="font-semibold text-leaf">About KNOT CLINIC</p><h2 className="h mt-2 text-3xl text-deep sm:text-4xl">Healthcare built around you.</h2>
      <div className="mt-5 space-y-4 text-lg"><p>Established in {clinic.est}, KNOT CLINIC AND MATERNITY is a healthcare facility located in Ajuwon, Ogun State, committed to delivering comprehensive and patient-focused medical services.</p>
      <p>Our integrated approach brings together family healthcare and specialized medical services, with a core focus on Gynaecology and Obstetrics, General Surgery, Emergency Services, and Pediatric Care, supported by laboratory and diagnostic services.</p>
      <p>We believe in compassionate care, evidence-based medical practice, personalized attention, and building lasting relationships with the communities we serve.</p>
      <p>Our goal is to support individuals and families through every stage of life, from childhood through motherhood and beyond.</p></div>
      <a href="#services" className="btn p mt-6">Discover Our Services</a></Reveal></div></Wrap>) }

export function VisionMission() { return (
  <Wrap className="bg-deep text-white"><div className="grid gap-6 lg:grid-cols-2">
    <Reveal className="rounded-3xl bg-white/10 p-7 sm:p-10"><h2 className="h text-3xl">Our Vision</h2><p className="mt-4 text-lg leading-relaxed">To be the foremost, trusted provider of integrated family and specialized healthcare, recognized for clinical excellence, compassionate care, and transforming the health journey of every patient from childhood through motherhood and beyond.</p></Reveal>
    <Reveal className="rounded-3xl bg-mint p-7 text-ink sm:p-10"><h2 className="h text-3xl text-deep">Our Mission</h2><p className="mt-4 text-lg leading-relaxed">The Mission of Knot Clinic and Maternity is to deliver comprehensive, high-quality, and evidence-based medical services across our core specialties. Gynaecology/Obstetrics, General Surgery, Emergency, and Pediatric Care are supported by advanced and Laboratory services.</p><p className="mt-3 text-lg leading-relaxed">Since {clinic.est}, we are dedicated to ensuring optimal health outcomes, providing personalized care, and maintaining a standard of excellence that builds lifelong trust within our community.</p></Reveal></div></Wrap>) }

export function Services() { return (
  <Wrap id="services"><p className="font-semibold text-leaf">What we do</p><h2 className="h mt-2 max-w-3xl text-3xl text-deep sm:text-4xl">Comprehensive healthcare services for you and your family.</h2>
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map((s, i) => (
      <li key={s.slug} className={i === 0 ? 'lg:col-span-2' : ''}><Link to={`/services/${s.slug}`} className="group flex h-full flex-col rounded-3xl border border-mint bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-leaf/50 hover:shadow-xl">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mint text-deep transition-colors group-hover:bg-deep group-hover:text-white"><s.icon size={26} /></span><h3 className="h mt-4 text-xl text-deep">{s.title}</h3><p className="mt-2 flex-1">{s.text}</p><span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-leaf transition-all group-hover:gap-2.5">Learn More<ArrowRight size={16} /></span></Link></li>))}</ul></Wrap>) }

export function Maternity() { return (
  <Wrap id="maternity" className="bg-mint"><div className="grid items-center gap-10 lg:grid-cols-2">
    <Reveal><p className="font-semibold text-deep">Maternity care</p><h2 className="h mt-2 text-3xl text-deep sm:text-4xl">Supporting mothers through every important moment.</h2>
      <p className="mt-4 text-lg">At KNOT CLINIC AND MATERNITY, we recognize the importance of maternal and reproductive healthcare. Our gynaecology and obstetrics services are designed to support women through different stages of their healthcare journey.</p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">{['Maternity care information', 'Obstetrics services', 'Gynaecology services', 'Family planning', 'Immunization information', 'Appointment enquiry'].map(t => <li key={t} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-leaf" />{t}</li>)}</ul>
      <a href={waLink('Hello KNOT CLINIC AND MATERNITY, I would like to enquire about maternity care.')} className="btn p mt-6">Enquire About Maternity Care</a></Reveal>
    <figure><img loading="lazy" src="/images/maternity.png" alt="A healthcare professional with an expectant mother" className="rounded-3xl" /></figure></div></Wrap>) }

export function Why() { const items = [[Clock, '24-Hour Availability', 'Our clinic is open around the clock for healthcare enquiries and appropriate medical attention.'], [Layers, 'Multiple Healthcare Services', 'Access information about several healthcare departments in one location.'], [HeartPulse, 'Patient-Focused Approach', 'We believe healthcare should be delivered with compassion, respect, and attention to individual needs.'], [MapPin, 'Accessible Location', 'Find us along Ajuwon-Akute Road, near White House Bus Stop, Ajuwon, Ogun State.']] as const
  return (<Wrap><h2 className="h max-w-3xl text-3xl text-deep sm:text-4xl">Your health deserves attention, care, and professionalism.</h2>
    <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{items.map(([I, t, d]) => <div key={t}><I className="text-leaf" size={28} /><dt className="h mt-3 text-xl text-deep">{t}</dt><dd className="mt-2">{d}</dd></div>)}</dl></Wrap>) }

export function Leadership() {
  return (<Wrap className="bg-mint" id="team"><h2 className="h text-3xl text-deep sm:text-4xl">The People Behind Your Care</h2><p className="mt-2 text-lg">Dedicated leadership. Compassionate healthcare.</p>
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-4xl">{leaders.map(l => <Reveal key={l.name}><article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow hover:shadow-xl"><div className="relative overflow-hidden"><img loading="lazy" src={l.photo} alt={`Portrait of ${l.name}`} className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-5 text-white"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">{l.role}</p><h3 className="h mt-1 text-xl sm:text-2xl">{l.name}</h3></div></div><p className="p-5 leading-relaxed">{l.bio}</p></article></Reveal>)}</div>
    <div className="mt-16 grid items-center gap-8 lg:grid-cols-5"><img loading="lazy" src="/images/nurses.jpg" alt="The KNOT CLINIC AND MATERNITY nursing team" className="rounded-3xl lg:col-span-3" />
      <div className="lg:col-span-2"><h3 className="h text-2xl text-deep sm:text-3xl">Our Nurses, Your Everyday Care Partners</h3><p className="mt-4 text-lg">Our nursing team plays an important role in delivering compassionate, attentive, and patient-focused care. From routine healthcare needs to supporting patients through important medical journeys, our nurses are an essential part of the KNOT CLINIC AND MATERNITY family.</p></div></div></Wrap>) }

export function Gallery() { const g = [['/images/exterior.jpg', 'Clinic exterior signage'], ['/images/reception.jpg', 'Reception area'], ['/images/scan-room.jpg', 'Scanning room']]
  return (<Wrap id="facility"><h2 className="h max-w-3xl text-3xl text-deep sm:text-4xl">A welcoming environment for your healthcare needs.</h2>
    <div className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-3">{g.map(([s, a]) => <figure key={s} className="overflow-hidden rounded-2xl"><img loading="lazy" src={s} alt={a} className="aspect-[3/4] w-full object-cover transition duration-500 hover:scale-105" /><figcaption className="sr-only">{a}</figcaption></figure>)}</div></Wrap>) }

export function Availability() { return (
  <Wrap className="bg-deep text-white"><div className="max-w-3xl"><h2 className="h text-3xl sm:text-4xl">Healthcare doesn’t keep office hours. Neither do we.</h2><p className="mt-4 text-lg">KNOT CLINIC AND MATERNITY is open 24 hours to make healthcare services and enquiries accessible whenever they are needed.</p>
    <div className="mt-6 flex flex-col gap-3 sm:flex-row"><Call light /></div></div></Wrap>) }

export function Insights() { return (
  <Wrap id="insights"><h2 className="h max-w-3xl text-3xl text-deep sm:text-4xl">Knowledge that supports better health decisions.</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{articles.map(a => <li key={a.slug}><Link to={`/articles/${a.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-mint bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><span className="h-2 bg-gradient-to-r from-deep to-leaf" /><span className="flex h-full flex-col p-6"><p className="text-sm font-semibold text-leaf">{a.category}</p><h3 className="h mt-2 text-xl text-deep">{a.title}</h3><p className="mt-2 flex-1">{a.excerpt}</p><span className="mt-4 font-semibold text-deep group-hover:underline">Read More</span></span></Link></li>)}</ul>
    </Wrap>) }

export function FAQ() { const [open, setOpen] = useState<number | null>(0)
  return (<Wrap id="faq" className="bg-mint"><div className="mx-auto max-w-3xl"><h2 className="h text-3xl text-deep sm:text-4xl">Frequently Asked Questions</h2><p className="mt-2 text-lg">Find answers to common questions about our healthcare services, specialties, availability, and appointments.</p>
    <div className="mt-8 space-y-3">{faqs.map(([q, a], i) => <div key={q} className="rounded-xl bg-white"><h3><button id={`q${i}`} aria-expanded={open === i} aria-controls={`a${i}`} onClick={() => setOpen(open === i ? null : i)} className="flex min-h-14 w-full items-center justify-between gap-3 p-4 text-left font-semibold">{q}<ChevronDown className={`shrink-0 transition ${open === i ? 'rotate-180' : ''}`} /></button></h3>
      <motion.div id={`a${i}`} role="region" aria-labelledby={`q${i}`} initial={false} animate={{ height: open === i ? 'auto' : 0 }} className="overflow-hidden"><p className="px-4 pb-4">{a}</p></motion.div></div>)}</div>
    <div className="mt-10 text-center"><p className="h text-2xl text-deep">Still have questions?</p><p>Contact our team.</p><a href="#contact" className="btn p mt-4">Contact Us</a></div></div></Wrap>) }

export function Location() { return (
  <Wrap id="location"><h2 className="h text-3xl text-deep sm:text-4xl">Find us in Ajuwon, Ogun State.</h2><p className="mt-2 text-lg">{clinic.address}</p>
    <div className="mt-8 grid gap-6 lg:grid-cols-2"><iframe title="Map to KNOT CLINIC AND MATERNITY" loading="lazy" src={mapsEmbed} className="h-80 w-full rounded-2xl border-0 lg:h-full" />
      <div className="space-y-3"><a href={mapsDirections} target="_blank" rel="noreferrer" className="btn p w-full sm:w-auto"><MapPin size={18} />Get Directions</a><ContactList /></div></div></Wrap>) }

export function ContactList() { return (<ul className="space-y-3">
  {clinic.phones.map(p => <li key={p.tel}><a className="flex items-center gap-2 py-1 text-lg font-semibold" href={`tel:${p.tel}`}><Phone size={18} />{p.display}</a></li>)}
  <li><a className="flex items-center gap-2 py-1" href={waLink()}><MessageCircle size={18} />WhatsApp {clinic.whatsapp.display}</a></li>
  {clinic.emails.map(e => <li key={e}><a className="flex items-center gap-2 py-1" href={`mailto:${e}`}><Mail size={18} />{e}</a></li>)}
  <li className="pt-2 text-deep"><Social /></li></ul>) }

export function Emergency() { return (
  <Wrap className="bg-deep text-white"><div className="mx-auto max-w-3xl text-center"><Users className="mx-auto" /><h2 className="h mt-3 text-3xl sm:text-4xl">Need urgent medical attention?</h2><p className="mt-3 text-lg">For urgent medical enquiries, contact KNOT CLINIC AND MATERNITY directly by telephone or visit the facility. Open 24 hours.</p>
    <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><Call light /></div></div></Wrap>) }

const Fb = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.2v2.7H7.7v3.3h2.7V22h3.1z"/></svg>
const Tt = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M16.6 2h-3.2v13.2a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .8.1V9.1a6.1 6.1 0 1 0 5.3 6V8.6a7.4 7.4 0 0 0 4.3 1.4V6.8a4.3 4.3 0 0 1-4.3-4.8z"/></svg>
export function Social({ className = '' }: { className?: string }) {
  const c = 'flex h-12 w-12 items-center justify-center rounded-full border-2 border-current transition hover:scale-105'
  return (<div className={`flex items-center gap-3 ${className}`}>
    <a href={clinic.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={c}><Fb /></a>
    <a href={clinic.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={c}><Tt /></a></div>)
}
