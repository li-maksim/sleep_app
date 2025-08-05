import '../styles/PriceCard.css'

function PriceCard({title, price, descr, children}) {

    return (
        <div className="price_card">
            <h3 className="h3">{title}</h3>
            <div className="price_val">{price}</div>
            <div className="descr">{descr}</div>
            <ul className="list">
                {children}
            </ul>
        </div>
    )
}

export default PriceCard