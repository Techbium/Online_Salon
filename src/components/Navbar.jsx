import { useState, useEffect } from 'react'
import { WHATSAPP } from '../data/constants'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', h)
        return () => window.removeEventListener('scroll', h)
    }, [])

    const links = ['Products', 'About', 'Reviews', 'Contact']

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__brand">
                <span className="brand-mark">✦</span>
                <span className="brand-name">NASNA'S LUXURY EMPIRE</span>
            </div>

            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>

            <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
                {links.map(l => (
                    <li key={l}>
                        <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
                    </li>
                ))}
                <li>
                    <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className="nav-cta"
                        onClick={() => setMenuOpen(false)}
                    >
                        Order Now
                    </a>
                </li>
            </ul>
        </nav>
    )
}
