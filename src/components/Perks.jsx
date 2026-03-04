import { perks } from '../data/perks'

export default function Perks() {
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
