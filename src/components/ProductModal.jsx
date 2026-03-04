import { WHATSAPP } from '../data/constants'
import { Badge } from './UI'

export default function ProductModal({ product, onClose }) {
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
