import { WHATSAPP, TIKTOK } from '../data/constants'

export default function Footer() {
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
