import '../styles/Card.css'

function Card({type = 'panel', title, descr, img, altText}) {

    let divClass = "card "
    
    if (type === 'panel') divClass = divClass + "panel_card"
    if (type === 'vertical') divClass = divClass + "masonry_card"
    if (type === 'horizontal') divClass = divClass + "masonry_card horizontal"
    
    return (
        <div className="card_wrapper">
            <div className={divClass}>
                <h3 className="h3">{title}</h3>
                <p className="p">{descr}</p>
                {img && <img src={img} alt={altText} className="card_img" />}
            </div>
        </div>
    )
}

export default Card