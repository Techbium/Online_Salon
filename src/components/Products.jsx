import { useState } from 'react'
import { products, categories } from '../data/products'
import { Badge } from './UI'

export default function Products({ onViewProduct }) {
    const [active, setActive] = useState('All')
    const filtered = active === 'All' ? products : products.filter(p => p.category === active)

    return (
        <section className="products-section" id="products">
            <div className="section-header">
                <span className="section-pill">Available Now</span>
                <h2 className="section-title">Our Hair Collection</h2>
                <p className="section-sub">
                    Human hair, blends, and maintenance essentials. Click any product to view details and order.
                </p>
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
