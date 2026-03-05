import { useState, useEffect } from 'react'
import './App.css'

// ─── ASSETS ──────────────────────────────────────────────────────────────────
import hh1 from './assets/Human_hair/IMG-20260304-WA0083.jpg'
import hh2 from './assets/Human_hair/IMG-20260304-WA0081.jpg'
import hh3 from './assets/Human_hair/IMG-20260304-WA0082.jpg'
import hh4 from './assets/Human_hair/IMG-20260304-WA0084.jpg'

import bl1 from './assets/Blends/IMG-20260304-WA0085.jpg'
import bl2 from './assets/Blends/IMG-20260304-WA0086.jpg'
import bl3 from './assets/Blends/IMG-20260304-WA0093.jpg'
import bl4 from './assets/Blends/IMG-20260304-WA0094.jpg'
import bl5 from './assets/Blends/IMG-20260304-WA0095.jpg'
import bl6 from './assets/Blends/IMG-20260304-WA0096.jpg'
import bl7 from './assets/Blends/IMG-20260304-WA0097.jpg'

import kit1 from './assets/Hair_maintainance_kit_and_tools/IMG-20260304-WA0089.jpg'
import kit2 from './assets/Hair_maintainance_kit_and_tools/IMG-20260304-WA0090.jpg'

import client1 from './assets/clients/IMG-20260304-WA0087.jpg'
import client2 from './assets/clients/IMG-20260304-WA0088.jpg'

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const WHATSAPP = 'https://wa.me/2347048890280'
const TIKTOK = 'https://www.tiktok.com/@Nasna\'s_Luxury_Empire'

// ─── DATA ────────────────────────────────────────────────────────────────────
const products = [
  // ── Human Hair ──
  {
    id: 1,
    name: 'Ginger Body Wave Wig',
    category: 'Human Hair',
    badge: 'Best Seller',
    image: hh1,
    description: '100% human hair. Rich ginger body wave with a gorgeous, voluminous curl pattern. Pre-plucked HD lace.',
    lengths: ['14"', '16"', '18"', '20"', '22"'],
  },
  {
    id: 2,
    name: 'Platinum Blonde Straight Bob',
    category: 'Human Hair',
    badge: 'Hot',
    image: hh2,
    description: 'Silky #613 platinum blonde straight bob. Undetectable HD lace. Minimal shedding and tangle-free.',
    lengths: ['10"', '12"', '14"'],
  },
  {
    id: 3,
    name: 'Burgundy Kinky Curly Wig',
    category: 'Human Hair',
    badge: 'New',
    image: hh3,
    description: 'Lush, tight kinky curls in a stunning deep burgundy. 100% virgin hair, 5x5 lace closure, 180% density.',
    lengths: ['14"', '16"', '18"', '20"'],
  },
  {
    id: 4,
    name: 'Ginger Straight Bob Wig',
    category: 'Human Hair',
    badge: null,
    image: hh4,
    description: 'Sleek, vibrant ginger straight bob. Blunt cut, full ends, perfect for a bold and chic look.',
    lengths: ['10"', '12"', '14"'],
  },
  // ── Blends ──
  {
    id: 5,
    name: 'Jet Black Straight Wig',
    category: 'Blends',
    badge: 'Best Seller',
    image: bl1,
    description: 'Natural jet black straight blend wig. Smooth and sleek with a natural-looking hairline.',
    lengths: ['16"', '18"', '20"', '22"'],
  },
  {
    id: 6,
    name: 'Natural Black Body Wave',
    category: 'Blends',
    badge: null,
    image: bl2,
    description: 'Classic natural black body wave blend. Full, luscious waves that hold beautifully all day.',
    lengths: ['16"', '18"', '20"', '22"', '24"'],
  },
  {
    id: 7,
    name: 'Blonde Highlight Waves',
    category: 'Blends',
    badge: 'New',
    image: bl3,
    description: 'Short wavy blend with stunning blonde highlights on a dark root. Glamorous and full of volume.',
    lengths: ['12"', '14"', '16"'],
  },
  {
    id: 8,
    name: 'Burgundy Curly Bob',
    category: 'Blends',
    badge: null,
    image: bl4,
    description: 'Deep burgundy curly bob blend. Tight, bouncy curls with a beautiful rich wine tone.',
    lengths: ['12"', '14"'],
  },
  {
    id: 9,
    name: 'Purple Straight Long Wig',
    category: 'Blends',
    badge: 'Hot',
    image: bl5,
    description: 'Striking dark purple straight blend. Pin-straight, super smooth, and floor-length drama.',
    lengths: ['20"', '22"', '24"', '26"'],
  },
  {
    id: 10,
    name: 'Brown Highlight Body Wave',
    category: 'Blends',
    badge: null,
    image: bl6,
    description: 'Rich brown body wave blend with warm orange highlights. Soft, bouncy, and effortlessly glam.',
    lengths: ['14"', '16"', '18"'],
  },
  {
    id: 11,
    name: 'Dark Chocolate Straight',
    category: 'Blends',
    badge: null,
    image: bl7,
    description: 'Deep dark chocolate straight blend wig. Ultra-smooth, high shine, and naturally elegant.',
    lengths: ['18"', '20"', '22"', '24"'],
  },
  // ── Maintenance Kits & Tools ──
  {
    id: 12,
    name: 'Wig Holder Stand Set',
    category: 'Maintenance Kits & Tools',
    badge: 'Essential',
    image: kit1,
    description: 'Foldable wig holder stands in 4 colours. Keeps your wigs perfectly shaped when not in use.',
    lengths: [],
  },
  {
    id: 13,
    name: 'Pro Hot Comb Straightener',
    category: 'Maintenance Kits & Tools',
    badge: 'New',
    image: kit2,
    description: 'SONAR professional electric hot comb. EU/US/UK plug compatible. Straightens and smooths with salon precision.',
    lengths: [],
  },
]

