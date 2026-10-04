import { useEffect, useState } from 'react'; import { Link, useLocation } from 'react-router-dom'; import { AnimatePresence, motion } from 'framer-motion'; import { Menu, X, Phone, CalendarCheck } from 'lucide-react'
import { clinic } from '../config'
const links = [['Home', '/#top'], ['About Us', '/#about'], ['Services', '/#services'], ['Maternity', '/#maternity'], ['Facilities', '/#facility'], ['Contact', '/#contact']]
const icon = '!min-h-10 !w-10 !p-0 shrink-0'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  useEffect(() => setOpen(false), [pathname, hash])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  return (
    <header className="sticky top-0 z-40 [transform:translateZ(0)] [backface-visibility:hidden] border-b border-mint bg-white">
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:px-4 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2" aria-label="KNOT CLINIC AND MATERNITY home">
          <img src="/images/logo.jpeg" alt="" width="44" height="44" className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11" />
          <span className="h whitespace-nowrap text-[0.9375rem] leading-tight text-deep sm:text-lg">KNOT CLINIC<br /><span className="font-sans text-[0.65rem] font-semibold tracking-wide sm:text-xs">& MATERNITY</span></span>
        </Link>
        <ul className="hidden items-center gap-7 lg:flex">{links.map(([l, h]) => <li key={l}><Link className="font-medium hover:text-leaf" to={h}>{l}</Link></li>)}</ul>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <span className="hidden items-center gap-1.5 rounded-full bg-mint px-3 py-1 text-sm font-semibold text-deep xl:flex"><span className="h-2 w-2 rounded-full bg-leaf" />Open 24 hours</span>
          <Link to="/#appointment" className="btn p hidden sm:inline-flex">Book an Appointment</Link>
          <Link to="/#appointment" className={`btn p sm:hidden ${icon}`} aria-label="Book an Appointment"><CalendarCheck size={20} /></Link>
          <a href={`tel:${clinic.phones[0].tel}`} className={`btn o lg:hidden ${icon}`} aria-label="Call the clinic"><Phone size={19} /></a>
          <button type="button" className={`btn o lg:hidden ${icon}`} aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(v => !v)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </nav>
      <AnimatePresence>{open && (
        <motion.div id="mobile-navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-mint bg-white lg:hidden">
          <ul className="px-4 py-3">
            <li className="pb-2"><Link to="/#appointment" onClick={() => setOpen(false)} className="btn p w-full">Book an Appointment</Link></li>
            {links.map(([l, h]) => <li key={l}><Link onClick={() => setOpen(false)} className="block py-3 text-lg font-medium" to={h}>{l}</Link></li>)}
            <li className="flex items-center gap-2 pt-2 pb-1 font-semibold text-deep"><span className="h-2 w-2 rounded-full bg-leaf" />Open 24 hours</li>
          </ul>
        </motion.div>)}</AnimatePresence>
    </header>)
}
