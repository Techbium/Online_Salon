export default function About() {
    const stats = [
        { num: '100%', label: 'Quality Hair' },
        { num: '3', label: 'Categories' },
        { num: '5★', label: 'Client Rating' },
        { num: '🇳🇬', label: 'Nigeria-wide' },
    ]

    return (
        <section className="about" id="about">
            <div className="about__inner">
                <div className="about__visual">
                    <div className="about__big-card">
                        {stats.map((s, i) => (
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