const categories = ['All', 'Human Hair', 'Blends', 'Maintenance Kits & Tools']

const testimonials = [
  {
    name: 'Happy Client',
    image: client1,
    text: 'I am absolutely in love with my hair from Nasna\'s Luxury Empire! The quality is unreal — soft, full, and it turns heads everywhere I go. Will definitely be ordering again!',
    rating: 5,
  },
  {
    name: 'Satisfied Customer',
    image: client2,
    text: 'Best hair purchase I have ever made. The curls are so defined and the lace is completely invisible. Fast delivery and great customer service too. 10/10!',
    rating: 5,
  },
]

const perks = [
  { icon: '🚚', title: 'Fast Delivery', desc: 'Nigeria-wide delivery. Quick turnaround on every order.' },
  { icon: '💎', title: '100% Quality Hair', desc: 'Human & premium blend hair, strictly quality-checked.' },
  { icon: '✂️', title: 'Stylist Approved', desc: 'Trusted by professional hairstylists across Nigeria.' },
  { icon: '📱', title: 'Order via WhatsApp', desc: 'Chat with us directly to confirm your order anytime.' },
]

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function Stars({ rating }) {
  return (
    <span className="stars">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={`star ${i <= Math.round(rating) ? 'star--full' : 'star--empty'}`}>★</span>
      ))}
    </span>
  )
}

function Badge({ text }) {
  if (!text) return null
  const cls = {
    'Best Seller': 'badge--gold',
    'New': 'badge--cyan',
    'Hot': 'badge--red',
    'Essential': 'badge--purple',
  }[text] || 'badge--gold'
  return <span className={`badge ${cls}`}>{text}</span>
}

