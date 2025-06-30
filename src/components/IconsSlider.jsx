import '../styles/IconsSlider.css'

function IconsSlider({icons, direction}) {

    const rowOfIcons = icons.map((e, i) => {
        const arr = e.text.split('')
        arr[0] = arr[0].toUpperCase()
        const str = arr.join('')
        const alt = str.replace('_', ' ')

        let className = 'icon '
        if (i % 2 === 0) {
            className = className + 'alt_color'
        }

        return (
            <div key={e.text + i} className={className}>
                <div className="icon_title">{alt}</div>
                <img src={e.src} alt={alt} />
            </div>
        )
    })

    return (
        <div className="icon_slider">
            <div className={`icons ${direction}`}>
                {rowOfIcons}
            </div>
            <div className={`icons ${direction}`}>
                <div className="icon_title">
                    
                </div>
                {rowOfIcons}
            </div>
        </div>
    )
}

export default IconsSlider