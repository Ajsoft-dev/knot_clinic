import { useEffect } from 'react'; import { Routes, Route, Link, useParams, useLocation } from 'react-router-dom'; import { MessageCircle } from 'lucide-react'
import Navbar from './components/Navbar'; import Footer from './components/Footer'
import * as S from './components/Sections'; import { AppointmentForm, ContactForm } from './components/Forms'
import { clinic, waLink } from './config'; import { services, articles } from './data'
const Home = () => (<><S.Hero /><S.About /><S.VisionMission /><S.Services /><S.Maternity /><S.Why /><S.Leadership /><S.Gallery /><S.Availability /><S.Insights /><S.FAQ /><AppointmentForm /><S.Location /><S.Emergency />
  <section id="contact" className="scroll-mt-20 px-4 py-16 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><h2 className="h text-3xl text-deep sm:text-4xl">We’re here to help.</h2><p className="mt-3 font-semibold">{clinic.name}</p><p className="mb-4">{clinic.address} Open 24 Hours.</p><S.ContactList /></div><ContactForm /></div></section></>)
function Detail() { const s = services.find(x => x.slug === useParams().slug)
  if (!s) return <p className="p-10">Service not found. <Link className="underline" to="/">Back home</Link></p>
  return (<article className="mx-auto max-w-3xl px-4 py-16"><s.icon className="text-leaf" size={36} /><h1 className="h mt-4 text-4xl text-deep">{s.title}</h1><p className="mt-4 text-lg">{s.text}</p>
    
    <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/#appointment" className="btn p">Request an Appointment</Link><Link to="/#services" className="btn o">All services</Link></div></article>) }
function ArticlePage() { const a = articles.find(x => x.slug === useParams().slug)
  if (!a) return <p className="p-10">Article not found. <Link className="underline" to="/">Back home</Link></p>
  return (<article className="mx-auto max-w-2xl px-4 py-16"><p className="font-semibold text-leaf">{a.category}</p><h1 className="h mt-2 text-4xl text-deep">{a.title}</h1>
    {!a.reviewed && <p className="mt-4 rounded-xl bg-mint p-3 text-sm"></p>}
    <div className="mt-6 space-y-4 text-lg leading-relaxed">{a.body.map(t => <p key={t}>{t}</p>)}</div>
    <p className="mt-8 border-t border-mint pt-4 text-sm">This information is general and does not replace professional diagnosis or treatment. For personal advice, speak to a healthcare professional.</p>
    <div className="mt-6 flex flex-col gap-3 sm:flex-row"><Link to="/#appointment" className="btn p">Request an Appointment</Link><Link to="/#insights" className="btn o">More articles</Link></div></article>) }
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) { const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 60); return () => clearTimeout(t) }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
export default function App() { return (<><ScrollManager /><Navbar /><main><Routes><Route path="/" element={<Home />} /><Route path="/services/:slug" element={<Detail />} /><Route path="/articles/:slug" element={<ArticlePage />} /></Routes></main><Footer />
  <a href={waLink()} target="_blank" rel="noreferrer" className="btn p fixed bottom-4 right-4 z-50 shadow-lg" aria-label="Chat With Us on WhatsApp"><MessageCircle size={20} /><span className="hidden sm:inline">Chat With Us</span></a></>) }
