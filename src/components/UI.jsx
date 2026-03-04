export function Stars({ rating }) {
    return (
        <span className="stars">
            {[1, 2, 3, 4, 5].map(i => (
                <span key={i} className={`star ${i <= Math.round(rating) ? 'star--full' : 'star--empty'}`}>★</span>
            ))}
        </span>
    )
}

export function Badge({ text }) {
    if (!text) return null
    const cls = {
        'Best Seller': 'badge--gold',
        'New': 'badge--cyan',
        'Hot': 'badge--red',
        'Essential': 'badge--purple',
    }[text] || 'badge--gold'
    return <span className={`badge ${cls}`}>{text}</span>
}
