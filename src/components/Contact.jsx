import { useState } from 'react'
import { products } from '../data/products'
import { WHATSAPP, TIKTOK } from '../data/constants'

export default function Contact() {
    const [form, setForm] = useState({ name: '', interest: '', message: '' })
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
                            <div className="field">
                                <label>Interested In</label>
                                <select name="interest" value={form.interest} onChange={change} required>
                                    <option value="">Select a product...</option>
                                    {products.map(p => (
                                        <option key={p.id} value={p.name}>{p.name}</option>
                                    ))}
                                    <option value="Other">Other / Not Sure</option>
                                </select>
                            </div>
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
