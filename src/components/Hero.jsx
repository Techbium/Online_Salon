import { products } from '../data/products'
import { WHATSAPP } from '../data/constants'

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__bg-orb hero__bg-orb--1" />
            <div className="hero__bg-orb hero__bg-orb--2" />
            <div className="hero__bg-orb hero__bg-orb--3" />

            <div className="hero__content">
                <div className="hero__badge-row">
                    <span className="hero__pill">✦ Premium Hair — Human, Blends &amp; More</span>
                </div>
                <h1 className="hero__title">
                    Your Beauty<br />
                    <em>Speaks Louder.</em>
                </h1>
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
                    <div key={p.id} className={`hero__product-card hero__product-card--${i + 1}`}>
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
