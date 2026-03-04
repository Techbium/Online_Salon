import { testimonials } from '../data/testimonials'
import { Stars } from './UI'

export default function Reviews() {
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
