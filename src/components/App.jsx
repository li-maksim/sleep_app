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

  const h2Ref = useRef(null)

  function scrollToH2() {
    if (h2Ref.current) {
      console.log('yup')
      h2Ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  } 

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
        <Header />
        <Home btnFn={scrollToH2} />
        <CollectionSection ref={h2Ref} />
        <ManageSection />
        <FindSection />
        <ReviewsSection />
        <PriceSection price={4.99}/>
        <FAQSection />
        <SubscribeSection />
        <Footer />
        <ToTopButton />
    </div>
    </>
  )
}

export default App
