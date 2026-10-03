import { useState, type FormEvent } from 'react'; import { MessageCircle, Phone } from 'lucide-react'; import { clinic, waLink } from '../config'
const opts = ['Emergency Services', 'Gynaecology and Obstetrics', 'General Surgery', 'Pediatric Care', 'Laboratory Services', 'Scanning and Diagnostics', 'Family Planning', 'Immunization', 'Stroke Management', 'Physiotherapy and Chiropractic Services', 'General Enquiry']
const F = ({ l, id, err, children }: { l: string; id: string; err?: string; children: React.ReactNode }) => <div><label htmlFor={id} className="mb-1 block font-medium">{l}</label>{children}{err && <p role="alert" className="mt-1 text-sm text-red-700">{err}</p>}</div>

export function AppointmentForm() {
  const [err, setErr] = useState<Record<string, string>>({})
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>; const x: Record<string, string> = {}
    if (!d.name?.trim()) x.name = 'Enter your full name.'
    if (!/^\+?[0-9\s-]{10,15}$/.test(d.phone ?? '')) x.phone = 'Enter a valid phone number.'
    if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) x.email = 'Enter a valid email address.'
    setErr(x); if (Object.keys(x).length) return

    window.open(waLink(`Appointment enquiry\nName: ${d.name}\nPhone: ${d.phone}\nService: ${d.service}\nPreferred: ${d.date} ${d.time}\n${d.message}`), '_blank')
  }
  return (<section id="appointment" className="scroll-mt-20 px-4 py-16 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
    <div className="lg:col-span-2"><h2 className="h text-3xl text-deep sm:text-4xl">Your next step towards better healthcare starts here.</h2><p className="mt-4 text-lg">This is an appointment enquiry, not a confirmed booking. The clinic will respond to arrange a time. Please do not share detailed medical information here.</p>
      <p className="mt-4 rounded-xl border-2 border-deep p-4 font-medium">In an emergency, do not wait for a form response. Call {clinic.phones[0].display} or visit the clinic.</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col"><a className="btn o" href={waLink()}><MessageCircle size={18} />Chat on WhatsApp</a><a className="btn o" href={`tel:${clinic.phones[1].tel}`}><Phone size={18} />Call {clinic.phones[1].display}</a></div></div>
    <form noValidate onSubmit={submit} className="grid gap-4 rounded-3xl bg-mint p-5 sm:grid-cols-2 sm:p-8 lg:col-span-3">
      <F l="Full name" id="name" err={err.name}><input id="name" name="name" autoComplete="name" className="in" /></F>
      <F l="Phone number" id="phone" err={err.phone}><input id="phone" name="phone" type="tel" autoComplete="tel" className="in" /></F>
      <F l="Email (optional)" id="email" err={err.email}><input id="email" name="email" type="email" className="in" /></F>
      <F l="Department / service" id="service"><select id="service" name="service" className="in">{opts.map(o => <option key={o}>{o}</option>)}</select></F>
      <F l="Preferred date" id="date"><input id="date" name="date" type="date" className="in" /></F>
      <F l="Preferred time" id="time"><input id="time" name="time" type="time" className="in" /></F>
      <div className="sm:col-span-2"><F l="Message" id="message"><textarea id="message" name="message" rows={4} className="in" /></F></div>
      <button className="btn p sm:col-span-2" type="submit">Request an Appointment</button>
      <p className="text-sm sm:col-span-2">Submitting opens WhatsApp with your enquiry ready to send.</p></form></div></section>) }

export function ContactForm() {
  const [err, setErr] = useState<Record<string, string>>({})
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>; const x: Record<string, string> = {}
    if (!d.name?.trim()) x.name = 'Enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(d.email ?? '')) x.email = 'Enter a valid email address.'
    if (!d.message?.trim()) x.message = 'Enter a message.'
    setErr(x); if (Object.keys(x).length) return
    // TODO: connect a backend. Until then, open the user's mail app (no false "sent" message).
    location.href = `mailto:${clinic.emails[0]}?subject=${encodeURIComponent(d.subject || 'Website enquiry')}&body=${encodeURIComponent(`${d.message}\n\n${d.name}\n${d.phone}`)}`
  }
  return (<form noValidate onSubmit={submit} className="grid gap-4">
    <F l="Full name" id="cn" err={err.name}><input id="cn" name="name" className="in" /></F><F l="Email" id="ce" err={err.email}><input id="ce" name="email" type="email" className="in" /></F>
    <F l="Phone" id="cp"><input id="cp" name="phone" type="tel" className="in" /></F><F l="Subject" id="cs"><input id="cs" name="subject" className="in" /></F>
    <F l="Message" id="cm" err={err.message}><textarea id="cm" name="message" rows={4} className="in" /></F><button className="btn p" type="submit">Send Message</button></form>) }