// ─── PRODUCT DETAIL MODAL ────────────────────────────────────────────────────
function ProductModal({ product, onClose }) {
  if (!product) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal__image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="modal__body">
          <div className="modal__header-row">
            <Badge text={product.badge} />
            <span className="product-card__category">{product.category}</span>
          </div>
          <h2 className="modal__name">{product.name}</h2>
          <p className="modal__desc">{product.description}</p>
          {product.lengths.length > 0 && (
            <div className="modal__section">
              <h4>Available Lengths</h4>
              <div className="modal__lengths">
                {product.lengths.map(l => (
                  <span key={l} className="length-chip">{l}</span>
                ))}
              </div>
            </div>
          )}
          <div className="modal__price-row">
            <span className="modal__price-note">Contact us to get the price &amp; place your order</span>
          </div>
          <a
            href={`${WHATSAPP}?text=Hi! I'm interested in: ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary btn--full"
            onClick={onClose}
          >
            💬 Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── SECTIONS ────────────────────────────────────────────────────────────────
function Navbar() {
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

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg-orb hero__bg-orb--1" />
      <div className="hero__bg-orb hero__bg-orb--2" />
      <div className="hero__bg-orb hero__bg-orb--3" />

      <div className="hero__content">
        <div className="hero__badge-row">
          <span className="hero__pill">✦ Premium Hair — Human-hair, Blends &amp; More</span>
        </div>
        <h1 className="hero__title">
          NASNA'S<br />
          <span>LUXURY EMPIRE</span>
        </h1>
        <p className="hero__motto">Your Beauty Speaks Louder.</p>
        <p className="hero__sub">
          Nasna's Luxury Empire brings you premium human hair, stunning blends,
          and professional hair maintenance kits. Browse and order directly via WhatsApp.
        </p>
        <div className="hero__actions">
          <a href="#products" className="btn btn--primary btn--lg">Browse the Collection</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn--ghost btn--lg">💬 WhatsApp Us</a>
        </div>
        <div className="hero__trust">
          <span>⭐ 5★ Rated by Clients</span>
          <span className="hero__trust-sep">·</span>
          <span>🚚 Fast Nationwide Delivery</span>
          <span className="hero__trust-sep">·</span>
          <span>💎 Premium Quality Guaranteed</span>
        </div>
      </div>

      <div className="hero__visual">
        {products.slice(0, 3).map((p, i) => (
          <div
            key={p.id}
            className={`hero__product-card hero__product-card--${i + 1}`}
          >
            <div className="hero__product-thumb">
              <img src={p.image} alt={p.name} />
            </div>
            <div className="hero__product-info">
              <p className="hero__product-name">{p.name}</p>
              <p className="hero__product-cat">{p.category}</p>
            </div>
            {p.badge && <span className="hero__inline-badge">{p.badge}</span>}
          </div>
        ))}
        <div className="hero__floating-badge">
          <span className="hero__floating-badge-icon">✓</span>
          <div>
            <p className="hero__floating-badge-title">100% Authentic Hair</p>
            <p className="hero__floating-badge-sub">Every piece quality-checked before shipping</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Perks() {
  return (
    <section className="perks">
      <div className="perks__grid">
        {perks.map((p, i) => (
          <div className="perk" key={i}>
            <span className="perk__icon">{p.icon}</span>
            <div>
              <h4 className="perk__title">{p.title}</h4>
              <p className="perk__desc">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Products({ onViewProduct }) {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <span className="section-pill">Available Now</span>
        <h2 className="section-title">Our Hair Collection</h2>
        <p className="section-sub">Human hair, blends, and maintenance essentials. Click any product to view details and order.</p>
      </div>

      <div className="filter-tabs">
        {categories.map(c => (
          <button
            key={c}
            className={`filter-tab ${active === c ? 'filter-tab--active' : ''}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map(p => (
          <div
            className="product-card"
            key={p.id}
            onClick={() => onViewProduct(p)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && onViewProduct(p)}
          >
            <div className="product-card__image">
              <img src={p.image} alt={p.name} />
              <Badge text={p.badge} />
            </div>
            <div className="product-card__body">
              <span className="product-card__category">{p.category}</span>
              <h3 className="product-card__name">{p.name}</h3>
              <p className="product-card__desc">{p.description}</p>
              <div className="product-card__footer">
                <span className="product-card__cta">View Details →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__visual">
          <div className="about__big-card">
            {[
              { num: '100%', label: 'Quality Hair' },
              { num: '3', label: 'Categories' },
              { num: '5★', label: 'Client Rating' },
              { num: '🇳🇬', label: 'Nigeria-wide' },
            ].map((s, i) => (
              <div className="about__stat-block" key={i}>
                <span className="about__stat-num">{s.num}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="about__tag">✦ Nasna's Luxury Empire · Premium Hair Brand</p>
        </div>

        <div className="about__content">
          <span className="section-pill">Our Story</span>
          <h2 className="section-title">Luxury Hair,<br />Made Accessible</h2>
          <p className="about__text">
            Nasna's Luxury Empire was built for women who demand the best. We supply
            <strong> 100% human hair wigs</strong>, premium blend styles, and professional
            maintenance kits — all curated for quality you can see and feel the moment it arrives.
          </p>
          <p className="about__text">
            Every piece is inspected before it ships. We deliver nationwide across Nigeria and
            stand behind every order. Your beauty speaks louder — and we make sure your hair does too.
          </p>
          <div className="about__badges">
            <span className="about__badge">✓ Premium Quality</span>
            <span className="about__badge">✓ Fast Delivery</span>
            <span className="about__badge">✓ Easy WhatsApp Orders</span>
          </div>
          <a href="#products" className="btn btn--primary">Browse the Collection</a>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="section-header">
        <span className="section-pill">Reviews</span>
        <h2 className="section-title">Real Clients, Real Results</h2>
        <p className="section-sub">Hear from the women who wear Nasna's Luxury Empire hair every day.</p>
      </div>

      <div className="review-summary">
        <div className="review-summary__score">5.0</div>
        <div>
          <Stars rating={5} />
          <p className="review-summary__count">100% satisfied clients</p>
        </div>
      </div>

      <div className="reviews__grid">
        {testimonials.map((r, i) => (
          <div className="review-card" key={i}>
            <Stars rating={r.rating} />
            <p className="review-card__text">"{r.text}"</p>
            <div className="review-card__author">
              <div className="review-card__avatar">
                <img src={r.image} alt={r.name} />
              </div>
              <span className="review-card__name">{r.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)
  const change = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const msg =
      `Hi Nasna's Luxury Empire! 👋\n` +
      `I'm ${form.name}\n` +
      `I'm interested in ${form.interest || 'Not specified'}\n` +
      (form.message ? `Details: ${form.message}` : '')
    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__info">
          <span className="section-pill">Place an Order</span>
          <h2 className="section-title">Ready to Order?</h2>
          <p className="section-sub left">
            Fill in the form or reach us directly on WhatsApp and we'll sort out your order, availability, and delivery.
          </p>
          <ul className="contact__list">
            <li><span>📱</span> WhatsApp: +234 704 889 0280</li>
            <li><span>🎵</span> TikTok: @Nasna's_Luxury_Empire</li>
            <li><span>🕐</span> Support: Mon–Sat, 8am–8pm</li>
            <li><span>🚚</span> Nationwide delivery across Nigeria</li>
          </ul>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
            style={{ marginTop: '1.5rem' }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        <div className="contact__form-box">
          {sent ? (
            <div className="contact__success">
              <span>✨</span>
              <h3>Message Sent!</h3>
              <p>We'll reach out within 24 hours to confirm your order.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="contact__form">
              <div className="field">
                <label>Your Name</label>
                <input name="name" type="text" placeholder="Full name" value={form.name} onChange={change} required />
              </div>
              {/* <div className="field">
                <label>Interested In</label>
                <select name="interest" value={form.interest} onChange={change} required>
                  <option value="">Select a product...</option>
                  {products.map(p => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div> */}
              <div className="field">
                <label>Message / Details</label>
                <textarea name="message" rows="4" placeholder="Length, colour, quantity..." value={form.message} onChange={change} />
              </div>
              <button type="submit" className="btn btn--primary btn--full">Send Enquiry ✦</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="navbar__brand">
            <span className="brand-mark">✦</span>
            <span className="brand-name">NASNA'S LUXURY EMPIRE</span>
          </div>
          <p className="footer__tagline">Your Beauty Speaks Louder.</p>
        </div>
        <div className="footer__links-group">
          <h4>Products</h4>
          <a href="#products">Human Hair</a>
          <a href="#products">Blends</a>
          <a href="#products">Maintenance Kits &amp; Tools</a>
        </div>
        <div className="footer__links-group">
          <h4>Info</h4>
          <a href="#about">About Us</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer__links-group">
          <h4>Follow Us</h4>
          <a href={TIKTOK} target="_blank" rel="noreferrer">TikTok</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2026 Nasna's Luxury Empire. All rights reserved.</p>
      </div>
    </footer>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="app">
      <Navbar />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
      <Hero />
      <Perks />
      <Products onViewProduct={setSelectedProduct} />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}