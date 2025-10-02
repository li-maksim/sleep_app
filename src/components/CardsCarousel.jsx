import '../styles/CardsCarousel.css'
import { useState, useRef } from 'react'
import arrow from '../assets/icons/arrow.svg'

function CardsCarousel({children}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    function prevSlide() {
        if (currentIndex < 1) {
            setCurrentIndex(children.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    function nextSlide() {
        if (currentIndex > children.length - 2) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const startX = useRef(0)
    const endX = useRef(0)
  
    function handleTouchStart(e) {
      startX.current = e.touches[0].clientX
    }
  
    function handleTouchMove(e) {
      endX.current = e.touches[0].clientX
    }
  
    function handleTouchEnd() {
      const deltaX = startX.current - endX.current;
      const threshold = 50;
  
      if (deltaX > threshold) {
        setCurrentIndex((prev) =>
          prev >= children.length - 1 ? 0 : prev + 1
        )
      } else if (deltaX < -threshold) {
        setCurrentIndex((prev) =>
          prev <= 0 ? children.length - 1 : prev - 1
        )
      }
    }

    const slidesStyles = {
        transform: `translateX(calc(-${currentIndex * 100}% - ${20 * currentIndex}px))`
    }

    return(
        <div className="cards_carousel" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <button className="carousel_btn prev" onClick={() => prevSlide()}>
                <img src={arrow} alt="" />
            </button>
            <div className="carousel_content">
                <div className="slides" style={slidesStyles}>
                    {children}
                </div>
            </div>
            <button className="carousel_btn next" onClick={() => nextSlide()}>
                <img src={arrow} alt="" />
            </button>
        </div>
    )
}

export default CardsCarousel