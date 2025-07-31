import '../styles/Slider.css'

function Slider({children, direction}) {

    return (
        <div className="slider">
            <div className={`slider_elements ${direction}`}>
                {children}
            </div>
            <div className={`slider_elements ${direction}`}>
                {children}
            </div>
        </div>
    )
}

export default Slider