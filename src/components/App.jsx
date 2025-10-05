import '../styles/App.css'
import '../styles/bg.css'
import { useRef } from 'react'
import Header from './Header'
import Home from './Home'
import CollectionSection from './CollectionSection'
import ManageSection from './ManageSection'
import FindSection from './FindSection'
import ReviewsSection from './ReviewsSection'
import PriceSection from './PriceSection'
import FAQSection from './FAQSection'
import SubscribeSection from './SubscribeSection'
import Footer from './Footer'
import ToTopButton from './ToTopButton'

function App() {

  const collectionRef = useRef(null)
  const findRef = useRef(null)
  const priceRef = useRef(null)
  const subRef = useRef(null)

  const scrollFns = (() => {
    function scrollToCollection() {
      if (collectionRef.current) {
        collectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } 

    function scrollToFind() {
      if (findRef.current) {
        findRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    function scrollToPrice() {
      if (priceRef.current) {
        priceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    function scrollToSub() {
      if (subRef.current) {
        subRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    return {scrollToCollection, scrollToFind, scrollToPrice, scrollToSub}
  })()

  return (
    < >
    <div className="bg">
      <div className="bg_home">
        <div className="bg_big_circle"></div>
          <div className="bg_pink_circles">
            <div className="bg_circle pink_circle"></div>
            <div className="bg_circle pink_circle"></div>
          </div>
          <div className="bg_blue_circles">
            <div className="bg_circle blue_circle"></div>
            <div className="bg_circle blue_circle"></div>
            <div className="bg_circle blue_circle"></div>
          </div>
          <div className="bg_red_circles">
            <div className="bg_circle red_circle"></div>
            <div className="bg_circle red_circle"></div>
            <div className="bg_circle red_circle"></div>
          </div>
          <div className="bg_wave bg_home_wave"></div>
      </div>
      <div className="bg_manage">
        <div className="bg_circle light_blue_circle"></div>
        <div className="bg_big_circle"></div>
        <div className="bg_circle yellow_circle"></div>
        <div className="bg_circle red_circle"></div>
      </div>
      <div className="bg_find">
        <div className="bg_circle bg_big_circle"></div>
        <div className="bg_circle white_circle"></div>
        <div className="bg_circle light_blue_circle"></div>
        <div className="bg_circle yellow_circle"></div>
      </div>
      <div className="bg_price">
        <div className="bg_circle yellow_circle"></div>
        <div className="bg_circle light_blue_circle"></div>
        <div className="bg_big_circle"></div>
        <div className="bg_big_circle"></div>
        <div className="bg_circle pink_circle"></div>
      </div>
      <div className="bg_subscribe">
        <div className="bg_big_circle"></div>
        <div className="bg_circle light_blue_circle"></div>
        <div className="bg_circle red_circle"></div>
        <div className="bg_circle yellow_circle"></div>
      </div>
    </div>
      <div className="app">
        <Header fns={scrollFns} />
        <Home btnFn={scrollFns.scrollToCollection} />
        <CollectionSection ref={collectionRef} />
        <ManageSection />
        <FindSection ref={findRef} />
        <ReviewsSection />
        <PriceSection ref={priceRef} price={4.99}/>
        <FAQSection />
        <SubscribeSection ref={subRef} />
        <Footer />
        <ToTopButton />
    </div>
    </>
  )
}

export default App
