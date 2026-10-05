import { Link } from 'react-router-dom'; import { clinic } from '../config'; import { Social } from './Sections'; import { services } from '../data'
export default function Footer() { return (
  <footer className="bg-deep px-4 py-14 pb-6 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <div><div className="flex items-center gap-3"><img src="/images/logo.jpeg" alt="" width="56" height="56" className="h-14 w-14 shrink-0 rounded-xl bg-white object-contain p-1" /><p className="h text-xl">{clinic.name}</p></div><p className="mt-3 text-white/85">Providing accessible healthcare services in Ajuwon, Ogun State, with a commitment to professional and compassionate patient care.</p><p className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-sm font-semibold text-deep">OPEN 24 HOURS</p></div>
    <nav aria-label="Quick links"><h2 className="font-semibold">Quick Links</h2><ul className="mt-3 space-y-2">{[['Home', '/#top'], ['About Us', '/#about'], ['Services', '/#services'], ['Maternity', '/#maternity'], ['Contact', '/#contact']].map(([l, h]) => <li key={l}><Link to={h}>{l}</Link></li>)}</ul></nav>
    <nav aria-label="Services"><h2 className="font-semibold">Our Services</h2><ul className="mt-3 space-y-2">{services.map(s => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul></nav>
    <div><h2 className="font-semibold">Contact</h2><address className="mt-3 space-y-2 not-italic"><p>{clinic.address}</p>{clinic.emails.map(e => <p key={e}><a href={`mailto:${e}`}>{e}</a></p>)}{clinic.phones.map(p => <p key={p.tel}><a href={`tel:${p.tel}`}>{p.display}</a></p>)}</address><Social className="mt-4" /></div></div>
    <div className="mx-auto mt-6 max-w-7xl border-t border-white/20 pt-4 text-sm">
  <p className="text-white/80">© 2026 {clinic.name}. All rights reserved.</p>
  <p className="mt-5 text-center">
    <a href={clinic.devCredit.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center rounded-full border border-white/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-deep">DEV BY  {clinic.devCredit.label}</a>
  </p>
</div></footer>) }
