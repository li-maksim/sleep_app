import '../styles/IconsSlider.css'

function IconsSlider({icons, direction}) {

    const rowOfIcons = icons.map((e, i) => {
        const arr = e.text.split('')
        arr[0] = arr[0].toUpperCase()
        const str = arr.join('')
        const alt = str.replace('_', ' ')

        return (
            <div key={e.text + i} className="icon">
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
                {rowOfIcons}
            </div>
        </div>
    )
}

export default IconsSlider