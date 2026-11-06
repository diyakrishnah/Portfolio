import { NavLink, Outlet, Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data'

const links = [
  ['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'],
  ['/experience', 'Experience'], ['/certificates', 'Certificates'], ['/resume', 'Resume'], ['/contact', 'Contact']
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  return <div className="site-shell">
    <div className="scanlines" />
    <header className="topbar">
      <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">DK</span><span>DIYA<span className="brand-dot">.</span>DEV</span></Link>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
        {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
      </nav>
      <a className="top-contact" href={`mailto:${profile.email}`}>LET'S TALK <ArrowUpRight size={14}/></a>
    </header>
    <main><Outlet /></main>
    <footer className="footer">
      <span>© {new Date().getFullYear()} {profile.name}. Built with curiosity.</span>
      <div className="socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17}/></a></div>
      <span className="footer-code">SYSTEM STATUS: <b>ONLINE</b></span>
    </footer>
  </div>
}
